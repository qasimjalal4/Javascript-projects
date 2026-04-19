const { createMemorySessionStorage } = require("react-router");

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
  let password = [];

  if(upperBox.checked) container += UPPER;
  if(lowerBox.checked) container += LOWER;
  if(numbersBox.checked) container += NUMBERS;
  if(symbolsBox.checked) container += SYMBOLS;


  
  if(upperBox.checked) {
    password.push(UPPER[Math.random() * UPPER.length]);
  }

  if(lowerBox.checked) {
    password.push(LOWER[Math.random() * LOWER.length]);
  }

  if(numbersBox.checked) {
    password.push(NUMBERS[Math.random() * NUMBERS.length]);
  }

  if(symbolsBox.checked) {
    password.push(SYMBOLS[Math.random() * SYMBOLS.length]);
  }



 

})