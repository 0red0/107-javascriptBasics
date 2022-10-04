let countSpan = document.querySelector(".quiz-info .count span");
let bulletsContainer = document.querySelector(".bullets .spans");
const quizArea = document.querySelector(".quiz-area");
const answersArea = document.querySelector(".answers-area");
const submitBtn = document.querySelector(".submit-button");
let bulletEles = document.querySelector(".bullets");
const resultContainer = document.querySelector(".results");
const countdownEle = document.querySelector(".countdown");

//Set options
let currentIndex = 0;
let correctAnswers = 0;
let downInterval;

//calling JSON file
function getQuestions() {
   let myRequest = new XMLHttpRequest();

   myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
         let questionsObject = JSON.parse(this.responseText);
         let qCount = questionsObject.length;

         createBullets(qCount);
         addQuestionData(questionsObject[currentIndex], qCount);
         countdown(3, qCount);
         submitBtn.onclick = () => {
            // get & check right answer
            let rightAnswer = questionsObject[currentIndex].right_answer;
            currentIndex++;
            checkAnswer(rightAnswer, qCount);

            //step:- Remove quiz Area & go to next question
            quizArea.innerHTML = "";
            answersArea.innerHTML = "";
            addQuestionData(questionsObject[currentIndex], qCount);

            handleBullets();
            clearInterval(downInterval);
            countdown(3, qCount);

            showResults(qCount);
         };
      }
   };
   myRequest.open("GET", "html_questions.json", true);
   myRequest.send();
}
getQuestions();

//get numbers of questions
function createBullets(num) {
   countSpan.innerHTML = num;
   //create stuff with that number
   for (let i = 0; i < num; i++) {
      let theBullet = document.createElement("span");
      if (i === 0) {
         theBullet.className = "on";
      }
      bulletsContainer.append(theBullet);
   }
}

//Add data to page
function addQuestionData(obj, count) {
   if (currentIndex < count) {
      //title
      let questionTitle = document.createElement("h2");
      let questionText = document.createTextNode(obj["title"]);
      questionTitle.append(questionText);
      quizArea.append(questionTitle);
      //Answers
      for (let i = 1; i <= 4; i++) {
         let mainDiv = document.createElement("div");
         mainDiv.className = "answer";
         let radioInput = document.createElement("input");
         radioInput.name = "question";
         radioInput.type = "radio";
         radioInput.id = `answer_${i}`;
         radioInput.dataset.answer = obj[`answer_${i}`];
         if (i === 1) {
            radioInput.checked = true;
         }
         //label
         let label = document.createElement("label");
         label.htmlFor = `answer_${i}`;
         let labelText = document.createTextNode(obj[`answer_${i}`]);

         label.append(labelText);
         mainDiv.append(radioInput, label);
         answersArea.append(mainDiv);
      }
   }
}
//Check Answers Function
function checkAnswer(rAnswer, count) {
   let answers = document.getElementsByName("question");
   let chosenAnswer;
   for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
         chosenAnswer = answers[i].dataset.answer;
      }
   }
   if (rAnswer === chosenAnswer) {
      correctAnswers++;
   }
}
//Handle bullets
function handleBullets() {
   let bulletsSpans = document.querySelectorAll(".bullets .spans span");
   let arrayOfSpans = Array.from(bulletsSpans);
   arrayOfSpans.forEach((span, index) => {
      if (currentIndex === index) {
         span.className = "on";
      }
   });
}
//Final Result
function showResults(count) {
   let result;
   if (currentIndex === count) {
      quizArea.remove();
      answersArea.remove();
      submitBtn.remove();
      bulletEles.remove();

      if (correctAnswers > count / 2 && correctAnswers < count) {
         result = `<span class="good">Good</span>, ${correctAnswers} / ${count}.`;
      } else if (correctAnswers === count) {
         result = `<span class="perfect">Perfect</span>, ${correctAnswers} / ${count}.`;
      } else {
         result = `<span class="bad">Bad</span>, ${correctAnswers} / ${count}.`;
      }
      resultContainer.innerHTML = result;
      resultContainer.style.padding = "10px";
      resultContainer.style.backgroundColor = "#fff";
      resultContainer.style.marginTop = "10px";
   }
}
//Countdown timer to next question;
function countdown(duration, count) {
   if (currentIndex < count) {
      let minutes, seconds;
      downInterval = setInterval(function () {
         minutes = parseInt(duration / 60);
         seconds = parseInt(duration % 60);

         minutes = minutes < 10 ? `0${minutes}` : minutes;
         seconds = seconds < 10 ? `0${seconds}` : seconds;

         countdownEle.innerHTML = `${minutes}:${seconds}`;
         if (--duration < 0) {
            clearInterval(downInterval);
            submitBtn.click();
         }
      }, 1000);
   }
}
