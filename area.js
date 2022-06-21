const inputBase = document.querySelector("#input-base");
const inputHeight = document.querySelector("#input-height");
const calculateAreaBtn = document.querySelector("#check-button");
const output = document.querySelector("#output");

function calculateAreaOfTriangle() {
    if(inputBase.value == "" || inputHeight.value == "" ){
        output.innerText="Please enter valid base and height!"
    } else {
        const area = 1/2 * (Number(inputBase.value) * Number(inputHeight.value));
    output.innerHTML = "Area of the triangle is " + area.toFixed(2) + " cm<sup>2</sup>";
    }
    
}

calculateAreaBtn.addEventListener('click', calculateAreaOfTriangle);