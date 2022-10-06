/* 1- WHY HTML ELEMENTS ARE OBJECTS (TYPEOF ID)?
   2- getElementByClassName doesn't work but querySelector works?DOM1Ass3.html
   3- new Set(typeof Set).size ??
*/
/*
#001 Introduction
#002 Study and problem solving
#003 Setting up Environment
*/
//#004 Chrome Developer tool
      Google inspector tips:
$_ in chrome console = last console value
  screenshot html element ctrl + shift + p >> capture node screenshot
   or right click menu it to from inspect.
  // #005 <script> place   
  // #006 comments
  // #007 Outputs:
  document.write("Hello Helina");
window.alert("Hello World"); //stops execute code after it
console.log("Hello Helena");
document.write("<h1>Hello Helin</h1>");
// #008 console.log + API
API = Application Programing Interface
  // Styling Console
  - Directive % c
console.log("Hello %cHelena", "color: pink; font-size: 1.5rem")
  // #009 ECMAScript `${}`
  // #010 data types = 5 types only
  //#011 variables
  - declare without var
    user = "Osama";
-multi vars on same line
user = "os", age = 33;
-<div id="#" > = var
  html element with id = variable
id.innerHTML = "theChangeUwant";
// #012 Identifiers Name
// #013 let vs const vs var
-Block scope vs function scope //var win
   -reDeceleration ability //var win

// #014 strings [escape operator]
console.log("Elzero \web \\school\""); // {\} is escape op
console.log("Elzero\nweb\nSchool");  // {\n} newLine op

// #015 concatenate strings
console.log(a + " " + b); = console.log(a, b);
console.log(`${a} ${b}`);

// #016 Template Literals vs Legacy code
let title = "Elzeroooo";
let desc = "Elzeroo web school course";
let markUp = `
    <div class="card">
      <div class="child">
        <h2>${title}</h2>
        <p>${desc}</p>
      </div>
    </div>
 `;
document.write(markUp);

// #017 String challenge
//numbers to strings:
String(n)
n.toString()
"" + n
n + ""

// #018 Arithmetic Operators:(+,-,*,/,**,%,++,--)
division remainder, Increment, decrement.
// #019 Unary plus, Unary Negation
   + "100" - ture + null - 0xff - "-100"
// #020 Type Coercion 
true = 1     "" - 2= -2;
false = 0     "1" + 2 + true = string;
null = 0 + "1" + 2 + true = 4;
"" = 0

// #021 Assignment Operators: = ,+= ,/= ,*=
// #022 Operator Challenge

// #023 Numbers
console.log(parseInt("100"));
console.log(+"100");
console.log(+"100 Osama");
console.log(Number("100"));
console.log(parseInt("100 Osama")); //100
console.log(parseFloat("100.5555 Osama"));
console.log(+100.3874.toFixed()); //it switches nums to str add U+
// #024 - Number Methods
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));
console.log(Number.isNaN('Osama'));//true cuz NaN != NaN this the only way to check for NaN.
// #025 - Math Object
console.log(Math.round(99.2));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));
console.log(Math.min(10, 20, 30, 100, -90));
console.log(Math.max(10, 20, 30, 100, -90));
console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Math.floor(Math.random() * 4) + 1); //random num between(0)
// #026 Numbers Challenge

// #027 String Methods:  
let theName = "Ahmed";
console.log(theName);
console.log(theName[1]);
console.log(theName.charAt(2));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
//chain Methods:
console.log(theName.trim().charAt(2).toUpperCase());

// #028 string methods 2
let h = "Elzero Web School";

console.log(h.indexOf("o"));
console.log(h.lastIndexOf("web"));
console.log(h.lastIndexOf("o"));
console.log(h.slice(2, 7));
console.log(h.slice(-5, -1));
console.log(h.split(""));
console.log(h.split(' '));
console.log(h.split('', 3/*how many times*/)); //=> array everytime
/*
slice accepts negative indexes and negative starts;
substring doesn't : any -index is 0;
substr : accept negative start. but end is not index its how many chars;
*/
// #029 Strings Methods 3: 
console.log(h.substring(2));
console.log(h.substring(2, 7));//its ok if(7,2)
console.log(h.substring(-2, 6));//-num = 0
console.log(h.substring(a.length - 5, a.length - 3));

