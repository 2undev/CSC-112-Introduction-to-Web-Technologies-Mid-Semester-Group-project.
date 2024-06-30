// // alert('Welcome')



const users = [];

// Get references to the DOM elements
let signupBtn = document.getElementById('signupBtn');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let address = document.getElementById('address');
let password = document.getElementById('password');
let form = document.getElementById('form');

// Get references to the error message elements
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let addressError = document.getElementById('addressError');
let passwordError = document.getElementById('passwordError');


// Variable to display a general error message is any of the input fields is invalid
let topErrorMessage = document.getElementById('topErrorMessage');



// Add an event listener to the form's submit event
form.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent the form from submitting normally

  // Create a user object with the input field values
  let user = {
    fullName: fullName.value,
    email: email.value,
    address: address.value,
    password: password.value
  };

  // Variable to keep track of whether the form is valid or not
  let isValid = true;  

  // Clear previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  addressError.textContent = '';
  passwordError.textContent = '';
  topErrorMessage.textContent = '';

  // Validate each input field and set error messages if any field is invalid
  if (user.fullName.trim() === '') {
    nameError.textContent = 'Full name is required';
    isValid = false;
  }

  if (user.email.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  }

  if (user.address.trim() === '') {
    addressError.textContent = 'Address is required';
    isValid = false;
  }

  if (user.password.trim() === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  }

  // If any field is invalid, display a general error message
  if (!isValid) {
    topErrorMessage.textContent = 'All fields must not be empty';
    setTimeout(() => {
      topErrorMessage.textContent = '';
    }, 1000);
    
  } else {

    // Add the user to the users array if the form is valid
    users.push(user); 

    localStorage.setItem('users', JSON.stringify(users));
  }

  // Log the users array to the console
  console.log(users);  
});








// Login form configuration
let loginBtn = document.getElementById('loginBtn');

let loginForm = document.getElementById('loginForm');

loginForm.addEventListener('click', (event)=> {
  event.preventDefault();
  
  let formIsValid = true;

  

})



