const input = document.querySelector("input");
const addBtn = document.querySelector(".add");
const delBtn = document.querySelector(".del");
const tasksHolder = document.querySelector(".holder");
let tasks = [];

// Add a task
addBtn.addEventListener("click", arrOfTasks);
// Add Input to array & array to localStorage
function arrOfTasks() {
   if (input.value != "") {
      let objTask = {
         id: Date.now(),
         title: input.value,
         done: false,
      };
      tasks.push(objTask);
      window.localStorage.setItem("Tasks", JSON.stringify(tasks));
   } else {
      return;
   }
   return tasks;
}
console.log(tasks);