console.log(h.substr(0));
console.log(h.substr(-3));
console.log(h.substr(-5, 2//counted chars));
//true || false
console.log(h.includes('Web'));     //true
console.log(h.includes('Web', 8));   //false
console.log(h.startsWith("E"));     //true
console.log(h.startsWith('zero', 2));//true
console.log(h.endsWith("ro", 6/*length not index*/));//true

// #031 Comparison operators
console.lot(true);
console.log(!true);
console.log(10 == "10"); //== compare values only
console.log(!(10 == "10")); //true or false
console.log(10 === "10"); //=== compare values and data type
// In JavaScript, the comparison operators above can also be used to compare strings. In that case, a dictionary (lexicographical) order is applied.

// #032 Logical operators
console.log(10 == "10" && 10 > 8 && 10 >= 10);
console.log(10 == "10" || 10 > 8 || 10 >= 10);
let gender = "male";
console.log(gender == male ? "Mr" : "Mrs")

// #033 If Condition:
let price = 100;
let discount = true;
let discountAmount = 30;
if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
}
console.log(price);
// #034 Nested If
// #35 Conditional Ternary Operator
let theName = "Mona";
let theGender = "Female";
let theAge = 30;

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);     //stored in a variable.
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${result} ${theName}`);
//Ternary if elses
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
    ? console.log("20 To 60")
    : theAge > 60
      ? console.log("Larger Than 60")
      : console.log("Unknown");

// #036 Nullish Coalescing Operator
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
console.log(Boolean(100)); //true or false test
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = 0;
console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);

// #038 Switch Statement
let day = "5";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

// #040______Arrays________

let arry = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
//accessing array elements
console.log(`Hello ${arry[0]}`);
console.log(`Hello ${arry[2]}`);
console.log(`${arry[1][2]}`);
console.log(`Hello ${arry[3][1]}`);
console.log(`Hello ${arry[3][1][2]}`);
//change elements
console.log(arry);
arry[1] = "Gamal";
console.log(arry);
arry[3] = "Samah";
console.log(arry);
arry[3] = ["Sameh", "Amir"];
console.log(arry);

//check is Array or not:
console.log(Array.isArray(arry));

// #041 Length with Array =====

let arry = ["Ahmed", "Mohamed", "Sayed", "Ali"];
console.log(arry.length);
arry[6] = "Gamal";
console.log(arry);

arry[arry.length - 1] = "Gamal";
console.log(arry);
//control array length
arry.length = 3;
console.log(arry);

// #042 Arrays Methods ======
let arry = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
arry.unshift("Osama", "Nabil");
--add to start//of Array
console.log(arry);

arry.push("Samah", "Eman");
--add to end //ofArray
console.log(arry);

arry.shift();
--remove from start//u can use the value in a var
console.log(arry);
//u can always use ele by index...
let last = arry.pop();
--remove from end//u can use the value in a var
console.log(arry);

// #043 Searching Array
//indexOf(object,fromIndex) = give object index
console.log(arry.indexOf("Ahmed"));// 0 (number)
console.log(arry.indexOf("Ahmed", 2));// index of second one
console.log(arry.lastIndexOf("Ahmed"));// 4
console.log(arry.lastIndexOf("Ahmed", -2));// 0
console.log(arry.includes("Ahmed"));//true

if (arry.indexOf("EFGFH") === -1) {
  console.log("Not Found")
}//-1 with indexOf = Not Found

// #044 Sorting ======
let Africa = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
console.log(Africa);
console.log(Africa.sort());
console.log(Africa.sort().reverse());

// #045
//slice return new Arrays slice(start,end)
console.log(Africa.slice(1, 4));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));

//splice(start, n objs to delete, objs to add)
Africa.splice(0, 2, "Samir", "Tamer");
console.log(Africa);

// #046
//concat() and join(separator) => strings
let allArrays = arry.concat(Africa, arry, [1, 2, 3, 4], "Gamal");
console.log(allArrays);
//return strings
console.log(allArrays.join());
console.log(allArrays.join(""));
console.log(allArrays.join("@"));
console.log(allArrays.join("|"));



// #048-----------LOOPS-----------
for (let i = 0; i < 10; i++) {
  console.log(i); //example
}

// #049 Looping on sequences
let myFriends = ["Osama", "Ahmed", "Sayed", "Ali", "Amir"];
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
====//The above array output same as the below loop;
for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}
====//new arr strings only
let myFriends = [1, 2, "Osama", "Ahmed", "Sayed", "Ali", "Amir"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames);

// #050-Nested Loops
let products = ["Keyboard", "Mouse", "Pen", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log('#'.repeat(10))
  console.log(`#${products[i]}`);
  console.log('#'.repeat(10))

  for (let j = 0; j < colors.length; j++) {
    console.log(`--${colors[j]}`);
  }
  for (let k = 0; k < models.length; k++) {
    console.log(`**${models[k]}`);
  }
}
// #051 Loop Control - Break, Continue, Label

let products = ["Keyboard", "Mouse", "Pen", "Monitor"];
for (let i = 0; i < products.length; i++) {
  if (products[i] === "Pen") {
    break;
  }
  console.log(products[i]);
}
let products = ["Keyboard", 10, 3, "Mouse", "Pen", 49, 30, "Monitor"];
let colors = ["Red", "Green", "Black"];
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}

// #052 for-Loop Advanced Example
let products = ["Keyboard", "Mouse", "Pen", "Monitor"];
let i = 0;
for (; ;) {
  console.log(products[i]);
  i++;//i += 2;to skip a product
  if (i === products.length) break;
}

// #053-Add products to page;
let products = ["Keyboard", "Mouse", "Pen", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Black"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}]${products[i]}</h3>`)
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`/<div>`);

}
// #054 While Loop
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}
// #055 Do While Loop
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;
do {
  console.log(i);
  i++;
} while (false);
console.log(i);

// #057 functions intro =+=+=+=+=+=+=+=+=+First order Functions
//Function deceleration:

function sayHello(username) {
  console.log(`Hello ${username}`);
}
sayHello("Osama");
sayHello("Sayed");
sayHello("Bora3y");

// #058 functions add Arguments
function sayHello(username, age) {
  if (age < 20) {
    console.log(`App is not suitable for you`);
  } else {
    console.log(`Hello ${username} Your Age is ${age}`);
  }
}
sayHello("Osama, 38");
sayHello("Sayed, 40");
sayHello("Bora3y, 18");

// function example 
function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(1991, 2022, 2020);

/* #059 Function return: == break in this example
(nothing comes after it, stops execution)*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `Interrupting`;
    }
  }
}
console.log(10, 20);

//example 2:
function calc(num1, num2) {
  return num1 + num2;
}
console.log(calc(1, 2));

// #060 Function default parameters:(in-case of missing para)

function sayHi(userName, age = "Unknown") {
  /*  if (age === undefined){
        age = "Unknown"; }
      age = age || "Unknown"; //Logical or default */
  return `Hi ${username} Your age is ${age}`;
}
console.log(sayHi("Osama"));

// #061 Rest Parameters:(spread operator [...])
function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(calc(10, 20, 10, 30, 50, 30));

