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

//global//background Randomized variables
let backgroundInterval;
let backgroundOption = true;

//check localStorage for Random background & active button
let backgroundLocalItem = localStorage.getItem("background_option");
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
    document.querySelector(".random-background .yes").classList.add("active");
    document.querySelector(".random-background .no").classList.remove("active");
  } else {
    backgroundOption = false;
    document.querySelector(".random-background .no").classList.add("active");
    document
      .querySelector(".random-background .yes")
      .classList.remove("active");
  }
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

//Toggle Background random
const randomBackEl = document.querySelectorAll(".random-background span");
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    //randomize background option
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
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

function randomizeImgs() {
  if (backgroundOption) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
    }, 5000);
  }
}
randomizeImgs();
