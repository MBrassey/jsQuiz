// Define The Vars
var highScores = JSON.parse(localStorage.getItem("highScores") || '[{"name": "Luc1d","score": 111},{"name": "Angel","score": 98},{"name": "Pearl", "score": 77}]');
var answerContentEl = document.querySelector("#answer");
var resultContentEl = document.querySelector("#result");
var Result = document.getElementById("result");
var timerEl = document.getElementById("time");
var Question = document.getElementById("questionLine");
var Answer = document.getElementById("answer");
var answerEl = document.createElement("div");
var initialTime = document.getElementById("initialTime");
var Length = document.getElementById("length");
var timeRemaining = 30;
var score = 0;
var questionNumber = 0;
var highScore = 0;
var timer = "";
toggleResult = "";
ended = false;
timeOut = false;

// Questions Array
var questions = [
    { q: "Commonly used data types do NOT include:", ca: "a3" },
    { q: "The condition of an if/ else statement is enclosed with:", ca: "a3" },
    { q: "Arrays is Javascript can be used to store:", ca: "a4" },
    { q: "String values must be enclosed within what when being assigned to variables?", ca: "a3" },
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
    console.log("Countdown Initiated!");
    var timer = setInterval(function () {
        timeRemaining = timeRemaining - 1;
        timerEl.textContent = timeRemaining;
        if (timeRemaining <= 0 || ended) {
            clearInterval(timer);
            timerEl.innerHTML = "";
            timerEl.innerHTML = 30; // Set The Initial Time Here
            end();
            if (timeRemaining <= 0) {
                alert("Times Up!");
                timeOut = true; // Broadcast Timeout Occured
            }
        }
    }, 1000);
};

// Handle Next
var next = function () {
    // Increment Question Number
    questionNumber = questionNumber + 1;

    // To The Next Step
    if (questionNumber < questions.length) {
        quiz();
    } else {
        end();
    }
};

// Correct Answer Handler
var correct = function () {
    console.log("Correct!");
    // Add Current Time Remaining To Score As Points
    score = score + timeRemaining;
    console.log("New Score: " + score);
    // Display Result: Correct During load()
    toggleResult = "correct";
    next();
};

// Incorrect Answer Handler
var incorrect = function () {
    console.log("Incorrect!");
    // Display Result: Incorrect During load()
    toggleResult = "incorrect";
    next();
};

// Load Question & Answers
var load = function (questionNumber) {
    // Reset Timer
    timeRemaining = 30;

    // Show Result
    if (toggleResult === "correct") {
        Result.innerHTML = "";
        Result.innerHTML = "<h2>Correct!</h2>";
    } else if (toggleResult === "incorrect") {
        Result.innerHTML = "";
        Result.innerHTML = "<h2>Incorrect!</h2>";
    } else {
        Result.innerHTML = "";
    }

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
};

// Click Handler
var clickHandler = function (event) {
    // event.preventDefault();
    var targetEl = event.target;
    if (targetEl.matches("#begin")) {
        // Start Button Clicked
        console.log("Start was clicked.");
        // Start Timer
        countdown();
        // Start Quiz
        quiz();
    } else if (targetEl.matches("#answer")) {
        // Outside Content Window
        console.log("Outside was clicked.");
    } else if (targetEl.matches(".answerText")) {
        // A Selection Has Been Made
        if (event.target.id === correctAnswer) {
            // The Correct Answer Clicked
            correct();
        } else {
            // Incorrect Answer Clicked
            incorrect();
        }
    } else if (targetEl.matches("#result")) {
        console.log("RETAKE!");
    }
};

// Initial Function
var initial = function () {
    Length.innerHTML = "";
    Length.innerHTML = questions.length;
    initialTime.innerHTML = "";
    initialTime.innerHTML = 30; // Set The Initial Time Here
    timerEl.innerHTML = "";
    timerEl.innerHTML = 30; // Set The Initial Time Here
};

// Process & Save Score
var saveScore = function () {
    // Establish Saved Scores Object If High Score
    var userScore = {
        name: prompt("New High Score! Enter your Initials and press OK."),
        score: score,
    };
    // Push User's Score & Initials To Localstorage Sorted()
    highScores.push(userScore);
    highScores.sort((a, b) => (a.score < b.score ? 1 : -1));
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

// End Quiz / Start Scoreboard
var end = function () {
    ended = true;
    if (score > highScores[0].score) {
        console.log("New High Score!");
        saveScore();
    }
    Result.innerHTML = "<h2><p>Retake</p></h2>";
    Question.innerHTML = "";
    Question.innerHTML = "<h2>Current high score: <span class='azure' id='length'>" + highScores[0].score + "</span>, you'r score: <span class='azure'>" + score + "</span>.</h2>";
    Answer.innerHTML = "";
    Answer.innerHTML =
        "<h1 class='high'>" +
        highScores[0].name +
        " | " +
        highScores[0].score +
        "</h1><h1 class='high2'>" +
        highScores[1].name +
        " | " +
        highScores[1].score +
        "</h1><h1 class='high2'>" +
        highScores[2].name +
        " | " +
        highScores[2].score +
        "</h1>";
};

// Reset Quiz
var reset = function () {
    ended = false;
    timeOut = false;
    questionNumber = 0;
    toggleResult = "";
    score = 0;
    Result.innerHTML = "";
    Question.innerHTML = "";
    Question.innerHTML = "<h2>This quiz has <span class='azure' id='length'>" + questions.length + "</span> questions, you have <span class='azure'>30s</span> to answer each.</h2>";
    Answer.innerHTML = "";
    Answer.innerHTML = "<h1 id='begin'>Click to begin quiz!</h1>";
};

// Quiz Function
var quiz = function () {
    if (questionNumber <= questions.length) {
        clearInterval(timer);
        load(questionNumber);
    }
};

// Listen For Clicks Within The Answer Div
answerContentEl.addEventListener("click", clickHandler);
resultContentEl.addEventListener("click", reset);

// Update Initial App Appearance
initial();