// #061 practice:
function showInfo(us = "un", ag = "un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age ${ag}</p>`);
  document.write(`<p>Hour rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills are hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Osama", 38, 20, "Yes", "Html", "CSS");

// #064 Anonymous Function: declared in a variable
//Function Expression: like a var

let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20));

//show ggGood in console after 2 sec;
setTimeout(function () {
  console.log("ggGood");
}, 2000);

document.getElementById("show").onclick = function () {
  console.log(`show in console`);
};
//'or'
function sayHello() { console.log("Hello Osama") };
document.getElementById("show").onclick = sayHello;

// #065 Nested functions:
//example 1:
function sayMessage(fName, lName) {
  let message = `Hello`;
  //Nested function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}
console.log(sayMessage("Osama", "Mohamed"));

//example 2: Same output as example 1;
function sayMessage(fName, lName) {
  let message = `Hello`;
  //Nested function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

//example 3: Same output as 1&2 with more nested funcs

function sayMessage(fName, lName) {
  let message = `Hello`;
  //Nested function
  function concatMsg() {
    //Nested func
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

// #066 Arrow Function : =>
let print = () => 10;
console.log(print());

--example 2: one para
let print = num => num;
console.log(print(100));

--example 3: more parameters
let print = (num1, num2) => num1, num2;
console.log(print(100, 50));

// #067 Global and Local scope
var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}
console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

// #068 Block scope
var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}
console.log(`From Global ${x}`);

// #069 - Lexical scope (Static)

// #071 - Higher Order Function 
/*_____ _ __MAP_(Array Method)____*/

let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];
for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}  //making traditional newArray
console.log(newArray);

//newArray with Map
let addSelf = myNums.map(function (element, index, arr) {
  return element + element;
}, 10);
console.log(addSelf);

//newArray with Map => Arrow function
let addSelf = myNums.map((el) => el + el);
console.log(addSelf);

//Declare/express any function first if u want
function addition(ele) {
  return ele + ele;
}
let add = myNums.map(addition);
console.log(add);

// #072 Map Practice;
let swappingCases = "elZERo"; //invert string cases
let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");
console.log(sw);

let invertedNumbers = [1, -10, -20, 15, 100, -30]; //invert numbers
let inv = invertedNumbers.map(function (ele) {
  return -ele;
});
console.log(inv);

let ignoreNumbers = "Elz123er4o";//remove numbers
let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);

// #073 - Filter
let friends = ["Ahmed", "Samah", "Sayed", "Asaho", "Amgd", "kola"];

let filteredFriends = friends.filter(function (el) {
  return el.startsWith("A") //return only true outputs
});
console.log(filteredFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
console.log(evenNumbers);

// #074 Filter Practice:
// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");
console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";
let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");
console.log(mixedContent);

// #075 <<___ Reduce ___>>
let nums = [10, 20, 15, 30];
let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`Accumulator => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`###########`);
  return acc + current;
}, 5 /*initial value (optional)*/);
console.log(add);

// #076 Reduce Practice:
let theBigest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "PropagandaTwo",];
let bigest = theBigest.reduce((acc, cur) => acc.length > cur.length ? acc : cur
);
console.log(bigest);

//Filter + Reduce (instead of join);
let removeChars = ["E", "@", "@", "L", "Z", "@", "E", "@", "R", "O"];
let remo = removeChars.filter(function (ele) {
  return ele !== "@";
}).reduce(function (acc, curr) {
  return `${acc}${curr}`;
});
console.log(remo);

// #077 ForEach(function())

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    //Remove active class from all elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    //Add active class to this element
    this.classList.add("active");
    //Hide all Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});
{ } { } { } { } { } { } { OBJECT } { } { } { } { } { }
// #079 Object
// #080 .Dot Notation & Bracket Notation[]
// Dynamic Property Name by var
let myVar = "country";
let user = {
  theName: "Osama",
  theAge: 39,
  height: 955,
  country: "Egypt",
  sayWords: function () {//object's method
    return `Good Morning, MinaSan`;
  },
};
console.log(user.theAge);
console.log(user.sayWords());
console.log(user["country"]);
console.log(user[myVar]);

let objArrV = Object.values(finalObject);//turn object into array of properties' values
let objArrK = Object.keys(finalObject);//turn object into array of properties' names
let objArrE = Object.entries(finalObject);//turn object into array of properties

// #081 - Nested Object
let client = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Ryad",
    Egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (client.available === true) {//client in the local scope
      return `Free for work`;
    } else {
      return `Not free`;
    }
  },
};
console.log(client.name);
console.log(client.skills);
console.log(client.skills.join(" | "));
console.log(client.skills[2]);
console.log(client.addresses.Egypt.one);
console.log(client["addresses"]["Egypt"]);
console.log(client["addresses"]["Egypt"]["one"]);
console.log(client.checkAv());

// #082 Create Objects and Update its properties
let customer = {};
customer.age = 20;              //...
customer["country"] = "Egypt";  //[][]
console.log(customer);

// Create Object With New Keyword => new Object()
let user = new Object({
  age: 20,
});
console.log(user);
user.age = 38;
user["country"] = "Egypt";
user.sayHello = function () {
  return `Hello`;
};
console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());

// #083 - THIS this:
console.log(this); //window
console.log(this === window); //true
myVar = 100;
console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();//window
console.log(sayHello() === window);//true

document.getElementById("cl").onclick = function () {
  console.log(this);//the Element <button id="cl"></button>
};
//this is the object
let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};
console.log(user.ageInDays());

//strict mode usefulness:
1 - catch/defining errors more accurately.
2 - avoid some of the sloppy mode mistakes like using reserved words.

// #084 - Create method to create object (proto)
let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({}); //empty create method
obj.a = 100; //add a property to obj
console.log(obj);

let copyObj = Object.create(user);//user is Prototype
copyObj.age = 50;
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

// #085 - Create object with assign Method
let obj1 = {
  prop: 1,
  meth1: function () {
    return this.prop1;
  },
};
let obj2 = {
  prop: 2,
  meth2: function () {
    return this.prop2;
  },
};
let targetObject = {
  prop1: 100,
  prop3: 3,
};
let finalObject = Object.assign(targetObject, obj1, obj2);//take their properties 
finalObject.prop1 = 200;//update
finalObject.prop4 = 4;//create props
console.log(finalObject);

//assign props to new empty object
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
console.log(newObject);

DOOOOOOOOOOOOOOOOOOOAAAAAAAAAAAQWWOOOOOOOOOOOOOOOOOOOOOOOM

// #086 Document Object Module:
--The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
--The DOM was designed to be independent of any particular programming language

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

let myQueryElements = document.querySelectorAll("[attribute = 'value']");
console.log(myQueryElements);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

// #087 textContent - Get and Set Attributes

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

//Accessing the element and change it directly:

document.images[0].src = "https://placebear.com/150/150";
document.images[0].alt = "cat pic"; //change alt
document.images[0].title = "cool catsssss"; // set attribute
document.images[0].id = "pic"; //add id
document.images[0].className = "i"; //add/set class

//getAttribute("['name']")
//setAttribute("name","value")
let myLink = document.querySelector(".linko");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com"); //change old
myLink.setAttribute("title", "Twitter");//set new title

