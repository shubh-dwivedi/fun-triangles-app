const inputBase = document.querySelector("#input-base");
const inputHeight = document.querySelector("#input-height");
const calculateAreaBtn = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function calculateAreaOfTriangle() {
    const area = 1/2 * (Number(inputBase.value) * Number(inputHeight.value));
    output.innerHTML = "Area of the triangle is " + area + " cm<sup>2</sup>"
}

calculateAreaBtn.addEventListener('click', calculateAreaOfTriangle);