let startBtn = document.getElementById("startBtn");
let timer = document.getElementById("timer");
let questions = document.getElementById("questions");
let choices= document.getElementById("choices");
let score= document.getElementById("score");
let initials= document.getElementById("initials");
let initialsForm= document.getElementById("initialsForm");



var questionsArr = [
    {
        question: "Which built-in method calls a function for each element in the array?" ,
        choices: ["while", "loop", "foreach()", "None of the above"],
        answer: "forEach()",
    },

    {
        question: "Which built-in method reverses the order of the elements of an array?",
        choices: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above"],
        answer: "sort(order)",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        choices: ["named function", "anonymous function", "Both the above", "None of the above"],
        answer: "Both the above",
    },
    {
        question: "What year was JavaScript launched?",
        choices: ["1996", "1995", "1994", "None of the above"],
        answer: "1995",
    },
];
let timerCount = 10;
let questionIndex = 0;
let scoreCount = 0;
let storedUsers;

startBtn.addEventListener("click", function(){
    startBtn.style.display= "none";
    startTimer();
    runQuiz();
});

function startTimer () {
    let timerCount = 10;
    timer.textContent = "Time: " + timerCount;
    let countDown = setInterval(() => {
    timerCount--;
    timer.textContent = "Time: " + timerCount;
    if(timerCount <= 0){
        clearInterval(countDown)
        timer.style.display = "none";
}
    }, 1000);
}

function runQuiz() {
    score.textContent = "Score: " + scoreCount; 
    questions.textContent = questionsArr[0].question;

    for(let i = 0; i < questionsArr[questionIndex].choices.length; i++){
        let choiceBtn = document.createElement("button");
    choiceBtn.textContent = questionsArr[questionIndex].choices[i];
    choiceBtn.addEventListener("click", function () {
        manageUserSelection (choiceBtn.textContent);
    });
    choices.append(choiceBtn);
    }   
}

function manageUserSelection (userSelection) {
    console.log(userSelection);
    if (userSelection ===questionsArr[questionIndex].answer){
        scoreCount += 10
    }
    else{
        timerCount -=5
    }
    questionIndex++
    choices.innerHTML = ""

    if (questionIndex === questionsArr.length -1) {
        return endQuiz()
    } runQuiz()
}
{
    function endQuiz() {
        timer.style.display = "none"
        questions.style.display = "none"
        choices.style.display = "none"
        initials.style.display = "block"
    }
}

function onPageLoad() {
    initials.style.display = "none"
    if(JSON.parse(localStorage.getItem("highScores")) === null) {
    storedUsers= []
    }
    else{
        storedUsers = JSON.parse(localStorage.getItem("highScores"))
    }
}
onPageLoad()
function saveScore (e) {
    e.preventDefault();
    let newScore = {
        user: initials.value,
        userScore: scoreCount
    }
    storedUsers.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(storedUsers))
    window.location = "highScores.html"
}
initialsForm.addEventListener("submit",saveScore)



