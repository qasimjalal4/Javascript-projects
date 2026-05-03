const itemBox = document.querySelector('.item-box');
const amountBox = document.querySelector('.amount-box');
const dateInputEl = document.querySelector('.input-date');
const expenseCategorySelector =  document.querySelector('.expense-category');
const addBtn = document.querySelector('.add-button');
const totalAmount = document.querySelector('#total-amount')
const totalQuantity = document.querySelector('#total-quantity');
const highestExpense = document.querySelector('#highest-expense');


let expenses = [
  {
    item: 'Lunch',
    category: 'Food',
    price: 250,
    date: '2026-06-10'
  }
]


addBtn.addEventListener('click', () => {
     addExpense();
})

renderExpense();


function renderExpense() {

  let expenseHTML = '';

  
  expenses.forEach((expense) => {
    const {item,category,price,date} = expense;

    let html = `
      <div class="expense-details">
       <div class="expense-container1">
        <span>${item}</span>
        <span class="item-category">${category}</span>
       </div>
       <div class="expense-container2">
        <span class="price">Rs.${price}</span>
        <span class="date">${date}</span>
       </div>
       <div class="buttons-container">
        <button>Edit</button>
        <button>Delete</button>
       </div>
       </div>
    `;

    expenseHTML += html;

  })

  document.querySelector('.expense-grid').innerHTML = expenseHTML;

}


function addExpense() {
  let item = itemBox.value;
  let category = expenseCategorySelector.value;
  let price = Number(amountBox.value);
  let date = dateInputEl.value;


  expenses.push({
    item,
    category,
    price,
    date
  })


  itemBox.value = '';
  expenseCategorySelector.value = '';
  amountBox.value = '';
  dateInputEl.value = '';


  renderExpense();
}

 