const inputSides = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-button");
const outputResult = document.querySelector("#output");

function calculateSquareSum(sideA, sideB) {
    let squareSum = (sideA**2) + (sideB**2);
    return squareSum;
}

submitButton.addEventListener('click', function calculateHypotenuse() {
    const squareSum = calculateSquareSum(Number(inputSides[0].value), Number(inputSides[1].value));
    const hypotenuse = Math.sqrt(squareSum).toFixed(2);
    outputResult.innerText = "Length of Hypotenuse is " +hypotenuse+ " cm";
});