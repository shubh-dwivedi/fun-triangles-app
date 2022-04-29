const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const resultOutput = document.querySelector("#output");

// const quizContainer = document.querySelector(".quiz-section");
// const footerDiv = document.querySelector("#footer");
// const navDiv = document.querySelector(".nav-bar");
// const body = document.querySelector("body");

const correctAnswers = ["90", "right angled"];

// function setFooter() {
//     const quizHeight = quizContainer.getBoundingClientRect().height;
// const footerHeight = footerDiv.getBoundingClientRect().height;
// const navHeight = navDiv.getBoundingClientRect().height;

// var totalHeight = navHeight+quizHeight+footerHeight;
// var bodyHeight = body.getBoundingClientRect().height;
// var remainingHeight = (bodyHeight-totalHeight).toFixed(1);

// quizContainer.style.paddingBottom = remainingHeight+'px';
// }


function calculateScore() {
    let score = 0;
    let index = 0;

    const answers = new FormData(quizForm);
    for(let ans of answers.values()) {
        if(ans === correctAnswers[index]) {
            score +=1;
        }
        index +=1;
    }
    resultOutput.innerText = 'Your score is '+score;
}

submitButton.addEventListener('click', calculateScore);