/* #088 DOM [Check Attributes]
        Element.attributes    -> shows ele's attributes
        Element.hasAttribute() ->check el has attribute(this)
        Element.hasAttributes -> true or false
        Element.removeAttribute() 
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
// #089 Create And Append Elements
let myElement = document.createElement("div");
myElement.className = "product";              //create class
let myAttr = document.createAttribute("data");//create attribute1
myElement.setAttributeNode(myAttr);         //set Attribute to element
myElement.setAttribute("d-test", "testing");//create & set Attribute2
let myText = document.createTextNode("Product One");//create text
myElement.appendChild(myText);
let myComment = document.createComment("This Is Div");
myElement.appendChild(myComment);

document.body.appendChild(myElement);//append element to document body
console.log(myElement);

// #090 Products Practice:
for (let i = 0; i < 10; i++) {
  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");
  let myHeadingText = document.createTextNode(`Product Title ${i + 1}`);
  let myParagraphText = document.createTextNode("Product Description");
  myHeading.appendChild(myHeadingText);
  myMainElement.appendChild(myHeading);
  myParagraph.appendChild(myParagraphText);
  myMainElement.appendChild(myParagraph);
  myMainElement.className = "product";
  document.body.appendChild(myMainElement);
}
// #091 Children
//<div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>
let myElement = document.querySelector("div");
console.log(myElement);
console.log(myElement.children);//elements
console.log(myElement.children[0]);//first element
console.log(myElement.childNodes);//all children
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

// #092 Events
// <button id="btn" onclick="console.log('clicked')">
//   Button
// </button>;
let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("clicked");
};
//body {height:5000px;}
window.onscroll = function () {
  console.log("Scroll");
};

// #093 Validate - Prevent Default (forms)
// <form action="">
//   <input type="text" name="username" placeholder="Max 10 chars only" />
//   <input type="text" name="age" placeholder="Cant be empty" />
//   <input type="submit" value="Submit Data" />
// </form>;
// <a href="https://twitter.com">Twitter</a>;

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
//formVal.html practice: (webDevSimplified.youtube)
form.onsubmit = function (e) {
  let message = [];
  if (nameInput.value === "" || nameInput.value == null) {
    message.push(' Enter Name Please..');
  }
  if (passwordInput.value <= 5) {
    message.push(" Password must be more than 5 characters..")
  }
  if (passwordInput.value === "password") {
    message.unshift(" Password can't be 'password'...")
  }
  if (message.length > 0) {
    e.preventDefault()
    errorMessage.innerHTML = message.join(",");
  }
}
// #094 event trigging/simulation (using event inside the event)
let one = document.querySelector(".one");
let two = document.querySelector(".two");
//focus select chosen field
window.onload = function () {
  two.focus();
};
//blur deselect chosen field
one.onblur = function () {
  document.links[0].click();
};
/* <form action="">
    <input class="one" type="text" />
    <input class="two" type="text" />
    <input type="sumbit" value="submit Data" />
  </form>
  <a href="https://facebook.com" target="_blank">Facebook</a> */

// #095 classList [add, remove, toggle]
/* <div id="my-div" class="one two show test">Div with many classes</div> */
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

// #096 CSS .style .stylesheet

/* CSS: div{font-size:30px;line-height:2;}
<div id="my-div">Div with many classes</div> */

let element = document.getElementById("my-div");
element.style.color = "red"; //inline style
element.style.backgroundColor = "yellow";
element.style.fontWeight = "bold";
element.style.cssText = "font-weight:bold; color:blue;opacity:1.2";
element.style.removeProperty("color");
element.style.setProperty("font-size", "32px", "important");
//Alter CSS stylesheet
document.stylesheet[0].rules[0].style.removeProperty("line-height");

// #097  Before, After, Prepend, Append, Remove:
let element = document.getElementById("my-div");
let createdP = document.createElement("p");

let myp = document.createTextNode(`paragraph lorem ipsm`);
createdP.appendChild(myp);

element.before(`Hello from JS`);
element.after(createdP, `hi`);

element.append(`, hello from the end`);
element.prepend(`hi from the start ,`);
//element.remove();//remove the element permanently

// #098 DOM traversing / 
/* <div id="my-div">
    <span class="one">one</span>
    <!-- Comment -->
    <span class="two">two</span>
    <!-- Comment -->    
    <span class="three">three</span>
</div> */

let span = document.querySelector(".two");
console.log(span.nextSibling); //comment
console.log(span.nextElementSibling); //three
console.log(span.nextElementSibling.remove());
console.log(span.previousElementSibling); //one
console.log(span.parentElement);
span.onclick = function () {
  span.parentElement.style.opacity = "0";//hide it
};

// #099 .cloneNode
/* <p id="myp" class="my-p">This is<span>Para</span></p>
<div>DIV</div> */
let myDiv = document.querySelector("div");
let myP = document.querySelector("p").cloneNode(true);
//if cloneNode(false)[default] = doesn't clone content
myP.id = `${myP.id}-clone`; //change clone id ofc
myDiv.appendChild(myP);

// #100 .addEventListener("event",func(e){e})

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
cloned.onclick = function () {
  console.log("I'm clone");
}; Error onclick*/

document.addEventListener("click", function (e) {
  if (e.target.className === "cloned") {
    console.log("I'm cloned");
  }//log it if clicked on a clone only.
});
//- Capture & Bubbling events = order of events specially paretns and children
//e.stopPropagation()  =  stops eventListener
//ele.addEventListener("event",(){},{once:true})
Event delegation ex: [from WebDevSimplify]

const divs = document.querySelectorAll("div")
divs.forEach(div => { //notice he used forEach div right away no ele
  div.addEventListener("click", () => {
    console.log("hi")
  })
})
//he create new div
//newDiv doesn't get the divs event on it
//solution is :
document.addEventListener("click", e => {
  if (e.target.matches("div")) {
    console.log("hi")
  }
})

//BOOM
// #102 BOM ___
window.document.title = "Hello JS";

// #103 Alert, Confirm, Prompt
window.alert() = alert() = this.alert()

let confirming = confirm('Hello man')
console.log(confirming); //return boolean

let promptMsg = prompt('good day or bad day?')
console.log(promptMsg)

// #104 setTimeout and clearTimeout
setTimeout(function () {
  const ele = document.createElement("h1")
  ele.innerText = "Hello Helina"
  document.body.appendChild(ele)
}, 1500)

//separate the func and use more parameters
let handler = setTimeout(sayHi, 2000, "Helina", 9999)
function sayHi(user, count) {
  const ele = document.createElement("h1")
  ele.innerText = `Hello ${user} ${count} Times`
  document.body.appendChild(ele)
}
//clearTimeout()
document.onclick = () => clearTimeout(handler)

