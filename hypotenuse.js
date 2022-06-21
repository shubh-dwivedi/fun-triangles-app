const inputSides = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#check-button");
const outputResult = document.querySelector("#output");

function calculateSquareSum(sideA, sideB) {
    
    let squareSum = (sideA**2) + (sideB**2);
    return squareSum;
}

submitButton.addEventListener('click', function calculateHypotenuse() {
    if(inputSides[0].value=="" || inputSides[1].value=="" ){
        outputResult.innerText = "Please enter valid side length values";
    } else {
        const squareSum = calculateSquareSum(Number(inputSides[0].value), Number(inputSides[1].value));
    const hypotenuse = Math.sqrt(squareSum).toFixed(2);
    outputResult.innerText = "Length of Hypotenuse is " +hypotenuse+ " cm";
    }
});