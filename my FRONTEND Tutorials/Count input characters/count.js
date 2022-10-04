const input = document.querySelector("input");
const filling = document.querySelector("section");
const leftOver = document.querySelector("data");

input.oninput = function () {
   leftOver.innerText = input.getAttribute("maxlength") - input.value.length;
   if (leftOver.innerText == 0) {
      leftOver.className = "red";
   } else {
      leftOver.className = "";
   }
   filling.style.width = `${
      (input.value.length * 100) / input.getAttribute("maxlength")
   }%`;
   if (leftOver.innerText == 0) {
      filling.className = "red";
   } else {
      filling.className = "";
   }
};
