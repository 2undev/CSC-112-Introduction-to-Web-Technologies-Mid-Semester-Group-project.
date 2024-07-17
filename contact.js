// alert('I dey work o')

let contactUsForm = document.getElementById("contactUsForm");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let organization = document.getElementById("organization");
let content = document.getElementById("content");

let generalError = document.getElementById("generalError");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneNumberError = document.getElementById("phoneNumberError");
let organizationError = document.getElementById("organizationError");
let contentError = document.getElementById("contentError");

let usersFeedback = [];

contactUsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let formIsValid = true;

  let feedback = {
    fullName: fullName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    organization: organization.value,
    content: content.value,
  };

   // Clear previous error messages
   nameError.textContent = '';
   emailError.textContent = '';
   phoneNumberError.textContent = '';
   organizationError.textContent = '';
   contentError.textContent = '';
   generalError.textContent = '';




  if (feedback.fullName === "") {
    nameError.textContent = " Please enter your name";

    formIsValid = false;
  }

  if (feedback.email === "") {
    emailError.textContent = " Please enter your email";

    formIsValid = false;
  }

  if (feedback.phoneNumber === "") {
    phoneNumberError.textContent = " Please enter your phone number";

    formIsValid = false;
  }

  if (feedback.organization === "") {
    organizationError.textContent = " Please enter your organization";

    formIsValid = false;
  }

  if (feedback.content === "") {
    contentError.textContent = " Please enter your content";
  }

  if (!formIsValid) {
    generalError.textContent = "All fields must not be empty";

    setTimeout(() => {
      generalError.textContent = "";
    }, 3000);
  } else {

    let existingFeedback = JSON.parse(localStorage.getItem('usersFeedback')) || [];

    existingFeedback.push(feedback);
    localStorage.setItem('usersFeedback', JSON.stringify(existingFeedback));

    contactUsForm.reset()
  }

  console.log(usersFeedback);
});


let goBack = document.getElementById('goBack');


// function to go back to previous page
goBack.addEventListener('click', function(){
  // alert('i dey work o')
  window.history.back()
})