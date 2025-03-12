document.addEventListener("DOMContentLoaded", function () {
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
            <button style="background-color: #57bec3" class="btn btn-primary">
              <a href="add-listing.html">Submit Property</a>
            </button>
          </div>
        </nav>
        <h1 class="main-name main-name-large">Online Venue Booking</h1>
      </header>
    `;
  });