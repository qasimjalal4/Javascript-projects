const container = document.querySelector(".js-container");
const scoreContainer = document.querySelector('.score-container');


let currentQuestionIndex = 0;

 
loadQuestion(currentQuestionIndex);
 

function loadQuestion(index) {
  let html = `
     <div class="question-header">
      <div class="question-number js-question-number">
        ${currentQuestionIndex + 1}/5
      </div>
      <div class="score">
        Score: 0
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

  document.querySelector(".js-next-button").addEventListener("click", () => {
    currentQuestionIndex++;

    if(currentQuestionIndex > quizQuestions.length - 1) {
  
    scoreContainer.style.display = 'flex';
    container.style.display = 'none';
     
} else {

    loadQuestion(currentQuestionIndex);
}
  });
}

function generateOptions(options) {
  let optionsHtml = "";

  options.forEach((optionEl) => {
    optionsHtml += `
     <div class="option js-option">${optionEl}</div>
   
   
  `;
  });

  return optionsHtml;
}
