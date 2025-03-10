const PreviousBtn = document.getElementById("PreviousBtn");
const NextBtn = document.getElementById("NextBtn");
const finishBtn = document.getElementById("finishBtn");

const content = document.getElementById("content");
const bullets = [ ...document.querySelectorAll(".bullet")];

const MAX_STEPS = 7;
let currentStep = 1;

NextBtn.addEventListener("click", () => {
    const   currentBullet= bullets [currentStep - 1];

    currentBullet.classList.add("completed");

    currentStep++;
    PreviousBtn.disabled = false;
    if(currentStep === MAX_STEPS){
        NextBtn.disabled = true;
        finishBtn.disabled = false;
    }

    content.innerText = `Step Number ${currentStep}`;
})