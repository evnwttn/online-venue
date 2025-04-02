function handleChange(event) {
    const input = event.target;
    if (input.checkValidity()) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

// Initialize validation
function initValidation() {
    const inputs = document.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('change', handleChange); // Validate on change
        input.addEventListener('blur', handleChange);  // Validate when leaving the field
    });
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', function () {
    initValidation();

    let currentStep = 1;
    const totalSteps = 7;
    const nextBtn = document.getElementById('NextBtn');

    nextBtn.addEventListener('click', function () {
        let formData = {};

        if (currentStep === 1) {
            formData = {
                title: document.getElementById('title').value,
                category: document.getElementById('category').value,
                room_type: document.getElementById('room_type').value,
                guest_no: document.getElementById('guest_no').value,
                city: document.getElementById('city').value,
                neighborhood: document.getElementById('neighborhood').value,
                property_description: document.getElementById('property_description').value
            };
        } else if (currentStep === 2) {
            formData = {
                booking_type: document.getElementById('booking-type').value,
                price_per_hour: document.getElementById('price-per-hour').value,
                before_label: document.getElementById('before-label').value,
                after_label: document.getElementById('after-label').value,
                taxes: document.getElementById('taxes').value,
                cleaning_fee: document.getElementById('cleaning-fee').value,
                minimum_hours: document.getElementById('minimum-hours').value,
                security_deposit: document.getElementById('security-deposit').value,
                early_bird_discount: document.getElementById('early-bird-discount').value,
                start_hour: document.getElementById('start-hour').value,
                end_hour: document.getElementById('end-hour').value,
                price_calendar: document.getElementById('price-calendar').value
            };
        } else if (currentStep === 3) {
            formData = {
                images: document.getElementById('images').value,
                second_category: document.getElementById('second-category').value,
                virtual_tour: document.getElementById('virtual-tour').value
            };
        } else if (currentStep === 4) {
            formData = {
                size: document.getElementById('size').value,
                capacity: document.getElementById('capacity').value,
                bathroom: document.getElementById('bathroom').value,
                individual_worker: document.getElementById('individual-worker').value,
                client_meeting: document.getElementById('client-meeting').value,
                good_for_photoshoot: document.getElementById('good-for-photoshoot').value,
                team_meeting: document.getElementById('team-meeting').value,
                details_list: document.getElementById('details-list').value,
                terms: document.getElementById('terms').value,
                rules: document.getElementById('rules').value,
            };
        }
        // } else if (currentStep === 2) {
        //     formData = {
        //         booking_type: document.getElementById('booking-type').value,
        //         price_per_hour: document.getElementById('price-per-hour').value,
        //         before_label: document.getElementById('before-label').value,
        //         after_label: document.getElementById('after-label').value,
        //         taxes: document.getElementById('taxes').value,
        //         cleaning_fee: document.getElementById('cleaning-fee').value,
        //         minimum_hours: document.getElementById('minimum-hours').value,
        //         security_deposit: document.getElementById('security-deposit').value,
        //         early_bird_discount: document.getElementById('early-bird-discount').value,
        //         start_hour: document.getElementById('start-hour').value,
        //         end_hour: document.getElementById('end-hour').value,
        //         price_calendar: document.getElementById('price-calendar').value
        //     };
        // }

        // Validate inputs before saving and proceeding
        const inputs = document.querySelectorAll(`.step-${currentStep} input[required], .step-${currentStep} textarea[required], .step-${currentStep} select[required]`);
        let isValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields before proceeding.');
            return;
        }

        // Save only the current step's data
        localStorage.setItem(`step${currentStep}FormData`, JSON.stringify(formData));
        console.log(`Step ${currentStep} data saved:`, formData);

        // Move to the next step if there are more steps
        if (currentStep < totalSteps) {
            currentStep++;
            console.log(`Moving to step ${currentStep}`);
        } else {
            console.log("All steps completed!");
        }
    });
});
