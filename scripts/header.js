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

  

  // if user login, account show; login button hide.
  // else login button show; account hide.
  $(document).ready(function(){


    //By default account div will be hidden
    // And login will be shown
    $(".btn .btn-primary").hide();

    // if login clicked
    // and login successful
    // store a session
    $(".login").click(function(){

        // Store a session key
        // in this case, i have saved a random number
        // you can store something unique
        sessionStorage.setItem("session_key", Math.random());

        // Then hide the login button
        // And show account
        $(".login").hide();
        $(".btn .btn-primary").show();

    });

    // Now check if session already exists
    // If session exists, show account div
    // and hide login div
    if (sessionStorage.getItem('session_key') !== null){
        $(".login").hide();
        $(".btn .btn-primary").show();
    } 
    // If session doesn't exist
    // Show login div
    // And hide account div
    else {
        $(".login").show();
        $(".btn .btn-primary").hide();
    }
  }
  );
  // Add event listener to the login button