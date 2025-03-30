// Function to handle sign-up form submission
// const handleFormSubmit = (e) => {
    // e.preventDefault();
  
    const userDataStep1 = {
      title: document.getElementById("title").value,
    //   category: document.getElementById("category").value,
    //   roomtype: document.getElementById("roomtype").value,
    //   guestno: document.getElementById("guestno").value,
    //   city: document.getElementById("city").checked,
    //   neighborhood: document.getElementById("neighborhood").value,
    //   propertydesciption: document.getElementById("propertydesciption").value,
      
    };
  
    console.log("Step 1 Information:", userDataStep1);
  
    // Save the user to localStorage
    saveSteoToLocalStorage(step1Data);