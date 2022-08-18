<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      .assign {
        text-align: center;
        padding-top: 20px;
      }
      .assign input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ddd;
      }
      .assign input:focus {
        outline: none;
        border-color: #ccc;
      }
      .assign [title="Current"] {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list h5 {
        margin: 0 0 10px;
        text-align: left;
      }
      .assign .classes-list div span {
        background-color: #ff5722;
        padding: 6px 10px 8px;
        margin-right: 5px;
        border-radius: 6px;
        color: white;
        display: inline-flex;
      }
    </style>
  </head>
  <body>
    <div class="assign">
      <input type="text" class="classes-to-add" placeholder="Add Classes" />
      <input
        type="text"
        class="classes-to-remove"
        placeholder="Remove Classes"
      />
      <div class="element current" title="Current">Current Element</div>
      <div class="classes-list">
        <h5>Current Element Class Lists</h5>
        <div></div>
      </div>
    </div>
    <script src="practice.js"></script>
  </body>
</html>





let addInput = document.querySelector(".classes-to-add");
let remInput = document.querySelector(".classes-to-remove");
let currEle = document.querySelector("[title='Current']");
let showDiv = document.querySelector(".classes-list div");
// console.log(addInput, remInput, currEle, showDiv);

//show currEle classes in showDiv text
function show() {
  if (currEle.classList.value) {
    currEle.classList.value
      .split(" ")
      .sort()
      .forEach(function (el) {
        let x = document.createElement("span");
        x.innerHTML = el;
        showDiv.appendChild(x);
      });
  } else {
    showDiv.innerHTML = "No Classes to show";
  }
}
show();

//accept input and process them

addInput.addEventListener("blur", function () {
  for (let i = 0; i < addInput.value.length; i++) {
    currEle.classList.add(
      addInput.value.trim().toLowerCase().split(" ").sort()[i]
    );
  }
  addInput.value = "";
  showDiv.textContent = "";
  show();
});

//remove remInput from class
remInput.addEventListener("blur", function () {
  for (let i = 0; i < remInput.value.length; i++) {
    currEle.classList.remove(
      remInput.value.trim().toLowerCase().split(" ").sort()[i]
    );
  }
  remInput.value = "";
  showDiv.innerHTML = "";
  show();
});

