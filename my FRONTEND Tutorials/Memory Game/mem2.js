// Splash Screen Handle
const startBtn = document.querySelector("nav span");
const input = document.querySelector("nav input");
const playerName = document.querySelector(".name span");
const successSfx = document.getElementById("success");
const failSfx = document.getElementById("fail");
const endSfx = document.getElementById("end-game");

startBtn.addEventListener("click", startGame);
function startGame() {
   if (input.value == "" || input.value == null) {
      playerName.innerText = "No name!";
   } else {
      playerName.innerText = input.value;
   }
   startBtn.parentElement.remove();
}

// Add random order property to blocks
const container = document.querySelector(".memory-game-blocks");
const blocks = Array.from(container.children);
const orderValues = [...blocks.keys()];
shuffle(orderValues);
blocks.forEach((bo, index) => {
   bo.style.order = orderValues[index];
});
// Flip block function
const tries = document.querySelector(".tries span");
let wrong = 0;
let d1 = 1000;
let cardsFlipped = [];
blocks.forEach((b) => b.addEventListener("click", flip));
function flip() {
   this.classList.add("flipped");
   cardsFlipped.push(this);
   if (cardsFlipped.length == 2) {
      stopClicking();
      // prettier-ignore
      check(cardsFlipped[0],cardsFlipped[1]);
      cardsFlipped = [];
   }
}
// Stop clicking
function stopClicking() {
   container.style.pointerEvents = "none";
   setTimeout(() => {
      container.style.removeProperty("pointer-events");
   }, d1);
}
// Check Matching blocks
function check(a, b) {
   if (a.dataset.technology === b.dataset.technology) {
      successSfx.play();
   } else {
      wrong++;
      tries.innerText = wrong;
      setTimeout(() => {
         a.classList.remove("flipped");
         b.classList.remove("flipped");
      }, d1);
      failSfx.play();
   }
}
// Shuffle Array
function shuffle(array) {
   // order = blocks.sort(()=> Math.random() - .5);
   for (let i = 0; i < blocks.length; i++) {
      let j = Math.floor(Math.random() * blocks.length);
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}

// win scenario
function wining() {
   endSfx.play();
   let inter = setInterval(() => {
      blocks.forEach((bl) => {
         bl.classList.toggle("has-match");
      });
   }, 150);
   setTimeout(() => {
      clearInterval(inter);
   }, 1500);
}
