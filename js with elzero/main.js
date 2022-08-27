/* 1- WHY HTML ELEMENTS ARE OBJECTS (TYPEOF ID)?
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
  - Directive %c
console.log("Hello %cHelena" , "color: pink; font-size: 1.5rem")
// #009 ECMAScript `${}`
// #010 data types = 5 types only
//#011 variables
-declare without var
   user = "Osama";
-multi vars on same line
   user = "os" , age = 33;
-<div id="#"> = var
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
   console.log(a + " " + b); = console.log(a,b);
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
""+n
n+""

// #018 Arithmetic Operators:(+,-,*,/,**,%,++,--)
division remainder,Increment,decrement.
// #019 Unary plus, Unary Negation
   +"100" -ture +null -0xff -"-100"
// #020 Type Coercion 
   true  = 1     "" - 2= -2;
   false = 0     "1" + 2 + true = string;
   null  = 0     +"1" + 2 + true = 4;
    "" = 0        

// #021 Assignment Operators: = ,+= ,/= ,*=
// #022 Operator Challenge

// #023 Numbers
console.log(parseInt("100"));
console.log(+"100");
console.log(+"100 Osama");
console.log(Number("100"));
console.log(parseInt("100 Osama"));
console.log(parseFloat("100.5555 Osama"));
console.log(+100.3874.toFixed()); //it switches nums to str add U+
// #024 - Number Methods
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));
console.log(Number.isNaN('Osama'));//true
// #025 - Math Object
console.log(Math.round(99.2));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));
console.log(Math.min(10, 20, 30, 100, -90));
console.log(Math.max(10, 20, 30, 100, -90));
console.log(Math.pow(2,4));
console.log(Math.random());
console.log(Math.trunc(99.5));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Math.floor(Math.random()* 4) + 1); //random num between(0)
// #026 Numbers Challenge

// #027 String Methods:  
let theName= "Ahmed";
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
console.log(h.slice(2,7));
console.log(h.slice(-5,-1));
console.log(h.split(""));     
console.log(h.split(' '));
console.log(h.split('',3/*how many times*/)); //= array everytime
/*
slice accepts negative indexes and negative starts;
substring doesn't : any -index is 0;
substr : accept negative start. but end is not index its how many chars;
*/
// #029 Strings Methods 3: 
console.log(h.substring(2));
console.log(h.substring(2,7));//its ok if(7,2)
console.log(h.substring(-2,6));//-num = 0
console.log(h.substring(a.length -5, a.length -3));

console.log(h.substr(0));
console.log(h.substr(-3));
console.log(h.substr(-5,2//counted chars));
//true || false
console.log(h.includes('Web'));     //true
console.log(h.includes('Web',8));   //false
console.log(h.startsWith("E"));     //true
console.log(h.startsWith('zero',2));//true
console.log(h.endsWith("ro",6/*length not index*/));//true

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

let arry = ["Ahmed", "Mohamed","Sayed",["Marwan","Ali"]];
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
arry[3] = ["Sameh","Amir"];
console.log(arry);

//check is Array or not:
console.log(Array.isArray(arry));

// #041 Length with Array =====

let arry = ["Ahmed","Mohamed","Sayed","Ali"];
console.log(arry.length);
arry[6] = "Gamal";
console.log(arry);

arry[arry.length - 1] = "Gamal";
console.log(arry); 
//control array length
arry.length = 3;
console.log(arry);

// #042 Arrays Methods ======
let arry = ["Ahmed","Mohamed","Sayed","Alaa"];
arry.unshift("Osama","Nabil");
--add to start//of Array
console.log(arry);

arry.push("Samah","Eman");
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
console.log(arry.indexOf("Ahmed",2));// index of second one
console.log(arry.lastIndexOf("Ahmed"));// 4
console.log(arry.lastIndexOf("Ahmed",-2));// 0
console.log(arry.includes("Ahmed"));//true

if(arry.indexOf("EFGFH") === -1){
   console.log("Not Found")
}//-1 with indexOf = Not Found

// #044 Sorting ======
let Africa = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
console.log(Africa);
console.log(Africa.sort());
console.log(Africa.sort().reverse());

// #045
//slice return new Arrays slice(start,end)
console.log(Africa.slice(1,4));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));

//splice(start, n objs to delete, objs to add)
Africa.splice(0, 2, "Samir","Tamer");
console.log(Africa);

// #046
//concat() and join(separator) => strings
let allArrays = arry.concat(Africa, arry, [1,2,3,4], "Gamal");
console.log(allArrays);
//return strings
console.log(allArrays.join());
console.log(allArrays.join(""));
console.log(allArrays.join("@"));
console.log(allArrays.join("|"));


 
// #048-----------LOOPS-----------
for (let i = 0; i < 10; i++){
   console.log(i); //example
}

// #049 Looping on sequences
let myFriends = ["Osama","Ahmed","Sayed","Ali","Amir"];
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
====//The above array output same as the below loop;
for (let i = 0; i < myFriends.length; i++ ){
   console.log(myFriends[i]);
}
====//new arr strings only
let myFriends = [1,2,"Osama","Ahmed","Sayed","Ali","Amir"];
let onlyNames = [];

for (let i = 0; i< myFriends.length; i++){
   if (typeof myFriends[i] === "string"){
      onlyNames.push(myFriends[i]);
   }
}
console.log(onlyNames);

// #050-Nested Loops
let products = ["Keyboard","Mouse","Pen","Monitor"];
let colors = ["Red","Green","Black"];
let models = [2020,2021];

for (let i = 0; i< products.length; i++){
   console.log('#'.repeat(10))
   console.log(`#${products[i]}`);
   console.log('#'.repeat(10))

   for (let j = 0; j < colors.length; j++){
      console.log(`--${colors[j]}`);
   }
   for (let k = 0; k < models.length; k++){
      console.log(`**${models[k]}`);
   }
}
// #051 Loop Control - Break, Continue, Label

let products = ["Keyboard","Mouse","Pen","Monitor"];
for (let i = 0; i < products.length; i++){
   if (products[i] === "Pen"){
      break;
   }
   console.log(products[i]);
}
let products = ["Keyboard",10,3,"Mouse","Pen",49,30,"Monitor"];
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
let products = ["Keyboard","Mouse","Pen","Monitor"];
let i = 0;
for(;;){
   console.log(products[i]);
   i++;//i += 2;to skip a product
   if(i === products.length) break;
}

// #053-Add products to page;
let products = ["Keyboard","Mouse","Pen","Monitor","iPhone"];
let colors = ["Red","Green","Black"];
let showCount = 5;

document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++){
   document.write(`<div>`);
      document.write(`<h3>[${i+1}]${products[i]}</h3>`)
      for (let j = 0; j < colors.length; j++){
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


