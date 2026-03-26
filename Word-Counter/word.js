const charCount = document.querySelector('.char-count');
const wordCount  = document.querySelector('.word-count');
const maxWord =  document.querySelector('.longest-word');
const textBox = document.querySelector('.text-box');



textBox.addEventListener('input', () => {

  let chars = textBox.value;

  let words = chars.split(" ").filter(word => word !== '');

  let longestWord = '';
 
  for(let word of words) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  }


  charCount.innerHTML = chars.length;
  wordCount.innerHTML = words.length;
  maxWord.innerHTML = longestWord;
})





 