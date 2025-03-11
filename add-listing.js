const PreviousBtn = document.getElementById("PreviousBtn");
const NextBtn = document.getElementById("NextBtn");
const finishBtn = document.getElementById("finishBtn");

const content = document.getElementById("content");
//es6 syntax for aarays-it's gonna takes all the elements with the class bullet and put them in an array
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
});

PreviousBtn.addEventListener("click", () => {
    const PreviousBtn = bullets[currentStep - 2];
    PreviousBtn.classList.remove("completed");
    currentStep--;
    NextBtn.disabled = false;
    finishBtn.disabled = true;
    if(currentStep === 1){
        PreviousBtn.disabled = true;
    }
    content.innerText = `Step Number ${currentStep}`;

});

finishBtn.addEventListener("click", () => {
    location.reload();
});