////////Main Page variables//////////////////////////
 var mainTextEl = document.querySelector(".mainText");
 var startQuizBtnEl = document.querySelector(".start-btn");
 var quizContainerEl= document.querySelector ("#startdiv")
 var firstQEl=document.querySelector("#firstQ")
//  console.log ("container")
//  var end =false;



////remove start page elements on clicking of start button///
 startQuizBtnEl.addEventListener("click", function(){
    mainTextEl.remove();
})

// ////////begin timer on on clicking of start button////////

// startQuizBtnEl.addEventListener("click", timerEl(){
// })


// //////begin the quiz on on clicking of start button///////
startQuizBtnEl.addEventListener("click", function(){
    var quizContainerEl= document.createElement("div")
        quizContainerEl.textContent="i am a div"
        console.log ("div")
})

    // startQuizBtnEl.addEventListener("click", function(){    
    //     var firstQEl = document.createElement("h1");
    //     firstQEl.className="start-page"
    //     firstQEl.textContent="Commonly Used data types DO NOT Include:"
    //     quizContainerEl.appendChild (firstQEl);
    // })

    
//  })

 //question One
//  startQuizBtnEl.addEventListener("click", function(){
//     //console.log ("hi")
//  var question = document.createElement("h1");
//  //console.log ("hi")
//  question.className = "start-page-title";
//  question.textContent = "Commonly Used data types DO NOT Include:";
//  quizContainerEl.appendChild(question);
//  })

/////////////Any thing below this is a scratchpad//////////

// now dynamically create HTML content that shows your quiz question and answer choices
    //var q1 = document.createElement("h1");
    // call your function showQuizQuestions
    //showQuizQuestions();

//function myStartTimerFunction() {

//}

//startQuizBtn.addEventListener("click", myStartTimerFunction)   