// #105 setInterval and clearInterval
setInterval(function () {
  console.log("Haya")
}, 1000)
//clearInterval <div>5</div>
const divy = document.querySelector("div")
let decount = setInterval(countDown, 1000)
function countDown() {
  divy.innerText -= 1;
  if (divy.innerText === "0") {
    clearInterval(decount)
  }
}

// #106 window location object
window.location.{ Get / Set[URL || Hash || File || Mail] }
console.log(location)//location info
console.log(location.href)//page url
location.href = "google.com";//modify location
location.href = "/#section";//#s in pages
location.host
console.log(location.hostname)//this part: [google.com]
console.log(location.protocol)//http/https
location.hash; //checks on # uses
location.reload();
location.replace("https://google.com")replaces url with no history
location.assign("https://google.com")replaces url history intact

// #107 window.open/close
window.open(url, name / target, windowFeatures, replace)
setTimeout(function () {
  window.open("", "_self", "", false < means not pop up window >);
}, 2000);

setTimeout(function () {
  window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
}, 2000);

// #108 window history object
console.log(history);
history.length
history.back()
history.forward()
history.go(0)(1)(-2)//position in history index
history.pushState(state, 'title', [, url])//add entry to history
replaceState(stateObj, '', url)//modifies the current history entry

// #109   - stop()- print()- focus()- scroll- scrollBy(x, y || Options)
window.stop();//stop mid-loading
let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
window.scroll(1000, 1000);
window.scrollBy({ left: 1000, top: 1000, behavior: 'smooth' });
window.scrollTo({ left: 1000, top: 1000, behavior: 'smooth' });

// #110 Scroll To Top Using ScrollY
- scrollX = PageXOffset]
- scrollY = PageYOffset]

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// #111 - Local Storage
// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);
// Remove One
window.localStorage.removeItem("color");
// Remove All
window.localStorage.clear();
// Get Key
console.log(window.localStorage.key(0)); like[index]
// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

// #112 - Local Storage Color App Practice
// <ul>    ref: BOMless112.html in answers folder
//       <li class="active" data-color="red"></li>
//       <li data-color="blue"></li>
//       <li data-color="green"></li>
//       <li data-color="black"></li>
// </ul>
// <div class="experiment"></div>

const lis = document.querySelectorAll("li");
const displayor = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  displayor.style.background = window.localStorage.getItem("color");
  removeActive()
  document.querySelector(`[data-color = '${window.localStorage.getItem("color")}']`).classList.add("active")
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    removeActive()
    e.target.classList.add("active");
    // window.localStorage.setItem("color", e.target.getAttribute('data-color'))
    window.localStorage.setItem("color", e.target.dataset.color)
    displayor.style.background = window.localStorage.getItem("color");
  })
})

function removeActive() {
  lis.forEach((li) => { li.classList.remove("active"); })
}
// #113 Session Storage
/*  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.sessionStorage.setItem("input-name", this.value);
};
// #114 BOM Challenge

// #115 - Destructuring Arrays
extract data from arrays, objects.
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "AA", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// let [x,y, ,z] = myFriends;//skipping 3rd object
let [, y, , z] = myFriends;//skipping 1st & 3rd object
// console.log(x)
console.log(y)
console.log(z)

// #116 - Destructuring Arrays
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

let [, , , [a, , [, b]]] = myFriends
console.log(a)
console.log(b)

// #117 - Destructuring Arrays swapping variables
let book = "Video";
let video = "Book";

// let stash = book; // Video
// book = video; // Book
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

// #118 - Destructuring Objects
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};
// let theName = user.theName; THE OLD WAY OF LOGGING
// console.log(theName);
({ theName, theAge, theTitle, theCountry } = user);
const { theName, theAge, theCountry } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);

// #119 - Destructuring Objects
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html: h, css },
} = user; // destructured here

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user.skills;
// with const and not () is better when logging
console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

// #120 - Destructuring Function Parameters
const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};
showDetails(user);
// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

// #121 - Destructuring Mixed Content
const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};
const {
  theName: n,
  theAge: a,
  skills: [, , three],//one,two not required for logging
  addresses: { egypt: e },//ksa not required for logging
} = user;
console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);

// #122 - Destructuring Challenge.

// #123 - Set Data Types. new Set()
const arri = [1, 1, 1, 2, 3, "a"];
// const uniArr = new Set(arri);
const uniArr = new Set();
uniArr.add(1).add(1).add(1).add(2).add(3).add('a').add('b');
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);

console.log(arri)
console.log(uniArr);
console.log(uniArr.size);
console.log(arri[5]) // new Stes have no index methods as far as I know

uniArr.add("b");
console.log(uniArr);

uniArr.delete(3);// 3 iterable deleted
console.log(uniArr);
console.log(uniArr.delete("b"))//true, it checks availability before deletion
console.log(uniArr);//"b" deleted

//uniArr.clear()
console.log(uniArr.has("b"))

//conversion to array
[...new Set(iterables)] => array;
let arr = Array.from(setName) => array;

// #124 - Set vs WeakSet
// Values + Keys [Alias For Values]
let iterator = mySet.keys();
console.log(iterator.next().value);
console.log(iterator.next());
//WeakSet only accepts objects 
let myws = new WeakSet([{ A: 1, B: 2 }]);
console.log(myws);

// #125 Map vs Object
let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() { }, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

// #126 Map methods
let newMap = new Map([
  [name, "Osama"],
  ['player', "Yhya"],
  ['country', 'function Eg(kjg)'],
  [false, "Boolean"]
]);

console.log(newMap.has(name));
newMap.set()
console.log(newMap);
console.log(newMap.size)
newMap.delete(name)
console.log(newMap);
console.log(newMap.size)

// #127 Map vs WeakMap

let object1 = { theName: "elzero" };
let myMap = new Map();
myMap.set(object1, "Ovalue");
object1 = null; // override the reference
console.log(myMap);

let object2 = { theName: "elzero" };
let myWeakMap = new WeakMap();
myWeakMap.set(object2, "Ovalue")
object2 = null; // override the reference
console.log(myWeakMap)

// #128 Array.from (object, it accepts functions)
console.log(Array.from("Osama"))
console.log(Array.from("12354", (n) => +n + +n));
let arr = [1, 1, 1, 3, 2, 4];
let uset = new Set(arr);

console.log(uset)
console.log(Array.from(uset))

function test() {
  return arguments;
}
console.log(test("Osama", "Ahmed", "Sayed", 1, 2, 3));
let func = test("Osama", "Ahmed", "Sayed", 1, 2, 3)[1];
console.log(func)

// #129 Array.copyWithin()
let myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(-6, -2, -1)
console.log(myArray)

// #130 arr.some()
// some kinda like reduce

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
let myNumber = 22;

//simple check
let check = nums.some((e) => {
  // console.log("test")//itsa loop, maarioo
  return e > 5
}, myNumber);
console.log(check)

//check equality
let equals = nums.some(function (e) {
  return e === this;
}, myNumber);
console.log(equals)

function checkArr(arr, val) {
  return arr.some((n) => {
    return n === val;
  })
};
console.log(checkArr(nums, 111));

let rangee = {
  min: 10,
  max: 20,
}
// function inRange() {
//    return nums.some((n) => n > rangee.min && n < rangee.max);
// }
// console.log(inRange())

let rangeCheck = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, rangee);
console.log(rangeCheck)

// #131 every 
const locations = {
  20: "place 1",
  30: "place 2",
  10: "place 3",
  40: "place 4",
}
let mainLocation = 15;
// let stringedArr = arr.map((e) => +e); // parse it.
let check = Array.from(Object.keys(locations)).every(function (e) {
  return e > this;
}, mainLocation)
console.log(check)

// #132 rest/spread operator 
// - use spread operator on String
console.log(..."Osama")
// - add[] to Stringa
console.log([..."Osama"])
// - concatenat with spread operator 2Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2])
// - copy Array with spread operator
let copyarr = [...arr1]
console.log(copyarr)
// - use ... with push new iterables
let newFriends = ["osama", "Ahmed"]
arr1.push(...newFriends);
console.log(arr1)
// - Math object
console.log(Math.max(...arr2))//just like that

// - ... to concatenat objects / merge
let obj1 = {
  name: "samir",
  age: 14,
}
let obj2 = {
  friend: "shahir",
  address: 15,
}
let newobj = { ...obj1, ...obj2, ego: 99 }
console.log(newobj)

// #134 Regular Expression
applyed on:
let str1 = '10 20 100 1000 5000';
let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';
let invalidEmail = 'Osama@@@gmail....com';
let validEmail = 'o@nn.sa';//E-mails
let ip = '192.168.2.1'; // IPv4
let url = 'elzero.org';//url

// #135 RE Modifiers & .match(Search Methods)
/* Syntax
/pattern/modifier(s);
new RegExp("pattern", "modifier(s)")
*/
Modifiers => Flags
i => case -insensitive
g => global
m => Multilines

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;

