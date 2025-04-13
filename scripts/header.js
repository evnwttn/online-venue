document.addEventListener("DOMContentLoaded", function () {
  // Inject header HTML
  document.getElementById("header-container").innerHTML = `
    <header class="mainheader">
      <nav class="nav main-nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="find-a-space.html">Find Space</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="header-buttons">
          <button class="login" id="logbtn" type="submit" onclick="showLoginDialog(true, 'signup')">
            Login / Sign Up
          </button>
          <button id="submitPropertyBtn" style="background-color: #57bec3; display: none;" class="btn btn-primary">
            <a href="add-listing.html">Submit Property</a>
          </button>
          <button class="login" id="logoutbtn" type="submit" onclick="showLoginDialog(false, 'signout')">
            Logout
          </button>
        </div>
      </nav>
      <h1 class="main-name main-name-large">Online Venue Booking</h1>
    </header>
  `;

  // Function to update UI
  function updateUI() {
      var currentUser = localStorage.getItem("currentUser");
      var submitBtn = document.getElementById("submitPropertyBtn");

      if (currentUser) {
          submitBtn.style.display = "inline-block"; // Show button if user is logged in
      } else {
          submitBtn.style.display = "none"; // Hide button if not logged in
      }
  }

  // Run updateUI on page load
  updateUI();

  
  window.onUserLogin = function (user) {
      localStorage.setItem("currentUser", JSON.stringify(user)); // Store user
      updateUI(); // Update UI immediately
  };
});
