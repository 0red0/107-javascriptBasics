const counter = document.querySelector(".counter");

//Youtube
// const upTime = () => {
//    let target = counter.dataset.target;
//    let shown = +counter.innerText;
//    let increment = target / 100;
//    if (shown < target) {
//       counter.innerText = `${Math.ceil(shown + increment)}`;
//       setTimeout(upTime, increment);
//    }
// };
// upTime();

//Yhay
function upCounter() {
   let target = counter.dataset.target;
   let innerText = counter.innerText;

   let countUp = setInterval(function () {
      if (innerText < target) {
         innerText++;
         counter.innerText = innerText;
      } else {
         clearInterval(countUp);
      }
   }, 1);
}
upCounter();

//Osama Elzero
// function upCounter() {
//    let target = counter.dataset.target;
//    let innerText = counter.innerText;

//    let countUp = setInterval(function () {
//       innerText++;
//       counter.innerText = innerText;
//       if (innerText == target) {
//          clearInterval(countUp);
//       }
//    }, 1000 / target);
// }
// upCounter();
