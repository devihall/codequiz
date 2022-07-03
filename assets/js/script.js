// questionBank
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
var startQuizBtnEl = document.querySelector(".start-btn");
var mainTextEl = document.querySelector(".mainText");
var startDiv = document.querySelector("#startdiv")
var questionContainer = document.querySelector (".start-page-title")


//On click replace start page elements with first question///
startQuizBtnEl.addEventListener("click", function(){
mainTextEl.replaceChild(questionContainer, startDiv)
})

// create question container
var  questionContainer = document.createElement ("div")
     questionContainer.className= "question-container"
     mainTextEl.appendChild.questionContainer;
     
     console.log ("hello")

    //Question One
    var question = document.createElement ("h1");
        question.className = "question";
        question.textContent = "Html language..."
        questionContainer.appendChild (question);

//create answer container
var answerContainer = document.createElement ("div")
answerContainer.className = "answer-container";
questionContainer.appendChild (answerContainer);
    //answer choice one
    var answerOne = document.createElement ("button")
    answerOne.className = "answerOne";
    answerOne.textContent = "is used for math"
    answerContainer.appendChild (answerOne);
    answerOne.addEventListener ("click", removeWrong());

    //answer choice two
    var answerTwo = document.createElement ("button");
    answerTwo.className = ("answerTwo");
    answerTwo.textContent = "is used for animation"
    answerContainer.appendChild (answerTwo);
    answerTwo.addEventListener ("click", removeWrong)

    //answer choice three
    var answerThree = document.createElement ("button");
    answerThree.className = ("answerThree");
    answerThree.textContent ="is used to create websites";
    answerContainer.appendChild (answerThree);
    answerThree.addEventListener ("click", questionContainer.remove())

    var answerFour = document.createElement ("button");
    answerFour.className = ("answerFour");
    answerFour.textContent = "is used for nothing"
    answerContainer.appendChild (answerFour);
    answerFour.addEventListener ("click", removeWrong)
    
    //This will run when wrong answer is picked
    var removeWrong = function() {
        //this needs to subtract from time left
        //also remove questionContainer
        //move to the next question
        //also windowAlert you picked the wrong answer
    }








/////begin timer on on clicking of start button///////


/////////////Any thing below this is a scratchpad//////////

// now dynamically create HTML content that shows your quiz question and answer choices
    //var q1 = document.createElement("h1");
    // call your function showQuizQuestions
    //showQuizQuestions();




