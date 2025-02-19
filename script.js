// const dialog = document.getElementById('lgn');
// dialog.showModal();
// I just commented out the code that was there, you might still need this

const dialog = document.getElementById("lgn");
const wrapper = document.querySelector(".wrapper");

// <!--console log-->

const showLoginDialog = (show) => (show ? dialog.showModal() : dialog.close());

dialog.addEventListener(
  "click",
  (e) => !wrapper.contains(e.target) && dialog.close()
);
console.log();
// <!--console-log-->
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let password = document.getElementById("password").value;

    console.log("User Input:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Country:", country);
    console.log("Password:", password);

    document.getElementById("userForm").reset(); //reset the form
    document
      .getElementById("userForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let country = document.getElementById("country").value;
        let password = document.getElementById("password").value;

        console.log("User Input:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Country:", country);
        console.log("Password:", password);

        alert(
          "Thank you for submitting your information!\n\nName: " +
            name +
            "\nEmail: " +
            email +
            "\nCountry: " +
            country
        );
      });
    // <!--console.log-->
  });
// <!--console-log-->

