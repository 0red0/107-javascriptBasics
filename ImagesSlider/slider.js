const sliderImages = Array.from(
   document.querySelectorAll(".slider-container img")
);
const slidesCount = sliderImages.length;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentSlide = 1;
let slideNumberContainer = document.getElementById("slide-number");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

const paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
   const li = document.createElement("li");
   li.setAttribute("data-index", i);
   li.append(document.createTextNode(i));
   paginationElement.append(li);
}
document.getElementById("indicators").append(paginationElement);
//Get created ul
const newUl = document.getElementById("pagination-ul");
const paginationBullets = Array.from(
   document.querySelectorAll("#pagination-ul li")
);
//Bullets / Numbers slider
for (let i = 0; i < paginationBullets.length; i++) {
   paginationBullets[i].onclick = function () {
      currentSlide = parseInt(this.getAttribute("data-index"));
      theChecker();
   };
}

theChecker();

//
function nextSlide() {
   if (nextButton.classList.contains("disabled")) {
      return false;
   } else {
      currentSlide++;
      theChecker();
   }
}
function prevSlide() {
   if (prevButton.classList.contains("disabled")) {
      return false;
   } else {
      currentSlide--;
      theChecker();
   }
}

//checker Function
function theChecker() {
   //set slide number
   slideNumberContainer.textContent =
      "Slide #" + currentSlide + " of " + slidesCount;
   removeActive();
   //active relative image
   sliderImages[currentSlide - 1].classList.add("active");
   //activate li number
   newUl.children[currentSlide - 1].classList.add("active");
   //check buttons disabling
   if (currentSlide == 1) {
      prevButton.classList.add("disabled");
   } else {
      prevButton.classList.remove("disabled");
   }
   if (currentSlide == slidesCount) {
      nextButton.classList.add("disabled");
   } else {
      nextButton.classList.remove("disabled");
   }
}

//Remove active classes (img&li[bullets])
function removeActive() {
   sliderImages.forEach(function (img) {
      img.classList.remove("active");
   });
   paginationBullets.forEach(function (bullet) {
      bullet.classList.remove("active");
   });
}
