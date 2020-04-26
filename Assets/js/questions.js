// This document, when the start button is clicked, shows questions, & starts the timer
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question");
var choiceButtons = document.getElementById("choice-buttons");
//var buttonVal = 0;
var score = 0;
var shuffleQuestions, currentQindex;
var i = 0;

//Object Container to hold questions and answers
const questions = [{
    question: "What is 2 + 2?",
    answers: [
        {text: "4", correct: true},
        {text: "2", correct: false},
        {text: "3", correct: false},
        {text: "5", correct: false}
        ]
},
{
    question: "What is 4*4?",
    answers: [{text: '8', correct: false},
        {text: '16',correct: true},
        {text: '2', correct: false},
        {text: '6', correct: false},
        ]
},
{
    question: "Solve for x. y = 3x - 6",
    answers: [{text: '6', correct: false},
    {text: '3', correct: false},
    {text: '2', correct: false},
    {text: "idk", correct: false}]
}]; 

startButton.addEventListener('click',startGame);
//Start game function shows Question Cont. Shuffles Questions on an Arr.
function startGame() {
    startScreen.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQindex = 0;
    questionContainerEl.classList.remove('hide');
    setNextQuestion();
}  
//Erases question and finds next one on Arr.
function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQindex])
}
//Shows question as well as answers.
function showQuestion(questions){
    questionTitle.innerText = questions.question;
    console.log(questionTitle);
    var ansLength = Object.keys(questions.answers).length;
    var ansEl;
    for(i = 0; i < ansLength; i++) {
        //When the answer button is selected questions goes to next object element
        ansEl = questions.answers[i];
        var button = document.createElement("button");
        button.innerText = ansEl.text;
        console.log(button.innerText);
        button.classList.add('btn');
        if(questions.answers.correct){
            button.dataset.correct = answers.correct;
            score += 1;
        } else {
            score -= 1;
        }
        button.addEventListener("click", selectAnswer());
        choiceButtons.appendChild(button);
    }
}
//removes buttons from choices.
function resetState() {
    while(choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild)
    }
}
function selectAnswer(e) {
    //questionArrEl++;
}
function startTimer() {
    
}