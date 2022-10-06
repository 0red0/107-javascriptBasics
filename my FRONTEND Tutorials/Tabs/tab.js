let tabs = document.querySelectorAll(".tabs li");
let divs = document.querySelectorAll(".content > div");

tabs.forEach((e) => {
   e.addEventListener("click", switchTabs);
   e.addEventListener("click", switchDivs);
});

function switchTabs() {
   tabs.forEach((tab) => {
      tab.classList.remove("active");
      this.classList.add("active");
   });
}
function switchDivs() {
   divs.forEach((div) => {
      div.style.display = "none";
   });
   document.querySelectorAll(this.dataset.t).forEach((ele) => {
      ele.style.display = "block";
   });
}
