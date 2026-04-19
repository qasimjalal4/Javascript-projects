
const generateBtn = document.querySelector('.js-generate-button');
const passwordInput = document.querySelector('.js-password-input');
const passwordLength = document.querySelector('.password-length-input');
const upperBox = document.querySelector('#upper-box');
const lowerBox = document.querySelector('#lower-box');
const numbersBox = document.querySelector('#numbers-box');
const symbolsBox = document.querySelector('#symbols-box');
const copyBtn = document.querySelector('.copy-button')

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+{}[]<>?'; 

function shuffle(array) {
  for(let i = array.length - 1; i < 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
 
    [array[i],array[j]] = [array[j],array[i]];

  }

  return array;
}

 
generateBtn.addEventListener('click', () => {

  let container = '';
  let password = [];

  if(upperBox.checked) container += UPPER;
  if(lowerBox.checked) container += LOWER;
  if(numbersBox.checked) container += NUMBERS;
  if(symbolsBox.checked) container += SYMBOLS;

  
    if(container === '') {
      alert("Please select atleast one box!");
      return;
    }

    let length = Number(passwordLength.value);

    if(length <= 0) {
      alert("Length must be greater than zero.");
      return;
    }
 

    if(length > 10) {
      alert("Length must be less than 10");
      return;
    }
 
  

  if(upperBox.checked) {
    password.push(UPPER[Math.floor(Math.random() * UPPER.length)]);
  }

  if(lowerBox.checked) {
    password.push(LOWER[Math.floor(Math.random() * LOWER.length)]);
  }

  if(numbersBox.checked) {
    password.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
  }

  if(symbolsBox.checked) {
    password.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
  }


  
    if(length < password.length) {
      alert("Length is too small compared to selected boxes");
      return;
    }
 
  

  while(password.length < length) {
 
    let index = Math.floor(Math.random() * container.length);
    password.push(container[index]);
    
  }

   shuffle(password);




   passwordInput.value = password.join(''); 

})



copyBtn.addEventListener('click', () => {
  if (passwordInput.value === '') return;

  navigator.clipboard.writeText(passwordInput.value)
    .then(() => {
      copyBtn.innerText = 'Copied';
      setTimeout(() => {
        copyBtn.innerText = 'Copy';
      }, 2000);
    })
    .catch(() => {
      alert('Failed to copy');
    });
});