console.log(myString.match(regex));

// #136 Ranges part1
(X | Y) => X Or Y
[0 - 9] => 0 To 9
[^ 0 - 9] => Any Character Not 0 To 9

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

// #137 Range part2
let myString = "AaBbcdefG123!234%^&*";
^ = not in Regular Expression
// let strRe = /[a-z]/g;
// let strRe = /[^a-z]/g;
// let strRe = /[A-Z]/g;
// let strRe = /[^A-Z]/g;
// let strRe = /(A|Z)/g;
// let strRe = /[A-Z  a-z]/g;// [A-Z]|[a-z] = [A-Z | a-z]
// let strRe = /[^A-Z a-z]/g;// special chars and nums
// let strRe = /[abce]/g;// within range of this
let strRe = /[^A-Z0-9sa-z]/g;

console.log(myString.match(strRe))

  // #138 RE Character Classes
  . => matches any character, except newline or other line terminators.
\w => matches word characters. [a - z, A - Z, 0 - 9 And Underscore]
\W => matches Non word characters
\d => matches digits from 0 to 9.
\D => matches non - digit characters.
\s => matches whitespace character.
\S => matches non whitespace character.
\group => Back reference use group in same line.
/ [asd] / g;  === /(a|s|d)/g;
* /

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let validEmail = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(validEmail));

// #139 Character Classes2 & .test(t/f)
\b => section at the beginning or end of a word.
\B => section NOT at the beginning / end of a word.
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test("Osama"));
console.log(/(\bspam|spam\b)/ig.test("1Spam"));
console.log(/(\bspam|spam\b)/ig.test("Spam1"));


// #140 RE Quantifiers 
(letter / number / symbol / word / charClass) +    => One Or More
n *    => zero or more //somthings there or not
n ?    => zero or one //somthing there or not

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));

// #141 RE Quantifiers Numbers of numbers
  n{ x }   => Number of
  n{ x, y } => Range
  n{ x,}  => At Least x
let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

// #142  Quantifiers 3
$ => End With Something
  ^  => Start With Something
    ?= => Followed By Something
      ? ! => Not Followed By Something
        ?<= => Preceded By Something
          ?< ! => Not preceded By Something

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
console.log(/lz$/ig.test(names));
console.log(/^\d/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));

// #143 .replace(pattern, replacer) & replaceAll(,)
let txt = "We Love Programming And @ Because @ Is Amazing";
let regEx = /@/g;
console.log(txt.replaceAll(regEx, "Js"))

// #144 RE quick short Form Validation
document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
}
// #145 - Test Your Regular Expression sites
// https://elzero.org/javascript-2021-test-your-regular-expression-and-discussions/

// #146 RE Challenge.

// #147 OOP Intro

// #148 - constructor function.

