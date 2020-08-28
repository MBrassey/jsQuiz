// Initial Click Area
var answerContentEl = document.querySelector("#answer");
var timerEl = document.getElementById("time")
var timeLeft = 30;
var score = 0;
var expired = false;
var questionNumber = 0;

// Questions Array
var questions = [
    { q: "Commonly used data types do NOT include:", ca: "Alerts" },
    { q: "The condition of an if/ else statement is enclosed with __________:", ca: "Parentheses" },
    { q: "Arrays is Javascript can be used to store:", ca: "All of the above" },
    { q: "String values must be enclosed within _______ when being assigned to variables:", ca: "Quotes" },
    { q: "A very useful tool used during development & debugging for printing content to the debugger is:", ca: "Console.log" },
];

// Answers Array
var answers = [
    { a1: "Strings", a2: "Booleans", a3: "Alerts", a4: "Numbers" },
    { a1: "Quotes", a2: "Curly Brackets", a3: "Parentheses", a4: "Square Brackets" },
    { a1: "Numbers & Strings", a2: "Other Arrays", a3: "Booleans", a4: "All of the above" },
    { a1: "Commas", a2: "Curly Brackets", a3: "Quotes", a4: "Parentheses" },
    { a1: "Javascript", a2: "Terminal/Bash", a3: "For Loops", a4: "Console.log" },
];

// Countdown Timer
var countdown = function() {
    console.log("countdown!");
    var timer = setInterval(function(){
        timeLeft = timeLeft - 1;
        timerEl.textContent = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            timeLeft = 0;
            var expired = true;
            alert("end");
        }
    }, 1000);
}  

var load = function (questionNumber) {
        console.log("Question: questionNumber");
        var Question = document.getElementById("questionLine");
        var Answer = document.getElementById("answer");
        var Time = document.getElementById("timer");
        var answerEl = document.createElement("div");
        var selection = false;
    
        // Load Questions
        Question.innerHTML = "";
        Question.innerHTML = "<h2>" + questions[questionNumber].q + "</h2>";
    
        // Load Answers
        Answer.innerHTML = "";
        answerEl.className = "answerList";
        answerEl.innerHTML = "<h3 class='answerText'>" + answers[questionNumber].a1 + "</h3>" + "<h3 class='answerText'>" + answers[questionNumber].a2 + "</h3>" + "<h3 class='answerText'>" + answers[questionNumber].a3 + "</h3>" + "<h3 class='answerText'>" + answers[questionNumber].a4 + "</h3>";
        Answer.appendChild(answerEl);

      };


var clickHandler = function (event) {
    // event.preventDefault();
    // get target element from event
    var targetEl = event.target;
    console.log(targetEl);

    // Start Area Was Clicked
    if (targetEl.matches("#begin")) {
        console.log("Start was clicked.");
        quiz();
    } else if (targetEl.matches("#answer")) {
        console.log("Answer was clicked.");
    } 
};

var initial = function () {
    var Length = document.getElementById("length");
    Length.innerHTML = "";
    Length.innerHTML = questions.length;
};

var quiz = function () {
    countdown();
    load(questionNumber);
}

answerContentEl.addEventListener("click", clickHandler);

initial();