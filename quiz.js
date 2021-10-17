const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const resultOutput = document.querySelector("#output");

const correctAnswers = ["90", "right angled"];

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
    resultOutput.innerText = "Your score is "+score;
}

submitButton.addEventListener('click', calculateScore);