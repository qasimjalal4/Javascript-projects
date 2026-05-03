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


function renderExpense() {
  
}


function addExpense() {
  let item = itemBox.value;
  let category = expenseCategorySelector.value;
  let price = Number(amountBox.value);
  let date = dateInputEl.value;


  expenseList.push({
    item,
    category,
    price,
    date
  })


  itemBox.value = '';
  expenseCategorySelector.value = '';
  amountBox.value = '';
  dateInputEl.value = '';
}

addBtn.addEventListener('click', () => {
     addExpense();
})