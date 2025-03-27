const PreviousBtn = document.getElementById("PreviousBtn");
const NextBtn = document.getElementById("NextBtn");
const finishBtn = document.getElementById("finishBtn");

const content = document.getElementById("content");
const bullets = [...document.querySelectorAll(".bullet")];
const pages = [...document.querySelectorAll(".page")]; // Store all form pages in an array

const MAX_STEPS = pages.length; // Dynamically set max steps based on the number of form pages
let currentStep = 1;

/**
 * Function to update form visibility:
 * - Hides all form sections
 * - Displays only the section corresponding to the current step
 */
function updateFormVisibility() {
  pages.forEach((page, index) => {
    page.style.display = index === currentStep - 1 ? "block" : "none";
  });

  // Update progress bar highlighting
  bullets.forEach((bullet, index) => {
    if (currentStep === 7) {
      bullet.classList.toggle("completed-last", index < currentStep);
    } else {
      bullet.classList.toggle("completed", index < currentStep);
    }
  });
}
// Initialize by showing only the first step
updateFormVisibility();

NextBtn.addEventListener("click", () => {
  if (currentStep < MAX_STEPS) {
    currentStep++; // Move to the next step FIRST
    PreviousBtn.disabled = false; // Enable "Previous" button
  }

  if (currentStep === MAX_STEPS) {
    NextBtn.disabled = true; // Disable "Next" button at the final step
    finishBtn.disabled = false; // Enable "Finish" button
  }

  content.innerText = `Step Number ${currentStep}`; // Update step number display
  updateFormVisibility(); // Update form and progress bar
});

PreviousBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--; // Move back to the previous step FIRST
    NextBtn.disabled = false; // Re-enable "Next" button
    finishBtn.disabled = true; // Ensure "Finish" is disabled while going back
  }

  if (currentStep === 1) {
    PreviousBtn.disabled = true; // Disable "Previous" button at the first step
  }

  content.innerText = `Step Number ${currentStep}`; // Update step number display
  updateFormVisibility(); // Update form and progress bar
});

finishBtn.addEventListener("click", () => {
  location.reload(); // Reload the page to reset the form
});


const { Calendar } = window.VanillaCalendarPro;

const options = {
  type: "multiple",
  displayMonthsCount: 2,
  selectionDatesMode: "multiple",
  selectedTheme: "light",
  onClickDate(self) {
    const { selectedDates } = self.context;
    console.log(selectedDates);
  },
};

const calendar = new Calendar("#calendar", options);

calendar.init();