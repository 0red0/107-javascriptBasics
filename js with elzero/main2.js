/////////////////////////////////////////////

//#86 what is DOM [with 3 types of selectors]

let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement[0]);

let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement);

let myQueryElement = document.querySelector(".special");
let myQueryElement2 = document.querySelector("#my-div");
console.log(myQueryElement);
console.log(myQueryElement2);

let myQueryElements = document.querySelectorAll(".my-span");
console.log(myQueryElements);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

//#87 Get and Set

let myElement = document.querySelector(".js");
//check how both show html ^^^^
console.log(myElement.textContent);
//change the inner html content
myElement.innerHTML = "Text from <span>Mani.js </span> file";
//change nothing except overwrite the text
myElement.textContent = "Text from <span>Mani.js </span> file";

//Accessing the element and change it directly:

document.images[0].src =
  "https://placebear.com/150/150";
document.images[0].alt = "cat pic"; //change alt
document.images[0].title = "cool catsssss"; // set attribute
document.images[0].id = "pic"; //add id
document.images[0].className = "i"; //add/set class

//getAttribute
//setAttribute
let myLink = document.querySelector(".linko");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com"); //change old
myLink.setAttribute("title", "Twitter");//set new title


/*#88 DOM [Check Attributes]
        Element.attributes    -> shows ele's attributes
        Element.hasAttribute() ->check el has attribute(this)
        Element.hasAttributes -> true or false
        Element.removeAttribute()
*/
/* 
<body>
<div>Div</div>
<p class="para" title="Paragraph" data-src="Testing">Paragraph</p>
<script src="main2.js"></script>
</body>
*/

console.log(document.getElementsByTagName("p")[0].attributes)

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New value");
  }
} else {
  console.log(`Not found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

//#89 Create & Append
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is Div");

myElement.className = "product"; //give element class selector
myElement.setAttributeNode(myAttr); //set an attr method 1
myElement.setAttribute("data-t", "Testing"); //attr method2

//Append Text to element
myElement.appendChild(myText);
//Append comment to element
myElement.appendChild(myComment);
//Append element to body
document.body.appendChild(myElement);

//#90 >>-----CREATE-------<<
let myE = document.createElement("div");
let myH = document.createElement("h2");
let myP = document.createElement("p");

let myHt = document.createTextNode("Products names");
let myPt = document.createTextNode("Products descriptions");

myH.appendChild(myHt);
myP.appendChild(myPt);

myE.appendChild(myH);
myE.appendChild(myP);

document.body.appendChild(myE);

//#92 Events
<button id="btn" onclick="console.log('clicked')">
  Button
</button>;

let myBtn = document.getElementById("btn");
myBtn.onclick = function () {
  console.log("clicked");
};

//body {height:5000px;}
window.onscroll = function () {
  console.log("Scroll");
};

//#93 Validate - Prevent Default (forms)
<form action="">
  <input type="text" name="username" placeholder="Max 10 chars only" />
  <input type="text" name="age" placeholder="Cant be empty" />
  <input type="submit" value="Submit Data" />
</form>;
<a href="https://twitter.com">Twitter</a>;

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput !== "" && userInput.value.length <= 10) {
    userValid = true;
  }
  if (ageInput !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

//#93 Assignments
/*#1
<div id="elzero" class="element" name="js">
JavaScript
</div>*/
console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelector("#elzero"));
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelector(".element"));
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelector("[name = 'js']"));
console.log(document.querySelectorAll("[name = 'js']")[0]);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);

/*#4 .length-
<div class="one" title="two">Two</div>
<div class="two" title="one">One</div>*/
    
let one = document.querySelector("[class = 'one']");
let two = document.querySelector("[class = 'two']");

one.title = one.className;
two.title = two.className;
one.textContent = one.title;
two.textContent = two.title + " " + two.attributes.length;

console.log(one);
console.log(two);
//second solution
let done = document.body.children[0];
let dtwo = document.body.children[1];

let mytitle = dtwo.title;

dtwo.title = done.title;
done.title = mytitle;

done.textContent = done.title;
dtwo.textContent = `${dtwo.title} ${
  document.getElementsByTagName("div").length
}`;

//#6 form-create element-remove em again
{/* <form action="">
      <input
        type="number"
        name="elements"
        class="input"
        placeholder="Number Of Elements"
      />
      <input
        type="text"
        name="texts"
        class="input"
        placeholder="Elements Text"
      />
      <select name="type" class="input">
        <option value="Div">Div</option>
        <option value="Section">Section</option>
      </select>
      <input type="submit" name="create" value="Create" />
      <div class="results"></div>
    </form> */}

    let myselect = document.querySelector("[name='type']");
    let mydiv = document.querySelector("[class='results']");
    let mynum = document.querySelector("[name='elements']");
    let mytext = document.querySelector("[name='texts']");
    
    document.forms[0].onsubmit = function (e) {
      e.preventDefault();//stop onsubmit from reloading
      //removing previous created elements
      document.querySelectorAll(".box").forEach(function (box) {
        box.remove();
      });
      //create elements as much as user inputted 
      for (let i = 0; i < mynum.value; i++) {
        let myelement = document.createElement(myselect.value);
        myelement.className = "box";
        myelement.title = "Element";
        myelement.id = `id="id-${i + 1}`;
        myelement.textContent = `${mytext.value}`;
    
        mydiv.appendChild(myelement);
      }
    };
    


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
