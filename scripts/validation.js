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
  document.addEventListener('DOMContentLoaded', initValidation);

  document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('NextBtn');
    
    nextBtn.addEventListener('click', function() {
      // Get all form values from Step 1
      const formData1 = {
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        room_type: document.getElementById('room_type').value,
        guest_no: document.getElementById('guest_no').value,
        city: document.getElementById('city').value,
        neighborhood: document.getElementById('neighborhood').value,
        property_description: document.getElementById('property_description').value
      };
      localStorage.setItem('step1FormData1', JSON.stringify(formData1));
      console.log('Step 1 data saved:', formData1);

        // Get all form values from Step 2
        const formData2 = {
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
      // Save to localStorage
      localStorage.setItem('step1FormData3', JSON.stringify(formData2));

      console.log('Step 3 data saved:', formData2);

              // Get all form values from Step 3
              const formData3 = {
                images: document.getElementById('images').value,
                second_category: document.getElementById('second-category').value,
                virtual_tour: document.getElementById('virtual-tour').value
                
              };
          // Save to localStorage
          localStorage.setItem('step1FormData3', JSON.stringify(formData3));
    
          console.log('Step 3 data saved:', formData3);
    });
  });