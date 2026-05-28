
const container = document.querySelector('.js-container');


let currentQuestionIndex = 0;

loadQuestion(currentQuestionIndex);

 


function loadQuestion(index) {

  let html = `
   <div class="question-number js-question-number">${currentQuestionIndex + 1}/5</div>
    <div class="question js-question">
      ${quizQuestions[index].question}
    </div>
     <div class="options-box">
      ${generateOptions(quizQuestions[index].option)}
    </div>

    <button class="next-button js-next-button">Next</button>
  `

  container.innerHTML = html;


  document.querySelector('.js-next-button').addEventListener('click', () => {

  currentQuestionIndex++;

  loadQuestion(currentQuestionIndex)

})
}


function generateOptions(options) {

  let optionsHtml = '';
   
options.forEach((optionEl) => {

     optionsHtml += `
     <div class="option js-option">${optionEl}</div>
   
   
  `;
   })


 return optionsHtml;  
}