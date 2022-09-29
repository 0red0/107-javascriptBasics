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
    handleActive(e);
  });
});

//Toggle Background random
const randomBackEl = document.querySelectorAll(".random-background span");
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);
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
    }, 2000);
  }
}
randomizeImgs();

//Skills' bars Animation
let ourSkills = document.querySelector(".skills");
window.addEventListener("scroll", () => {
  let skillsOffsetTop = ourSkills.offsetTop; //how far section from page top
  let skillsOuterHeight = ourSkills.offsetHeight; //how high section in px
  let windowHeight = this.innerHeight; //window height
  let windowScrollTop = this.scrollY; //scroll bar position now

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    // console.log("skills");
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
});

//Create popUp with images
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.append(overlay);

    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      imgHeading.append(imgText);
      popupBox.append(imgHeading);
    }

    let popupImage = document.createElement("img");
    popupImage.src = img.src;

    popupBox.append(popupImage);
    document.body.append(popupBox);

    // close button
    let closeBtn = document.createElement("span");
    let closeTxt = document.createTextNode("+");
    closeBtn.append(closeTxt);
    closeBtn.className = "close-btn";
    popupBox.append(closeBtn);
  });
});

//close popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-btn") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

//go to sections
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

const allLinks = document.querySelectorAll(".links a");

function scrollTo(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollTo(allBullets);
scrollTo(allLinks);

//Active class handler
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
}
