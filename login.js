// alert('hello world')

let loginBtn = document.getElementById("loginBtn");
let loginForm = document.getElementById("loginForm");

let loginEmailError = document.getElementById("loginEmailError");
let loginPasswordError = document.getElementById("loginPasswordError");
let loginTopErrorMessage = document.getElementById("loginTopErrorMessage");

loginEmailError.textContent = "";
loginPasswordError.textContent = "";
loginTopErrorMessage.textContent = "";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  let formIsValid = true;

  if (loginEmail === "") {
    loginEmailError.textContent =
      "Please enter a valid email, email can not be empty";
    formIsValid = false;
  } else {
    loginEmailError.textContent = "";
  }

  if (loginPassword === "") {
    loginPasswordError.textContent =
      "Please enter your password, password can not be empty";
    formIsValid = false;
  } else {
    loginPasswordError.textContent = "";
  }

  if (!formIsValid) {
    loginTopErrorMessage.textContent = "All input fields must be filled";

    setTimeout(() => {
      loginTopErrorMessage.textContent = "";
    }, 2000);
  } else {
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    let confirmedUser = existingUsers.find((user) => {
      return user.email === loginEmail && user.password === loginPassword;
    });

    if (confirmedUser) {
      // save the logged in user details to session storage

      // sessionStorage.setItem("user", JSON.stringify(confirmedUser));
      // let user = JSON.parse(sessionStorage.getItem("user"));
      // if (user) {
      //   let loggedInUser = document.getElementById("loggedInUser");

      //   loggedInUser.textContent = user.fullName;
      // }

      window.location.href = "landing-page.html";
    } else {
      loginTopErrorMessage.textContent =
        "Invalid email or password, check your email and password then try again";

      setTimeout(() => {
        loginTopErrorMessage.textContent = "";
      }, 2000);
    }
  }
});
