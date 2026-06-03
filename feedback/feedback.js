const container = document.querySelector('.container');
const reviewBtn = document.querySelector('.review-button');


let selectedRating = '';

function feedbackSelector(selector,value) {

  const ratingElement = document.querySelector(selector);

  previousSelectorRemove();

  ratingElement.classList.add('active');

  selectedRating = value;
}




function previousSelectorRemove() {
  const previseRatingElement = document.querySelector('.active');

  if(previseRatingElement) {
    previseRatingElement.classList.remove('active');
  }
}



document.querySelector('.neutral-box').
 addEventListener('click', () => {
  feedbackSelector('.neutral-box','Neutral')
 })

document.querySelector('.unhappy-box').
 addEventListener('click', () => {
  feedbackSelector('.unhappy-box','Unhappy')
 })

document.querySelector('.satisfied-box').
 addEventListener('click', () => {
  feedbackSelector('.satisfied-box','Satisfied')
 })


reviewBtn.addEventListener('click', () => {
  if(selectedRating === '') {
    alert('Please select the rating!');
  } else {
    container.innerHTML = `
     <div class='feedback-answer-container'>
      <h2>Thank You!</h2>
      <p>Feedback: <span class="feedback-value">${selectedRating}</span></p>
      <p>We'll use your service to improve our customer support</p>
     </div> 
    `
  }
})