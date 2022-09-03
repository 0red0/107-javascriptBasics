
//#94 event simulation (using a function inside the event)
let one = document.querySelector(".one");
let two = document.querySelector(".two");
//focus select choosen field
window.onload = function () {
  two.focus();
};
//blur diselect choosen field
one.onblur = function () {
  document.links[0].click();
};
{
  /* <form action="">
      <input class="one" type="text" />
      <input class="two" type="text" />
      <input type="sumbit" value="submit Data" />
    </form>
    <a href="https://facebook.com" target="_blank">Facebook</a> */
}


//#95 classList
{
  /* <div id="my-div" class="one two show test">Div with many classes</div> */
}

let element = document.getElementById("my-div");

console.log(typeof element.classList); //object
console.log(element.classList); //classes
console.log(element.classList.length);
console.log(element.classList.contains("Osama")); //false
console.log(element.classList.contains("show")); //true
console.log(element.classList.item("0")); // show class by index

element.onclick = function () {
  this.classList.add("add-one", "add-two");
};
element.onclick = function () {
  element.classList.remove("add-one", "dkfd");
};
element.onclick = function () {
  this.classList.toggle("Tamir");
  //toggle the class on/off class list
};    

//#96 CSS .style .stylesheet

//CSS: div{font-size:30px;line-height:2;}
{
  /* <link rel="stylesheet" href="main.css"/>
<div id="my-div">Div with many classes</div> */
}

let element = document.getElementById("my-div");
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontWeight = "bold";
// element.style.cssText = "font-weight:bold; color:blue;opacity:1.2";
element.style.removeProperty("color");
element.style.setProperty("font-size", "32px", "important");
//Alter CSS stylesheet
document.stylesheet[0].rules[0].style.removeProperty("line-height");

//#97 .before .after
let element = document.getElementById("my-div");
let createdP = document.createElement("p");

let myp = document.createTextNode(`paragraph lorem ipsm`);
createdP.appendChild(myp);

element.before(`Hello from JS`);
element.after(createdP, `hi`);

element.append(`, hello from the end`);
element.prepend(`hi from the start ,`);
//element.remove();//remove the element permanently

//#93 DOM traversing
{/* <div id="my-div">
    <span class="one">one</span>
    <!-- Comment -->
    <span class="two">two</span>
    <!-- Comment -->    
    <span class="three">three</span>
</div> */}

let span = document.querySelector(".two");
console.log(span.nextSibling); //comment
console.log(span.nextElementSibling); //three
console.log(span.nextElementSibling.remove());
console.log(span.previousElementSibling); //one
console.log(span.parentElement);
span.onclick = function () {
  span.parentElement.style.opacity = "0";//hide it
};

//#99 .cloneNode
{/* <p id="myp" class="my-p">This is<span>Para</span></p>
<div>DIV</div> */}
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");
myP.id = `${myP.id}-clone`; //change clone id ofc
myDiv.appendChild(myP);


//#100 .addEventListener("event",func(){})
//allows multiple function in one event.

let myP = document.querySelector("p");

function one() {
  console.log("Message from onclick 1");
}
myP.addEventListener("click", function () {
  console.log("Message from event listener");
});
myP.addEventListener("click", one);

myP.onclick = function () {
  let newP = myP.cloneNode(true);//clone p
  newP.className = "cloned";//add class to cloned p
  document.body.appendChild(newP);//append to document
};
/*let cloned = document.querySelector(".cloned");
clonded.onclick = function () {
  console.log("I'm clone");
}; Error onclick*/

document.addEventListener("click", function (e) {
  if (e.target.className === "cloned") {
    console.log("I'm cloned");
  }//log it if clicked on a clone only.
});
