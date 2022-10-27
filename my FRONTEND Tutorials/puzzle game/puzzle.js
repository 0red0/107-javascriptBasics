let rows = 5;
let columns = 5;
let currTile;
let otherTile;
let turns = 0;

// Create board area
window.onload = function () {
   for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
         let tile = document.createElement("img");
         tile.src = "./images/blank2.png";
         tile.addEventListener("dragstart", dragStart);
         tile.addEventListener("dragover", dragOver);
         tile.addEventListener("dragenter", dragEnter);
         tile.addEventListener("dragleave", dragLeave);
         tile.addEventListener("drop", dragDrop);
         tile.addEventListener("dragend", dragEnd);
         document.getElementById("board").append(tile);
      }
   }
};

// Append images to pieces section
let pieces = [...Array(25).keys()];
pieces.sort(() => Math.random() - 0.5);
pieces.forEach((p) => {
   let tile = document.createElement("img");
   tile.src = `./images/${p}.jpg`;
   tile.addEventListener("dragstart", dragStart);
   tile.addEventListener("dragover", dragOver);
   tile.addEventListener("dragenter", dragEnter);
   tile.addEventListener("dragleave", dragLeave);
   tile.addEventListener("drop", dragDrop);
   tile.addEventListener("dragend", dragEnd);
   document.getElementById("pieces").append(tile);
});

function dragStart() {
   currTile = this;
}
function dragOver(e) {
   e.preventDefault();
}
function dragEnter(e) {
   e.preventDefault();
}
function dragLeave() {}
function dragDrop() {
   otherTile = this;
}
function dragEnd() {
   if (currTile.src.includes("blank")) return;
   let currImg = currTile.src;
   let otherImg = otherTile.src;
   currTile.src = otherImg;
   otherTile.src = currImg;
   turns++;
   document.getElementById("turns").innerText = turns;
}
