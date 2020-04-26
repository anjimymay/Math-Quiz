// This document, when the start button is clicked, shows questions, & starts the timer
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var timer = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var choiceButtons = document.getElementById("choice-buttons");
var buttonVal = 0;

var shuffleQuestions, currentQindex;


var questions = [{
    question: "What is 2 + 2?",
    answers: [
        { text: '4', correct: true},
        {text: '2', correct: false},
        {text: '3', correct: false},
        {text: '5', correct: false}
        ]
    }
];

var secondQuestion = {
    title: "What is 4^2?",
    answer: [8, 16, 2, "idk"],
};

var thirdQuestion = {
    title: "What is y = 3x - 6",
    answer: [6, 3, 2, "idk"]
};

startButton.addEventListener('click',startGame);

function startGame() {
    startScreen.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQindex = 0;
    questionContainerEl.classList.remove('hide');
    setNextQuestion();
}  
function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQindex])
}
function showQuestion(questions){
    questionContainerEl.innerText = questions.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer());
        chioceButtons.appendChild(button);
    })
}
function resetState() {
    while(choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild)
    }
}
function selectAnswer() {

}
function startTimer() {
    
}