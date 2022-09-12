
let taskName = document.querySelector("#task-name");
let taskSubmit = document.querySelector("#task-submit");
let background = document.querySelector(".background");

if (window.localStorage.getItem("tasks")) {
   background.innerHTML = window.localStorage.getItem("tasks");
}


background.addEventListener("click", (e) => {
   console.log(e.target);
   if (e.target.className === "del-btn") {
      e.target.parentNode.remove();
      window.localStorage.setItem("tasks", background.innerHTML);
   }

});


taskSubmit.addEventListener("click", (e) => {
   e.preventDefault();
   if (taskName.value === "") {
      console.log("Empty task");
   } else {
      console.log(taskName.value);
      createTaskDiv(taskName.value);
      taskName.value = "";
      window.localStorage.setItem("tasks", background.innerHTML);
   }
});


function createTaskDiv(textNode) {


   //create the main task div and its class
   let taskDiv = document.createElement("div");
   taskDiv.className = "task";
   // create text and add text node to main div
   let taskText = document.createTextNode(textNode);
   taskDiv.append(taskText);



   // create div as a delete button
   let deleteBtn = document.createElement("div");
   deleteBtn.className = "del-btn";
   // add the word delete to the button
   let deleteText = document.createTextNode("delete");
   // add the delete word to delete button
   deleteBtn.append(deleteText);

   //add the button to the main task div
   taskDiv.appendChild(deleteBtn);
   /////////////////// delete button Listener ////////////////////

   deleteBtn.addEventListener('click', (e) => {
      window.localStorage.removeItem("tasks");
      e.target.parentNode.remove();
   });

   ///////////////////////////////////////////////////////////////    

   // add main task div its CSS styles
   taskDiv.style.cssText = "display: flex; \
    justify-content: space-between; \
    align-items: center; \
    margin-bottom: 10px; \
    padding: 10px 10px 10px 30px; \
    width: 480px; \
    overflow: hiddens; \
    border-radius: 20px; \
    background-color: white;"

   // add delete button its CSS styles
   deleteBtn.style.cssText = "background-color: #f32156; \
    color: white; \
    font-weight: 400; \
    padding: 5px 10px; \
    margin-right: 10px; \
    border-radius: 20px; \
    cursor: pointer; \
    text-align: right;";

   // add the main div to the background class
   background.appendChild(taskDiv)
   // document.body.appendChild(taskDiv);
}
