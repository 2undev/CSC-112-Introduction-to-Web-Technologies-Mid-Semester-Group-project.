// alert('I dey work o')

let subscribeForm = document.getElementById('subscribeForm');
let subscribeInput = document.getElementById('subscribeInput');
let subscribeError = document.getElementById('subscribeError');


let subscribers = [];

subscribeForm.addEventListener('submit', (event)=>{
  event.preventDefault();

  let formIsValid = true;

  if (subscribeInput.value.trim() === '') {
    subscribeError.textContent = 'Please enter your email address';

    formIsValid = false

    setTimeout(() => {
      subscribeError.textContent = '';
    }, 2000);
   
  }else{
    subscribers.push(subscribeInput.value)
    subscribeInput.value = ''
  }

  console.log(subscribers);
})


let date = new Date();
let currentYear = date.getFullYear()
document.getElementById('year').textContent = currentYear
