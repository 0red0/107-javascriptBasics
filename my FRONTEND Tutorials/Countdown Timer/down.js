const timeNow = new Date();
const year = timeNow.getFullYear();

let lolo;
const div = document.querySelector("div");
const birthday = new Date(`11-8-${year}`).getTime();
let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

function countdown() {
   const dateDiff = birthday - Date.now();
   let dayTxt = Math.floor(dateDiff / days);
   let hourTxt = Math.floor((dateDiff % days) / hours);
   let minuteTxt = Math.floor((dateDiff % hours) / minutes);
   let secondTxt = Math.floor((dateDiff % minutes) / seconds);

   document.querySelector(".day").innerText = dayTxt;
   document.querySelector(".hour").innerText = hourTxt;
   document.querySelector(".minute").innerText =
      minuteTxt < 10 ? `0${minuteTxt}` : minuteTxt;
   document.querySelector(".second").innerText =
      secondTxt < 10 ? `0${secondTxt}` : secondTxt;

   if (dateDiff <= 0) {
      clearInterval(lolo);
   }
}
lolo = setInterval(countdown, 1000);
