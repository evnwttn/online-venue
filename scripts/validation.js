let formData = {};

function handleChange(event) {
  const input = event.target;
  if (input.checkValidity()) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

// Initialize validation
function initValidation() {
  const inputs = document.querySelectorAll(
    "input[required], textarea[required], select[required]"
  );
  inputs.forEach((input) => {
    input.addEventListener("change", handleChange); // Validate on change
    input.addEventListener("blur", handleChange); // Validate when leaving the field
  });
}

// Run on DOM load
document.addEventListener("DOMContentLoaded", function () {
  initValidation();

  let currentStep = 1;
  const totalSteps = 7;
  const nextBtn = document.getElementById("NextBtn");

  nextBtn.addEventListener("click", function () {
    formData = {
      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      room_type: document.getElementById("room_type").value,
      guest_no: document.getElementById("guest_no").value,
      city: document.getElementById("city").value,
      neighborhood: document.getElementById("neighborhood").value,
      property_description: document.getElementById("property_description").value,
      booking_type: document.getElementById("booking-type").value,
      price_per_hour: document.getElementById("price-per-hour").value,
      taxes: document.getElementById("taxes").value,
      cleaning_fee: document.getElementById("cleaning-fee").value,
      security_deposit: document.getElementById("security-deposit").value,
      early_bird_discount: document.getElementById("early-bird-discount").value,
      start_hour: document.getElementById("start-hour").value,
      end_hour: document.getElementById("end-hour").value,
      price_calendar: document.getElementById("price-calendar").value,
      second_category: document.getElementById("second-category").value,
      virtual_tour: document.getElementById("virtual-tour").value,
      size: document.getElementById("size").value,
      capacity: document.getElementById("capacity").value,
      bathroom: document.getElementById("bathroom").value,
      individual_worker: document.getElementById("individual-worker").value,
      client_meeting: document.getElementById("client-meeting").value,
      good_for_photoshoot: document.getElementById("good-for-photoshoot").value,
      team_meeting: document.getElementById("team-meeting").value,
      details_list: document.getElementById("details-list").value,
      terms: document.getElementById("terms").value,
      rules: document.getElementById("rules").value,
      location: document.getElementById("location").value,
      zip: document.getElementById("zip").value,
      state: document.getElementById("state").value,
      country: document.getElementById("country").value,
      latitude: document.getElementById("latitude").value,
      longitude: document.getElementById("longitude").value,
      wifi: document.getElementById("wifi").checked,
      ac: document.getElementById("ac").checked,
      projector: document.getElementById("projector").checked,
      extra_chair: document.getElementById("extra-chair").checked,
      lockers: document.getElementById("lockers").checked,
      parking: document.getElementById("parking").checked,
      music_system: document.getElementById("music-system").checked,
      white_board: document.getElementById("white-board").checked,
      phone_charger: document.getElementById("phone-charger").checked,
      parking: document.getElementById("parking").checked,
      elevator: document.getElementById("elevator").checked,
      kitchen: document.getElementById("kitchen").checked,
      pen_paper: document.getElementById("pen-paper").checked,
      thunderbolt: document.getElementById("thunderbolt").checked,
      usb: document.getElementById("usb").checked,
    };

    // Validate inputs before saving and proceeding
    const inputs = document.querySelectorAll(
      `.step-${currentStep} input[required], .step-${currentStep} textarea[required], .step-${currentStep} select[required]`
    );
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.classList.add("invalid");
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    // Move to the next step if there are more steps
    if (currentStep < totalSteps) {
      currentStep++;
      console.log(`Moving to step ${currentStep}`);
    } else {
      console.log("All steps completed!");
    }
  });
});