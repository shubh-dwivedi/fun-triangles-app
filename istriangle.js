const inputAngles = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#check-button");
const outputMsg = document.querySelector("#output");

function calculateAnglesSum(angle1, angle2, angle3) {
    const sumOfAllAngles = angle1+angle2+angle3;
    return sumOfAllAngles;
}

function checkIsTriangle() {
    const angle1=Number(inputAngles[0].value);
    const angle2=Number(inputAngles[1].value);
    const angle3=Number(inputAngles[2].value);

    if(angle1 && angle2 && angle3) {
        const sumOfAngles = calculateAnglesSum(angle1,angle2,angle3);
        if(sumOfAngles === 180) {
            outputMsg.innerText = "Yayy! given angles form a triangle!!";
        } else {
            outputMsg.innerText = "Oops! sum of angles is "+sumOfAngles+", which does not form a triangle!!";
        }
    } else {
        outputMsg.innerText = "Please enter all the angle values!!";
    }
}

isTriangleBtn.addEventListener("click", checkIsTriangle);