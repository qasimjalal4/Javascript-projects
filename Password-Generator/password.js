const generateBtn = document.querySelector('.js-generate-button');
const passwordInput = document.querySelector('.js-password-input');
const passwordLength = document.querySelector('.password-length-input');
const upperBox = document.querySelector('#upper-box');
const lowerBox = document.querySelector('#lower-box');
const numbersBox = document.querySelector('#numbers-box');
const symbolsBox = document.querySelector('#symbols-box');


const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+{}[]<>?'; 


generateBtn.addEventListener('click', () => {

  let container = '';
  let password = '';

  if(upperBox.checked) {
    container += UPPER;
  }

  if(lowerBox.checked) {
    container += LOWER;
  }
  
  if(numbersBox.checked) {
    container += NUMBERS;
  }
  
  if(symbolsBox.checked) {
    container += SYMBOLS;
  }

  if(container === '') {
    alert('Please atleast select one box!');
    return;
  }

  
  let length = Number(passwordLength.value);

 while(password.length !== length) {

  let index =  Math.floor(Math.random() * container.length);

  password += container[index];
 }

 passwordInput.value = password;
  
 
  
})