function User(id, userName, salary) {
  this.i = id;
  this.u = userName;
  this.s = salary;
}
let userOne = new User(134, "osama", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

// #149 - constructor function New Syntax.
class User {
  constructor(id, userName, salary) {
    this.i = id;
    this.u = userName;
    this.s = salary;
  }
}
let userOne = new User(134, "osama", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userOne instanceof User)
console.log(userOne.constructor === User)

// #150 Properties and Methods
class User {
  constructor(id, userName, salary) {
    // Object Properties
    this.i = id;
    this.u = userName || "Unknown";
    this.s = salary < 6000 ? salary + 300 : salary;
    this.msg = function () {
      return `Hello ${this.u}, Your salary is ${this.s}`;
    }
  }
  //Methods
  writeMsg() {
    return `Goodbye ${this.u}, Your id is ${this.i}.`;
  }
}
let userOne = new User(134, "osama", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

// #151 - Update Properties & Built-in Constructors
class User {
  constructor(id, userName, salary) {
    this.i = id;
    this.u = userName || "Unknown";
    this.s = salary < 6000 ? salary + 300 : salary;
  }
  updateName(newUserName) {
    return this.u = newUserName;
  }
}
let userOne = new User(134, "osama", 5000);

console.log(userOne.u);
userOne.updateName("ELZERO");
console.log(userOne.u);

//built in constructors
let num = 123;
let num2 = new Number(133);

console.log(typeof num)
console.log(typeof num2)

console.log(num instanceof Number)
console.log(num2 instanceof Number)
// they use js built-in constructors to exist 
console.log(num.constructor === Number)
console.log(num2.constructor === Number)

// #152 - Static Properties and Methods.
class User {
  static count = 0;
  constructor(id, userName, salary) {
    this.i = id;
    this.u = userName || "Unknown";
    this.s = salary < 6000 ? salary + 300 : salary;
    User.count++;
  }
  static usersCount() {
    return `${User.count} Users Created.`
  }
}
let userOne = new User(134, "osama", 5000);
let userTwo = new User(134, "osama", 5000);
let userThree = new User(134, "osama", 5000);

console.log(userOne.u);
console.log(User.usersCount())

//#153 Class Inheritance.
class User {
  constructor(id, userName) {
    this.i = id;
    this.u = userName;
  }
  sayHello() {
    return `Hello ${this.u}.`
  }
}
class Admin extends User {
  constructor(id, userName, permissions) {
    super(id, userName);
    this.p = permissions;
  }
}
let user1 = new User(23, "Osama");
console.log(user1.u)
let admin1 = new Admin(434, "Roy", "Low")
console.log(admin1.u)
console.log(admin1.i)
console.log(admin1.p)
console.log(admin1.sayHello())

// #154 - Encapsulation
class User {
  #e; //private modifier declaration
  constructor(id, userName, eSalary) {
    this.i = id;
    this.u = userName;
    this.#e = eSalary;
  }
  showPrivate() {
    return parseInt(this.#e);
  }
}
class Admin extends User {
  #e;
  constructor(id, userName, eSalary) {
    super(id, userName, eSalary)
  }
  getSalary() {
    return parseInt(this.#e);
  }
}
let admin1 = new Admin(54, "Tamir", "9120");
let user1 = new User(23, "Osama", "4000 Gneh");
console.log(user1.showPrivate() * .3);
console.log(admin1.showPrivate())
console.log(admin1.getSalary())//NaN ???

// #155 Prototype
console.log(User.prototype)
user1.length;
user1.ancher;

// #156 - Prototype chain & Extend contructor features.
class User {
  constructor(id, userName) {
    this.i = id;
    this.u = userName;
  }
}
let user1 = new User(23, "Osama");
console.log(User.prototype)
User.prototype.sayWelcome = function (val) {
  return `Welcome ${val}`
}
console.log(user1)

Object.prototype.love = "Elzero Web School";

String.prototype.dotedIt = function (value) {
  return `.${this}.`;
}
let str = "OSos";
console.log(String.prototype)
console.log(str.dotedIt('anything'))

// #157 - Object Meta Data And Descriptor
const obj = {
  prop1: "a",
  prop2: "b",
};
Object.defineProperty(obj, "prop3", {
  // writable: true, //for this => obj.prop3 = 100;
  // enumerable: true, // => for in loop show-case
  // configurable: true,  // => delete obj.prop3;
  value: "c",
});
console.log(obj)
obj.prop3 = 100;
delete obj.prop3;
console.log(delete obj.prop3); // true / false
console.log(obj.prop3);
for (let propert in obj) {
  console.log(propert, obj[propert])
}

// #158 - Object Meta Data And Descriptor
const obj = {
  prop1: "a",
  prop2: "b",
};
Object.defineProperties(obj, {
  prop3: {
    value: "c",
  },
  prop4: {
    value: "d",
  },
  prop5: {
    value: "e",
  },
});
console.log(obj)
console.log(Object.getOwnPropertyDescriptor(obj, "prop1"))
console.log(Object.getOwnPropertyDescriptors(obj))

// #159 Date and Time (epoch / Unix time)
let timeNow = new Date();
Date.now();
console.log(Date.now())//time now in milliseconds
console.log(timeNow) // output: in date form

// #160 getDate()
let birthday = new Date("Feb 24 1997");
let age = timeNow - birthday;
let age2 = Date.now() - birthday;
console.log(age / 1000 / 60 / 60 / 24 / 365)
console.log(age2)
console.log(timeNow.getTime()) // get Milliseconds form
console.log(timeNow.getDate()); // day of the month
console.log(timeNow.getFullYear())
console.log(timeNow.getMilliseconds())
console.log(timeNow.getTimezoneOffset())
console.log(timeNow.getDay()) // day of the week [index dependant]
console.log(timeNow.getHours())

// #161 setDate()
let timeNow = new Date();
console.log(Date.now())
console.log(timeNow)
console.log("#".repeat(44))

timeNow.setTime(0)
console.log(timeNow)

timeNow.setDate(5)
console.log(timeNow)

timeNow.setMilliseconds(10000)
console.log(timeNow)

timeNow.setFullYear(2009, 11)
console.log(timeNow)

// #162 - Formatting Date And Time
/*
  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Date.parse("String") // Read Date From A String
*/
console.log(Date.parse("Oct 25 1982"));
//return millasecond for the date.^
let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");//- "1982-10-25" => ISO 
console.log(date4);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

// #163 - Tracking Operations Time
let start = new Date();

for (let i = 0; i < 999; i++) {
  // document.write(`<div>${i}</div>`);
  let myDiv = document.createElement("div");
  myDiv.append(document.createTextNode(i));
  document.body.append(myDiv);
}

let end = new Date();
let duration = end - start;
console.log(duration)

// #164 Generator function
function* generation() {
  yield "a";
  console.log("Hellina");
  yield "b";
  yield "c";
  yield "d";
}

let generator = generation();
console.log(generator)

console.log(generator.next())//a
console.log(generator.next())//b

for (let value of generation()) {
  console.log(value)
}
for (let value of generator) {
  console.log(value)
}

// #165 Delegate Generator Function:
function* generatorNums() {
  yield 1;
  yield 2;
  yield 3;
}
function* generatorLetters() {
  yield "a";
  yield "b";
  yield "c";
}
function* generatorAll() {
  yield* generatorNums();
  yield* generatorLetters();
  yield* [2, 5, 6];
}
let generator = generatorAll();
for (let value of generatorAll()) {
  console.log(generator.next())
}
console.log(generator.return("AllDone"))

// 166 - return and infinite numbers

function* generateInfNums() {
  // yield 1;
  // yield 2;
  // return "A";//will interrupt yielding
  // yield 3;
  // yield 4;
  // yield 5;
  let index = 0;
  while (true) {
    yield index++;
  }
}
let generator = generateInfNums();
console.log(generator.next())
console.log(generator.next())
//numbers to infinity won't show unless logged.

// #167 - Modules Import And Export
{/* < script src = "main.js" type = "module" ></script > */ }
{/* <script src="app.js" type="module"></script> */ }
// export module;
let a = 10;
let arr = [1, 2, 3, 4];
function saySomething() {
  return `Something`;
}
export { a, arr, saySomething };
// import module
import { a, arr, saySomething as s } from "./main.js";
console.log(a);
console.log(arr);
console.log(s());

// #168 - Named vs Default Export And Import All
export default function () {
  return `Hello`;
}
import * as all from "./main.js";

// #169 What is JSON
// #170 JSON Syntax
JSON = javascript object notation;
file formate: / test.json ;
{
  "jsonUser" : {
    "property" : 1,
      "array" : [],
        "object": {
      'propt': "dklsjf",
   },
    "string": "string",
}, "jsonUser2": {
    "property": 345,
}
}
// #171 What is API? Application Programming Interface

// #172 JSON Parse and Stringify
let JSONobject = '{"Username": "Osama" , "Age": 39}';
console.log(typeof JSONobject)
console.log(JSONobject)

let jsObject = JSON.parse(JSONobject);
console.log(typeof jsObject)
console.log(jsObject)

jsObject["Username"] = "Elzero";
jsObject["Age"] = 40;

let JSONobject2 = JSON.stringify(jsObject);
console.log(typeof JSONobject2)
console.log(JSONobject2)

// #173 Asynchronous vs synchronous
// #174 Call Stack LiFo, API methods called last
setTimeout(() => { // web API method - asynchronous  
  console.log("Web API");
}, 0);

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();
// #175 Event Loop: is responable for executing the code, processing
// Call stack and callback queue.
//- Callback Queue Follow FIFO
console.log("One");
setTimeout(() => { // web API method - asynchronous  
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;

// #176 AJAX = Asynchronous Javascript And XML
// - Approach To Use Many Technologies Together[HTML, CSS, Js, DOM]
// - It Use "XMLHttpRequest" Object To Interact With The Server
let req = new XMLHttpRequest();
console.log(req);

// #177 - Request And Response From Real API
Informational responses(100–199)
Successful    responses(200–299)
Redirection   messages(300–399)
Client error  responses(400–499)
Server error  responses(500–599)
[0] Request Not Initialized
[1] Server Connection Established
[2] Request Received
[3] Processing Request
[4] Request Is Finished And Response Is Ready Status
[200] Response Is Successful
[404] Not Found

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");//Async is ,true[third input] 
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

// #178 - Loop On Data
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
// #179 - Callback Hell Or Pyramid Of Doom
setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// #180 - Promise Intro And Syntax
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

// #181 - Promise – Then, Catch And Finally
let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Osama", "Ahmed", "Sayed"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Employees are less than 4."))
  }
}).then((resolve) => {
  resolve.length = 2;
  return resolve;
}).then((resolve) => {
  resolve.length = 1;
  return resolve;
}).then((resolve) => {
  console.log(`The Chosen Employee is ${resolve}.`)
}).catch((reject) => console.log(reject))
  .finally(console.log("Operation done."))


//  #182 - Promise And XMLHttpRequest
const getData = (apiLink) => {
  return new Promise((ok, crap) => {
    let rqXML = new XMLHttpRequest();
    rqXML.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        ok(JSON.parse(this.responseText));
      } else {
        crap(Error("Data corrupted or Link's Wrong."))
      }
    }
    rqXML.open("GET", apiLink);
    rqXML.send();
  });
};
getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  }).then((result) => console.log(result[0].name))
  .catch((crap) => console.log(crap))

