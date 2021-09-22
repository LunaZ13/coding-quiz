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

var score = 0;
var timer = 0;
var interval = "";
var qIndex = 0;

var startQuiz = document.querySelector("#startquiz");
var finalScore = document.querySelector("#finalscore");
var questionDiv = document.querySelector("#questions");
var endGameDiv = document.querySelector("#endGameBtns");

function start() {
    startQuiz.style.display = "none";

    var timeleft = 5;
    var interval = setInterval(function () {
        timeleft--;
        document.getElementById("timeleft").innerHTML = timeleft;
        if (timeleft === 0) {
            clearInterval(interval);
            alert("You're out of time!");
            stopGame();
        }
    }, 1000);

    showQuiz();
};

function showQuiz() {

    questionDiv.innerHTML = "";

    //1 make html!!
    var h = document.createElement("H1"); // Create the H1 element 
    // dres sit up how u want class names text ect..
    var t = document.createTextNode(questions[qIndex].question); // Create a text element 
    h.appendChild(t); // Append the text node to the H1 element 

    //stick it on the page!
    questionDiv.appendChild(h);

    for (let i = 0; i < questions[qIndex].options.length; i++) {
    
        var button = document.createElement("button"); // Create the H1 element 
        // dres sit up how u want class names text ect..
        var buttonText = document.createTextNode(questions[qIndex].options[i]);
        button.appendChild(buttonText); // Append the text node to the H1 element 
        button.addEventListener("click", pickChoice);

        //stick it on the page!
        questionDiv.appendChild(button);
    
    }
}

function pickChoice(event) {
    //console.log('We got clicked!!', event.target.innerHTML)
    if (event.target.innerHTML === questions[0].answer) {
        score++;
        alert("Correct!");
    }
    else {
        alert("Wrong!");
    }
    qIndex++

    if (qIndex > questions.length - 1) {
        alert("gameover");
        stopGame()

    } else {
        showQuiz()
    }
};

var stopGame = function () {
    questionDiv.innerHTML = "";
    clearInterval(timer);
    finalScore.style.display = "block";
    
};

function endGameDiv () {

}












