
//window.onload = function () {
//window.alert("Hello form JS file");

//creating h1 element from js file
document.write("<h1> Hello Page</h1>");
const h1 = document.querySelector("h1");
console.log(h1.style);

//styling css form js main file
h1.style.color = "blue";
h1.style.fontSize = "80px";
h1.style.fontWeight ="bold";
h1.style.textAlign = "center";
h1.style.fontFamily = "sans-serif";
h1.style.border = "4px solid blue";

console.log("Hello form JS file");

console.error("error");

console.table(["Osama","Elzero","Ahmed","Gamal","Fathy"]);

//didn't style cuz no %c Parameter
console.log("Hello form Js file","color:red;font-size:40px"); 

document.write("<h1>Elzero</h1>");

//styling console.log output

console.log("%cElzero%c Web%c School","color:red;font-size:40px;",
"color:blue;font-size:40px;font-weight:bold;",
"color:green;font-size:40px;");

//console grouping practice

console.group('Group One');
console.log('Message One');
console.log('Message Two');

console.group('Child Group');
console.log('Message One');
console.log('Message Two');

console.group('Grand Child Group');
console.log('Message One');
console.log('Message Two');

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group('Group 2');
console.log('Message One');
console.log('Message Two');
console.groupEnd();

console.log("Osam Mohamed");
//= string
console.log(typeof "Osam Mohamed"); 

//= number
console.log(typeof 2000);

//= Array => Object
console.log(typeof [20,94,203]);
console.log(typeof ["Os","Ah","Sa"]);

//= Object
console.log(typeof {name:"Othman",age:17,country:"Eg"});

//= boolean
console.log(typeof true);

console.log(typeof undefined); //undefined
console.log(typeof null); // object

var user = "Sayed";
console.log(user);

console.log(hello);
// change the value of this variable
hello.innerHTML = "Option";

console.log("Elzero \
web \
school");

// \n to print it in new line
console.log("Elzero\nweb\nSchool");

//concatenate strings

let a = "We love";
let b = "Javascript";
document.write(a + " " + b);

//Template Literals (ECMAscript6 {E6})
let aa = "We love";
let bb = "Javascript";
let cc = "And";
let dd = "Programming";

 console.log(aa + " " + bb +
 "\n" + cc + " " +dd);

 console.log(`${aa} ${bb}
 ${cc} ${dd}`);

 //creating html elements from js file

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

console.log((100).toString());
console.log(100.4.toString());

console.log(100.55555555.toFixed(2));

