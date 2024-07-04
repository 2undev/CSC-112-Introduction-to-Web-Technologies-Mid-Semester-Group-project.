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
    localStorage.setItem('subscribers', JSON.stringify(subscribers))
    subscribeInput.value = ''
  }

  console.log(subscribers);
})


let date = new Date();
let currentYear = date.getFullYear()

document.getElementById('year').textContent = currentYear
// document.querySelectorAll('small:[.cardDate]').textContent = date.toDateString()

const cardDate = document.querySelectorAll('.cardDate')

cardDate.forEach(card => {
  card.textContent = date.toDateString()
})
