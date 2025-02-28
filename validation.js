const userForm = document.getElementById("userForm");
const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    password: document.getElementById("password").value,
  };

  FormData.addEventListener("submit", (e) => {
    // e.preventDefault();
  let errors = [];
  if (userData){
    errors = getSignupFormErrors(name.value, email.value, country.value, password.value);
  }

  else {
    errors = getLoginFormErrors(email.value, password.value);
  })

  function getSignupFormErrors(name, email, country, password) {
    let errors = [];
    if (name === "") {
      errors.push("Name is required");
    }
    if (email === "") {
      errors.push("Email is required");
    }
    if (country === "") {
      errors.push("Country is required");
    }
    if (password === "") {
      errors.push("Password is required");
    }
    return errors;
  }