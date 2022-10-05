const counter = document.querySelector(".counter");

const upTime = () => {
  let target = +counter.dataset.target;
  let shown = +counter.innerText;
  let increment = target / 100;
  if (shown < target) {
    counter.innerText = `${Math.ceil(shown + increment)}`;
    setTimeout(upTime, increment);
  }
};
upTime();

// function upCounter() {
//   let target = counter.dataset.target;
//   let innerText = counter.innerText;

//   let countUp = setInterval(function () {
//     if (innerText < target) {
//       innerText++;
//       counter.innerText = innerText;
//     } else {
//       clearInterval(countUp);
//     }
//   }, 1);
// }
// upCounter();
