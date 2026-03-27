const quoteText = document.querySelector('.js-quote-text');
const authorName = document.querySelector('.author-name');
const quoteBtn = document.querySelector('.js-quote-button');

let prevIndex = -1;

quoteBtn.addEventListener('click', () => {
 
  const randomQuote = getRandomQuote();

  quoteText.innerText = randomQuote.text;
  authorName.innerText = randomQuote.author;

  
})


function getRandomQuote() {

   

  let randomIndex = Math.floor(Math.random() * quotes.length);

 while (randomIndex === prevIndex) {

  randomIndex = Math.floor(Math.random() * quotes.length);
  
 }
  
 prevIndex = randomIndex;

 return  quotes[randomIndex]; 

   
}


 