const container = document.querySelector(".js-container");
const scoreContainer = document.querySelector('.score-container');
const restartButton = document.querySelector('.restart-button');
const final_score = document.querySelector('.final-score');
 

let currentQuestionIndex = 0;
let score = 0;


loadQuestion(currentQuestionIndex);
 

restartButton.addEventListener('click', () => {

  scoreContainer.style.display = 'none';
  container.style.display = 'flex';
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion(currentQuestionIndex);
  
})

function loadQuestion(index) {
  let html = `
     <div class="question-header">
      <div class="question-number js-question-number">
        ${currentQuestionIndex + 1}/5
      </div>
      <div class="score">
        Score: ${score}
      </div>
     </div>
    <div class="question js-question">
      ${quizQuestions[index].question}
    </div>
     <div class="options-box">
      ${generateOptions(quizQuestions[index].option)}
    </div>

    <button class="next-button js-next-button">Next</button>
  `;

  container.innerHTML = html;

  document.querySelector('.js-next-button').disabled = true;

  const optionElements = document.querySelectorAll('.js-option');

  optionElements.forEach((optionEl,i) => {
    optionEl.addEventListener('click', () => {

      disableOptions()

      const correctIndex = quizQuestions[currentQuestionIndex].correctAnswerIndex;

      if(i === correctIndex) {
        score++;
       document.querySelector('.score').innerHTML = `Score: ${score}`;

        optionElements[i].style.backgroundColor = 'green';
        optionElements[i].style.color = 'white';
        optionElements[i].style.border = 'none';
      } else {
        optionElements[i].style.backgroundColor = 'red';
        optionElements[i].style.color = 'white';
        optionElements[i].style.border = 'none'

        setTimeout(() => {
          optionElements[correctIndex].style.backgroundColor = 'green';
          optionElements[correctIndex].style.color = 'white';
          optionElements[correctIndex].style.border = 'none'
        }, 1500)
      }
 
       document.querySelector('.js-next-button').disabled = false;  
       
    })

    
  })

   function disableOptions() {
        
        const optionElements = document.querySelectorAll('.js-option');

        optionElements.forEach((optionEl) => {
         optionEl.disabled = true;
        })
      }


  document.querySelector(".js-next-button").addEventListener("click", () => {
    currentQuestionIndex++;

    if(currentQuestionIndex > quizQuestions.length - 1) {
  
    scoreContainer.style.display = 'flex';
    container.style.display = 'none';
    final_score.innerHTML = `You scored ${score} out of ${quizQuestions.length}`     
} else {

    loadQuestion(currentQuestionIndex);
}
  });
}

function generateOptions(options) {
  let optionsHtml = "";

  options.forEach((optionEl) => {
    optionsHtml += `
     <button class="option js-option">${optionEl}</button>
   
   
  `;
  });

  return optionsHtml;
}
