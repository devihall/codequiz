/////////questionBank/////////////
//
// question: " Html language... ",
// choices: "is used to create websites", "is used for animation", "is used for math", "is used for nothing" ,
// correctAnswer: "is used to create websites"
//

//
//question: " Arrays in JavaScript can be used to store ____. ",
// choices: "booleans", "strings", "numbers", "all of the above" ,
//correctAnswer: "all of the above"
//

//question: "The condition in an if / else statement is enclosed with ________.",
//choices: "quotes", "curly brackets", "parenthesis", "square brackets" ,
//correctAnswer: "all of the above"

////////Main Page references//////////////////////////
var timeLeft = 120;

var startQuizBtnEl = document.querySelector(".start-btn");
var mainTextEl = document.querySelector(".mainText");
var startDiv = document.querySelector("#startdiv");
var questionContainer = document.querySelector(".start-page-title");
var answerContainer = document.querySelector(".answer-container");

var timerEl = document.querySelector("#timer");

//This will run when wrong answer is picked
var removeWrong = function () {
timeLeft = timeLeft - 5;
mainTextEl.replaceChild(questionContainerTwo, questionContainer);
window.alert("Wrong Answer! You lost 5 seconds!")
//   questionContainer.remove();
//   questionTwo();
};

//On click replace start page elements with first question container///
startQuizBtnEl.addEventListener("click", function () {
  mainTextEl.replaceChild(questionContainer, startDiv);
});

// create question container
var questionContainer = document.createElement("div");
questionContainer.className = "question-container";
mainTextEl.appendChild.questionContainer;

//Question One
var question = document.createElement("h1");
question.className = "question";
question.textContent = "1) in web development, Html ...";
questionContainer.appendChild(question);

//create answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainer.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "is used for math";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

// answerOne.addEventListener("click", function () {mainTextEl.replaceChild(questionContainerTwo, questionContainer), removeWrong;});
// answerOne.addEventListener("click", function () {
//   console.log("Hello, World!");
// });

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "is used for animation";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", removeWrong);

//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "is used to create websites";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", function () {
mainTextEl.replaceChild(questionContainerTwo, questionContainer),
  window.alert("Right answer! Well done!");
});

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "is used for nothing";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", removeWrong);
///////////////////////////////////////////////////////

// --------------QUESTION 2----------------//
//This will run when wrong answer is picked
var removeWrong = function () {
  timeLeft = timeLeft - 5;
  mainTextEl.replaceChild(questionContainerThree, questionContainerTwo);
  window.alert("Wrong Answer! You lost 5 seconds!");
};

//create question two container
var questionContainerTwo = document.createElement("div");
questionContainerTwo.className = "question-container";
// questionContainerTwo.textContent = "Hi I am a question container"
mainTextEl.appendChild.questionContainerTwo;

//Question two
var question = document.createElement("h1");
question.className = "question";
question.textContent = "Arrays in JavaScript can be used to store ____.";
questionContainerTwo.appendChild(question);

//create answer container
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainerTwo.appendChild(answerContainer);

//answer choice one
var answerOne = document.createElement("button");
answerOne.className = "answerOne";
answerOne.textContent = "booleans";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", removeWrong);

//answer choice two
var answerTwo = document.createElement("button");
answerTwo.className = "answerTwo";
answerTwo.textContent = "strings";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", removeWrong);


//answer choice three
var answerThree = document.createElement("button");
answerThree.className = "answerThree";
answerThree.textContent = "numbers";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", removeWrong);

//answer choice four
var answerFour = document.createElement("button");
answerFour.className = "answerFour";
answerFour.textContent = "all of the above";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", function(){
mainTextEl.replaceChild(questionContainerThree, questionContainerTwo),
  window.alert("Right answer! Well done!");
})
////////////////////////////////////////////////////////

//create question three container
var questionContainerThree = document.createElement("div");
questionContainerThree.className = "question-container";
questionContainerThree.textContent = "Hi I am a question container"
mainTextEl.appendChild.questionContainerThree;


///////////////////////////////////////////////////////
//Countdown timer function
startQuizBtnEl.addEventListener("click", countdown);
function countdown() {
  var timerId = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time left is " + timeLeft;
    } else {
      timerEl.textContent = "";
      clearInterval(timerId);
      window.alert("You ran out of time!");
    }

    timeLeft = timeLeft - 1;
  }, 1000);
}

/////////////Any thing below this is a scratchpad//////////

// now dynamically create HTML content that shows your quiz question and answer choices
//var q1 = document.createElement("h1");
// call your function showQuizQuestions
//showQuizQuestions();