// #183 - Fetch API
Fetch API: - Return A Representation Of the Entire HTTP Response
json():= the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

  fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

// #184 - Promise – All, All Settled, Race
//Promise.all = will show all if nun rejected: will return fastest rejected
//Promise.allSettled = show all with all info
//Promise.race = Whatever faster

const firstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam First Promise.")
  }, 500);
})
const secondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam Second Promise.")
  }, 400);
})
const thirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam Third Promise.")
  }, 300);
})
Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((value) => console.log(value),
    (rejected) => console.log(`Rej: ${rejected}`))
  // Promise.allSettled([firstPromise, secondPromise, thirdPromise])
  //    .then((value) => console.log(value),
  //       (rejected) => console.log(`Rej: ${rejected}`))
  // Promise.race([firstPromise, secondPromise, thirdPromise])
  //    .then((value) => console.log(value),
  //       (rejected) => console.log(`Rej: ${rejected}`))


// #185 Async
Async Before Function Mean This Function Return A Promise
Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style

async function getData() { // return new Promise((res,rej)=>){}
  let friends = ["osma"];
  if (friends.length > 0) {
    return "Friends found"
  } else {
    throw new Error("no Friends found")
  }
}
getData().then((resolve) => console.log(resolve),
  (reject) => console.log(reject));


// #186 - Await And Training
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("I'm groot.")
    rej("I'm no groot.")
  }, 1000);
})

async function getData() {
  console.log("before promise");
  // myPromise.then((resolve) => console.log(resolve));
  console.log(await myPromise.catch((rej) => rej));
  console.log("After promise");
}
getData()


// #187 - Try, Catch, Finally With Fetch
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("I'm groot.")
    rej("I'm no groot.")
  }, 1000);
})

async function getData() {
  console.log("before promise");

  try {
    console.log(await myPromise);

  }
  catch (reject) {
    console.log(reject)
  }
  finally {
    console.log("Operation done")
  }

  console.log("After promise");
}
geData()

//use try with real api

async function fetchData() {
  console.log("before fetch");

  try {
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(await myData.json())
  }
  catch (reject) {
    console.log(reject)
  }
  finally {
    console.log("Operation done")
  }

  console.log("After fetch");
}
fetchData()