//parseInt analyze and give out the number
console.log(parseInt("100"));
console.log(+"100");
console.log(+"100 Osama");
console.log(Number("100"));
console.log(parseInt("100 Osama"));
//parseInt remove floats like Math.round
console.log(parseFloat("100.5555 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));
//NaN is a falsy value
console.log(Number.isNaN('Osama'));//true

//Math Object
console.log(Math.round(99.2));

console.log(Math.ceil(99.2));

console.log(Math.floor(99.9));
//print the max or min number
console.log(Math.min(10, 20, 30, 100, -90));
console.log(Math.max(10, 20, 30, 100, -90));

console.log(Math.pow(2,4));

console.log(Math.random());

console.log(Math.trunc(99.5));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Math.floor(Math.random()* 4) + 1); //random num between (0)

//#27 
//index []
let theName= "Ahmed";

console.log(theName);
console.log(theName[1]);
console.log(theName.charAt(1));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
//chain Methods to get certain output
console.log(theName.trim().charAt(2).toUpperCase());

//#28 string methods 2
let h = "Elzero Web School";

console.log(h.indexOf("o"));
console.log(h.lastIndexOf("web"));
console.log(h.lastIndexOf("o"));
console.log(h.slice(2,7));
console.log(h.slice(-5,-1));
console.log(h.split(""));     
console.log(h.split(' '));
console.log(h.split('',3/*how many times*/)); //= array everytime

console.log(h.substring(2));
console.log(h.substring(2,7));//its ok if(7,2)
console.log(h.substring(-2,6));//-num = 0
console.log(h.substring(a.length -5, a.length -3));

//substring=substr scan form the end
console.log(h.substr(0));
console.log(h.substr(-3));
console.log(h.substr(-5,2//counted chars));

//true || false
console.log(h.inludes('Web'));//true
console.log(h.includes('Web',8));//false
console.log(h.startsWith("E"))//true
console.log(h.startsWith('zero',2));//true
console.log(h.endsWith("ro",6));//ture

//practice
let w = "Elzero Web School";
console.log(w.slice(2,6)[0].toUpperCase()+w.slice(2,6).substring(1));
console.log(w.charAt(13).toUpperCase().repeat(8));
console.log(w.[13].toUpperCase().repeat(8));

 
//challenge 30 Attempt
let a = "Elzero Web School";

console.log(a.slice(2,6)[0].toUpperCase()+a.slice(2,6).substring(1));

console.log(a.indexOf("h"));

console.log(a.charAt(13).toUpperCase().repeat(8));
console.log(a.[13].toUpperCase().repeat(8));

console.log(a.split(" ",1));

console.log(`${a.substr(0,6)} ${a.substr(11,17)}`);

console.log(a[0].toLowerCase() + a.slice(1,16).toUpperCase() + a[16]);


//comparison operators
//== compare values not data type
//=== compare values and data type

//logical operators
console.lot(true);
console.log(!true);
console.log(10 == "10");
console.log(!(10 == "10"));
//All conditions must happen &&
console.log(10 == "10" && 10 > 8 && 10 >= 10);

console.log(10 == "10" || 10 > 8 || 10 >= 10);

let gender = "male";
console.log(gender == male ? "Mr" : "Mrs")




//______Arrays________
let myFriends = ["Ahmed", "Mohamed","Sayed",["Marwan","Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`Hello ${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = "Samah";
console.log(myFriends);
myFriends[3] = ["Sameh","Amir"];
console.log(myFriends);

//check is Array or not:
console.log(Array.isArray(myFriends));

//Index Start From 0
let myFriends = ["Ahmed","Mohamed","Sayed","Ali"];
console.log(myFriends.length);

//myFriends[6] = "Gamal";
console.log(myFriends);
console.log(myFriends.length);

myFriends[myFriends.length] = "Gamal";
console.log(myFriends); 

myFriends.length = 3;
console.log(myFriends);

let myfriends = ["Ahmed","Mohamed","Sayed","Alaa"];

myfriends.unshift("Osama","Nabil");
console.log(myfriends);

myfriends.push("Samah","Eman");
console.log(myfriends);

let first = myfriends.shift();
console.log(myfriends);
console.log(`First name is ${first}`);

let last = myfriends.pop();
console.log(myfriends);
console.log(`Last Name is ${first}`);

//indexOf(object,fromIndex) = give object index
console.log(myfriends.indexOf("Ahmed"));
console.log(myfriends.indexOf("Ahmed",2));
console.log(myfriends.lastIndexOf("Ahmed"));
console.log(myfriends.lastIndexOf("Ahmed",-2));

console.log(myfriends.includes("Ahmed"));

if(myfriends.indexOf("EFGFH") === -1){
   console.log("Not Found")
}//-1 with indexOf = Not Found

let Africa = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
console.log(Africa);
console.log(Africa.sort());
console.log(Africa.sort().reverse());

//slice gives new Arrays slice(start,end)
console.log(Africa.slice(1,4));

//splice(start,obj to delete,objs to add)
Africa.splice(0,2,"Samir","Tamer");
console.log(Africa);

//concat() and join(separator) => strings
let allArrays = myfriends.concat(Africa, myFriends, [1,2,3,4], "Gamal");
console.log(allArrays);

console.log(allArrays.join());
console.log(allArrays.join(""));
console.log(allArrays.join("@"));
console.log(allArrays.join("|"));

//Arrays practice number 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

console.log((allArrs.concat(arr1, arr2).sort()).slice(arr2.length).join("").toLowerCase());

//challenge #47 Arrays
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.splice(my.indexOf("Gamal")),my.reverse();
console.log(my);

let my1 = my.slice(my.indexOf("Elham"),counter);
console.log(my1);

let my2 = (my1.join(""));
console.log(my2);

let my3 =`${my2.slice(zero,my2.indexOf("h"))}${my2.slice(my2.indexOf("z"),my2.length)}`;
console.log(my3);

console.log(`${my3.charAt(my3.indexOf("r"))}${my3.toUpperCase().charAt(my3.indexOf("o"))}`);



 
//-----------LOOPS-----------
for (let i = 0; i < 10; i++){
   console.log(i); //example
}

//#49
let myFriends = ["Osama","Ahmed","Sayed","Ali","Amir"];
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
//The above array output same as the below loop;
for (let i = 0; i < myFriends.length; i++ ){

   console.log(myFriends[i]);

}
//example
let myFriends = [1,2,"Osama","Ahmed","Sayed","Ali","Amir"];
let onlyNames = [];

if (typeof myFriends[0] === "string"){
   onlyNames.push(myFriends[0]);
}
if (typeof myFriends[1] === "string"){
   onlyNames.push(myFriends[1]);
}
if (typeof myFriends[2] === "string"){
   onlyNames.push(myFriends[2]);
}
if (typeof myFriends[3] === "string"){
   onlyNames.push(myFriends[3]);
}
console.log(onlyNames);
//The above if output = The loop below
for (let i = 0; i< myFriends.length; i++){
   if (typeof myFriends[i] === "string"){
      onlyNames.push(myFriends[i]);
   }
}
console.log(onlyNames);

//#50-Nested Loops
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

//Break loop at condition
let products = ["Keyboard","Mouse","Pen","Monitor"];

for (let i = 0; i < products.length; i++){
   if (products[i] === "Pen"){
      break;
   }
   console.log(products[i]);
}
//Continue loop, skipping the condition
let products = ["Keyboard",10,3,"Mouse","Pen",49,30,"Monitor"];

for (let i = 0; i < products.length; i++){
   if (typeof products[i] === "number"){
      continue;
   }
   console.log(products[i]);
}
//Label ; mainLoop: nestedLoop: break mainLoop;

//Loop for Advanced Example
let products = ["Keyboard","Mouse","Pen","Monitor"];
let i = 0;
for(;;){
   console.log(products[i]);
   i++;//i += 2;to skip a product
   if(i === products.length) break;
}

//#53-Add products to page;
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

//challenge #56 while loop example:
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let aaa = friends[0][0];
/*output:
"1=> Sayed"
"2=> Mahmoud"*/

while (index < friends.length){

      if (friends[index][0] !== aaa && 
         typeof friends[index] !== "number"){
         console.log(`${[++counter]}=> ${friends[index]}`);
      }
      index++;
}

//challenge #57
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<h2>We Have X Admins</h2>`);

for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
  document.write(`<div>`);
  document.write(`<h3>${"The admin for this team is"} - ${myAdmins[i]}</h3>`);

  document.write(`<div>${"Team Members :"}</div>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p>${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>`);
}
//end; continue at file: main2.js
