const dialog = document.getElementById("lgn");
const wrapper = document.querySelector(".wrapper");
const userForm = document.getElementById("userForm");

const showLoginDialog = (show) => (show ? dialog.showModal() : dialog.close());

const closeDialogOnOutsideClick = (e) => {
  if (!wrapper.contains(e.target)) {
    dialog.close();
  }
};

dialog.addEventListener("click", closeDialogOnOutsideClick);

const saveUserToLocalStorage = (userData) => {
  // checking in local storage to see if we've stored any users
  const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    const userExists = users.some((user) => user.email === userData.email);
    if (userExists) {
      alert("User with this email already exists!");
      return; // Stop the function if the user exists
    }
  // the users array will contain all of the users we've stored, or nothing
  // push will push the userData we are passing in, into that array
  users.push(userData);

  //   then we are setting users in local storage, but making sure we convert it back to a string
    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("User registered successfully!");
};

const logStoredUsers = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log("Stored Users:", users);
  
};

const handleFormSubmit = (e) => {
  // this will prevent the page from reloading
  e.preventDefault();

  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    password: document.getElementById("password").value,
    
  };

  console.log("User Input:", userData);

  // save the user to local storage
  saveUserToLocalStorage(userData);

  // alert(
  //   "Thank you for submitting your information!\n\nName: " +
  //     userData.name +
  //     "\nEmail: " +
  //     userData.email +
  //     "\nCountry: " +
  //     userData.country
  // );

  userForm.reset();
};

userForm.addEventListener("submit", handleFormSubmit);

/////////////////////////////////////////////////////////////////////////////////////

const countries = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Guatemala",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Lebanon",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Malta",
  "Mexico",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Senegal",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const populateCountrySelect = (selectId, countryList) => {
  const selectElement = document.getElementById(selectId);
  if (!selectElement) return;

  countryList.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    selectElement.appendChild(option);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  populateCountrySelect("country", countries);
  logStoredUsers();
});
/////////////////////////////////////////////////////////////////////////////////////
// Function to check user credentials (login)
const checkUserCredentials = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  return user; // Returns the user object if found, otherwise undefined
};


// Function to handle login form submission
const handleLogin = (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = checkUserCredentials(email, password);

  if (user) {
    alert("You are signed in!");
    console.log("Signed in user:", user);
  } else {
    alert("Invalid email or password.");
  }
};
// Add event listener for login form submission
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

document.addEventListener("DOMContentLoaded", () => {
  populateCountrySelect("country", countries);
  logStoredUsers();
});



