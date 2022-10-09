// To Create Random colors
let clrsArr = [
   "0",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "a",
   "b",
   "c",
   "d",
   "f",
];

// Splash Screen Handle
const startBtn = document.querySelector("nav span");
startBtn.onclick = function () {
   let yourName = prompt("What's Your Name?");
   if (yourName == null || yourName == "") {
      document.querySelector(".name span").innerText = "Unknown";
   } else {
      document.querySelector(".name span").innerText = yourName;
   }
   document.querySelector("nav").remove();
};

let duration = 1000;
const blocksContainer = document.querySelector(".memory-game-blocks");
const blocks = Array.from(blocksContainer.children);
let orderRange = [...blocks.keys()];

// Add order property to blocks
blocks.forEach((b, index) => {
   let clr = "#";
   for (let i = 0; i < 6; i++) {
      clr += clrsArr[Math.floor(Math.random() * clrsArr.length)];
   }
   b.style.order = index;
   b.style.color = clr;
   console.log(clr);
});
