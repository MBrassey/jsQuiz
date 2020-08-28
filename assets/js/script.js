var answerContentEl = document.querySelector("#answer");
var timerEl = document.getElementById("time");
var timeRemaining = 30;
var score = 0;
var expired = false;
var questionNumber = 0;

// Questions Array
var questions = [
    { q: "Commonly used data types do NOT include:", ca: "a3" },
    { q: "The condition of an if/ else statement is enclosed with __________:", ca: "a3" },
    { q: "Arrays is Javascript can be used to store:", ca: "a4" },
    { q: "String values must be enclosed within _______ when being assigned to variables:", ca: "a3" },
    { q: "A very useful tool used during development & debugging for printing content to the debugger is:", ca: "a4" },
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
var countdown = function () {
    console.log("countdown!");
    var timer = setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timerEl.textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            timeRemaining = 0;
            var expired = true;
            alert("end");
        }
    }, 1000);
};

// Load Question & Answers
var load = function (questionNumber) {
    // Reset Timer
    timeRemaining = 30;

    console.log("Question: " + questionNumber);
    var Question = document.getElementById("questionLine");
    var Answer = document.getElementById("answer");
    var answerEl = document.createElement("div");

    // Load Questions
    Question.innerHTML = "";
    Question.innerHTML = "<h2>" + questions[questionNumber].q + "</h2>";

    // Load Answers
    Answer.innerHTML = "";
    answerEl.className = "answerList";
    answerEl.innerHTML =
        "<h3 class='answerText' id='a1'>" +
        answers[questionNumber].a1 +
        "</h3>" +
        "<h3 class='answerText' id='a2'>" +
        answers[questionNumber].a2 +
        "</h3>" +
        "<h3 class='answerText' id='a3'>" +
        answers[questionNumber].a3 +
        "</h3>" +
        "<h3 class='answerText' id='a4'>" +
        answers[questionNumber].a4 +
        "</h3>";
    Answer.appendChild(answerEl);

    // Broadcast Correct Answer
    correctAnswer = questions[questionNumber].ca;
    console.log("Correct Answer: " + correctAnswer);
};

var clickHandler = function (event) {

    // event.preventDefault();
    var targetEl = event.target;
    console.log(targetEl);

    if (targetEl.matches("#begin")) {
        // Start Button Clicked
        console.log("Start was clicked.");
        // Start Timer
        countdown();
        // Start Quiz
        quiz();
    } else if (targetEl.matches("#answer")) {
        // Outside Content Window Clicked
        console.log("Outside was clicked.");
    } else if (targetEl.matches(".answerText")) {
        // An Answer Clicked
        console.log("A selection has been made. " + event.target.id);
        if (event.target.id === correctAnswer) {
            // The Correct Answer Clicked
            console.log("Holy Shit, The Correct Answer Was Clicked..");
            // Add Current Time Remaining To Score As Points
            score = score + timeRemaining;
            console.log("New Score: " + score);
        }
        // Increment Question Number
        questionNumber = (questionNumber + 1);
        // To The Next Step
        quiz();
    }
};

var initial = function () {
    var Length = document.getElementById("length");
    Length.innerHTML = "";
    Length.innerHTML = questions.length;
};

var quiz = function () {
    console.log("qnumber " + questionNumber);
    if (questionNumber <= questions.length) {
        load(questionNumber);
    }
};

answerContentEl.addEventListener("click", clickHandler);

initial();
