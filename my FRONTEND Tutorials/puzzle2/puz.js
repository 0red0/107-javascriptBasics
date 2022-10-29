let pieces = [...Array(100).keys()];
console.log(pieces);

const board = document.querySelector(".board");
const grabArea = document.querySelector(".pieces");

pieces.forEach((p) => {
  const container = document.createElement("div");
  const space = document.createElement("img");
  space.src = `./images/blank.png`;
  container.append(space);
  board.append(container);
});

pieces.sort(() => Math.random() - 0.5);
console.log(pieces);

pieces.forEach((p) => {
  const container = document.createElement("div");
  const img = document.createElement("img");
  img.src = `./images/p (${p + 1}).jpg`;
  img.alt = `./images/p (${pieces.indexOf(p) + 1}).jpg`;
  container.append(img);
  grabArea.append(container);
  img.addEventListener("dragstart", dragStart);
  img.addEventListener("dragenter", dragEnter);
  img.addEventListener("dragover", dragOver);
  img.addEventListener(drop, drop);
  img.addEventListener("dragleave", dragLeave);
  img.addEventListener("dragend", dragEnd);
});

let currTile;
let otherTile;

function dragStart() {
  console.log("start");
  currTile = this;
}
function dragEnter() {
  console.log("enter");
}
function dragOver(e) {
  console.log("Over");
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  console.log("drop");
}
function dragLeave() {
  console.log("Leave");
}
function dragEnd() {
  console.log("End");
}
