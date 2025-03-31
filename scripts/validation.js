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
      const formData = {
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        room_type: document.getElementById('room_type').value,
        guest_no: document.getElementById('guest_no').value,
        city: document.getElementById('city').value,
        neighborhood: document.getElementById('neighborhood').value,
        property_description: document.getElementById('property_description').value
      };
  
      // Save to localStorage
      localStorage.setItem('step1FormData', JSON.stringify(formData));
      
      console.log('Step 1 data saved:', formData);
    });
  });