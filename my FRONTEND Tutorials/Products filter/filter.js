let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
   li.addEventListener("click", removeActive);
   li.addEventListener("click", manageImgs);
});

// Remove active class, add it to current
function removeActive() {
   switcherLis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
   });
}
//Manage Images
function manageImgs() {
   imgs.forEach((img) => {
      img.style.display = "none";
   });
   document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "inline";
   });
}
