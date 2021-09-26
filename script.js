var questions = [
    {
        question: "Commonly used data types DO not include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____:",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ____:",
        options: ["numbers", "strings", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed withiin ____ when being assigned to variables:",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "curly brackets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },

];
// global variables
var score = 0;
var secsLeft = 75;
var interval = 0;
var qIndex = 0;

var startQuiz = document.querySelector("#startquiz");
var finalScore = document.querySelector("#finalscore");
var questionDiv = document.querySelector("#questions");
var endGameDiv = document.querySelector("#endGameBtns");
var highScoreDiv = document.querySelector("highscorediv")

// function to start the quiz
function start() {
    startQuiz.style.display = "none";
    // quiz timer
    var interval = setInterval(function () {
        secsLeft--;
        document.getElementById("timeleft").innerHTML = secsLeft;
        if (secsLeft <= 0) {
            clearInterval(interval);
            alert("You're out of time!");
            stopGame();
        }
    }, 1000);

    showQuiz();
};
//  function to display questions and button to make choice
function showQuiz() {

    questionDiv.innerHTML = "";

    // creates h1 element
    var h = document.createElement("H1"); 
    // creates text  for questions
    var t = document.createTextNode(questions[qIndex].question);  
    h.appendChild(t); // Append the text node to the H1 element 

    // stick it on the page!
    questionDiv.appendChild(h);
    // for loop
    for (let i = 0; i < questions[qIndex].options.length; i++) {
    // creates button
        var button = document.createElement("button"); 
        // creates option buttons
        var buttonText = document.createTextNode(questions[qIndex].options[i]);
        button.appendChild(buttonText); 
        button.addEventListener("click", pickChoice);

        //stick it on the page!
        questionDiv.appendChild(button);

    }
}
// funciton to check choices made by user
function pickChoice(event) {
    
    if (event.target.innerHTML === questions[qIndex].answer) {
        score++;
        alert("Correct!");
    }
    else {
        secsLeft -= 10;
        console.log();
        alert("Wrong!");
    }
    qIndex++;

    if (qIndex > questions.length - 1) {
        stopGame()

    } else {
        showQuiz()
    }
};
// function to end the game
var stopGame = function () {
    questionDiv.innerHTML = "";
    clearInterval(interval);
    finalScore.style.display = "block";
    // creates h1 element
    var h = document.createElement("H2"); 
    // creates text to show final score
    var t = document.createTextNode(' Your final score is: ' + secsLeft); 
    h.appendChild(t); // Append the text node to the H1 element 

    finalScore.appendChild(h)
    // creates label to input users name or intials
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    finalScore.appendChild(createLabel);
    // creates input box
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    finalScore.appendChild(createInput);
    
    // creates submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    finalScore.appendChild(createSubmit);
    // adds event listener to submit button
    createSubmit.addEventListener("click", function () {
        var intials = createInput.value;

        if (!intials) {
            alert("Nothing Entered!");
        }
        else {
            var finalScore = {
                intials: intials,
                score: secsLeft
            }
            var savedScores = localStorage.getItem("savedScores");
            if (!savedScores) {
                savedScores = [];
            }
            else {
                savedScores = JSON.parse(savedScores);
                
                savedScores.push(finalScore);
                var currentScore = JSON.stringify(savedScores);
                localStorage.setItem("savedScores", currentScore);
            }
        }
    })
};

var highScoreDiv = function () {
    var h = document.createElement("H2"); 
    // creates text to show final score
    var t = document.createTextNode("High Scores"); 
    h.appendChild(t); // Append the text node to the H1 element 

    highScoreDiv.appendChild(h)
    // creates label to input users name or intials
    var createList = document.createElement("list");
    createLabel.setAttribute("id", "createList");

    highScoreDiv.appendChild(createList);
};

function highScores () {
    startQuiz.style.display = "none";
    endGameDiv.style.display = "block";
    highScoreDiv.style.display = "block";
}

restart.addEventListener("click", function() {
    startQuiz.style.display = "block";
});

clearScores.addEventListener("click", function(){
    window.localStorage.removeItem("savedScores");
    highScoreDiv.innerHTML = "Scores Cleared!"
})








