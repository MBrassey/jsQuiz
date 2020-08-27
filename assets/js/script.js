// Initial Click Area
var answerContentEl = document.querySelector("#answer");
var score = 0;


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
    { 1: "Strings", 2: "Booleans", 3: "Alerts", 4: "Numbers" },
    { 1: "Quotes", 2: "Curly Brackets", 3: "Parentheses", 4: "Square Brackets" },
    { 1: "Numbers & Strings", 2: "Other Arrays", 3: "Booleans", 4: "All of the above" },
    { 1: "Commas", 2: "Curly Brackets", 3: "Quotes", 4: "Parentheses" },
    { 1: "Javascript", 2: "Terminal/Bash", 3: "For Loops", 4: "Console.log" },
];

var startQuiz = function () {

      // Loop over every question object
      for (var i = 0; i < questions.length; i++) {


        console.log("Question: " + i);
        var Question = document.getElementById("questionLine");
        var Answer = document.getElementById("answer");
        var answerEl = document.createElement("div");
        var qnum = 1;
    
        // Load Questions
        Question.innerHTML = "";
        Question.innerHTML = "<h2>" + questions[i].q + "</h2>";
    
        // Load Answers
        Answer.innerHTML = "";
        answerEl.className = "answerList";
        answerEl.innerHTML = "<h3 class='answerText'>" + questions[i].ca + "</h3>";
        document.getElementById("answer").appendChild(answerEl);


        // Compare answers
        if (
          (answer === true && questions[i].a === 't') ||
          (answer === false && questions[i].a === 'f')
        ) {
          // Increase score
          score++;
          alert('Correct!');
        } else {
          alert('Wrong!');
        }
      }
};

var clickHandler = function (event) {
    // event.preventDefault();
    // get target element from event
    var targetEl = event.target;
    console.log(targetEl);

    // Start Area Was Clicked
    if (targetEl.matches("#begin")) {
        console.log("Start was clicked.");
        startQuiz();
    } else if (targetEl.matches("#answer")) {
        console.log("Answer was clicked.");
    }
};

answerContentEl.addEventListener("click", clickHandler);
