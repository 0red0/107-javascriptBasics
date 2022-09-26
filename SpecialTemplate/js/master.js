//Check for colors in LocalStorage
const mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
   document.documentElement.style.setProperty("--mainColor", mainColors);
   document.querySelectorAll(".colors-list li").forEach((ele) => {
      ele.classList.remove("active");
      if (ele.dataset.color === mainColors) {
         ele.classList.add("active");
      }
   });
}

//toggle Settings box
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
   this.classList.toggle("fa-spin");
   document.querySelector(".settings-box").classList.toggle("open");
};
//Switch page colors from Settings box to :root
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
   li.addEventListener("click", (e) => {
      document.documentElement.style.setProperty(
         "--mainColor",
         e.target.dataset.color
      );
      localStorage.setItem("color-option", e.target.dataset.color);
      //remove active class from lis
      e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
         ele.classList.remove("active");
      });
      e.target.classList.add("active");
   });
});

// change landing page background
let landingPage = document.querySelector(".landing-page");
let imgsArray = [
   "watchingMountains.jpg",
   "farmer.jpg",
   "overTheEdge.jpg",
   "success.jpg",
   "yatta.jpg",
];

// setInterval(() => {
//    let randomNumber = Math.floor(Math.random() * imgsArray.length);
//    landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
// }, 10000);
