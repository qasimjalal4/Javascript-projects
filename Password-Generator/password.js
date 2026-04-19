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

 
generateBtn.addEventListener('click', () => {

  let container = '';

  if(upperBox.checked) container += UPPER;
  if(lowerBox.checked) container += LOWER;
  if(numbersBox.checked) container += NUMBERS;
  if(symbolsBox.checked) container += SYMBOLS;

  
})