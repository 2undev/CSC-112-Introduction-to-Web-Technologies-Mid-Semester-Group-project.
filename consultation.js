// alert('I dey work o')

const consultationForm = document.getElementById('consultationForm')

const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone_number = document.getElementById('phone_number')
const appointmentDate = document.getElementById('appointmentDate')
const select_consultation_type = document.getElementById('select_consultation_type')
const consultation_description = document.getElementById('consultation_description')
const paymentOptions = document.querySelectorAll('input[name="payment"]')

const button = document.getElementById('button')


const generalError = document.getElementById('generalError')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const phoneError = document.getElementById('phoneError')
const dateError = document.getElementById('dateError')
const consultationTypeError = document.getElementById('consultationTypeError')
const consultationDescriptionError = document.getElementById('consultationDescriptionError')
const paymentError = document.getElementById('paymentError')

const consultationAppointment = [];





const validateForm = () => {

// to keep track of when any of the option is selected
let selectedOption = false;

paymentOptions.forEach(option => {
  if (option.checked) {
    selectedOption = true
  }
});



  if (fullName.value && email.value && phone_number.value && appointmentDate.value && select_consultation_type.value && consultation_description.value && selectedOption) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

// Add event listeners to all input fields to validate the form on change
fullName.addEventListener('input', validateForm);
email.addEventListener('input', validateForm);
phone_number.addEventListener('input', validateForm);
appointmentDate.addEventListener('input', validateForm);
select_consultation_type.addEventListener('input', validateForm);
consultation_description.addEventListener('input', validateForm);
paymentOptions.forEach(option => option.addEventListener('change', validateForm));


// Manually trigger validation on page load to set initial state
// validateForm();



// Add event listener to the form
consultationForm.addEventListener('submit', (event)=> {
event.preventDefault();

let formIsValid = true;


let selectedOption = false

paymentOptions.forEach(option => {
  if (option.checked) {
    selectedOption = true
  }
})


let client = {
  fullName : fullName.value,
  email : email.value,
  phone_number : phone_number.value,
  appointmentDate : appointmentDate.value,
  select_consultation_type : select_consultation_type.value,
  consultation_description : consultation_description.value,
  paymentOptions : selectedOption ? document.querySelector('input[name="payment"]:checked').value : ''

}


  // Clear previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  dateError.textContent = '';
  consultationTypeError.textContent = '';
  consultationDescriptionError.textContent = '';
  generalError.textContent = '';
  paymentError.textContent = '';



if (client.fullName.trim() === "") {
nameError.textContent = 'Please enter your full name';
// console.log('Please enter your full name');

formIsValid = false;
}


if (client.email.trim() === "") {
  emailError.textContent = 'Please enter your email';

  formIsValid = false;
};

if (client.phone_number.trim() === "") {
  phoneError.textContent = 'Please enter your phone number';

  formIsValid = false;
};

if (client.appointmentDate.trim() === "") {
  dateError.textContent = 'Please enter your application date';

  formIsValid = false;
};

if (client.select_consultation_type.trim() === '') {
  consultationTypeError.textContent = ' please select your consultation type';

  formIsValid = false;
};

if (client.consultation_description.trim() === '') {
  consultationDescriptionError.textContent = 'Please enter consultation description';

  formIsValid = false;
};

if (client.paymentOptions === '') {
  paymentError.textContent = 'Please select your payment method';

  formIsValid = false;
}


if(!formIsValid) {
  generalError.textContent = 'All fields are required'


  setTimeout(()=>{
    generalError.textContent = ''
  }, 3000)

}else {

  let previousConsultationAppointment = JSON.parse(localStorage.getItem('consultationAppointment')) || [];

  previousConsultationAppointment.push(client)

  localStorage.setItem('consultationAppointment', JSON.stringify(previousConsultationAppointment))

  consultationForm.reset()
}

console.log(consultationAppointment);

})