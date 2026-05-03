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

let categoryColor = {
  Food: 'red',
  Entertainment: 'purple',
  Bills: 'blue',
  Shopping: 'darkorchid',
  Other: 'grey'
}




addBtn.addEventListener('click', () => {
     addExpense();
})

renderExpense();


function renderExpense() {

  let expenseHTML = '';

  let total = 0;
  let most_exp_item = expenses[0];      
  


  expenses.forEach((expense,index) => {
   
     total += expense.price;
     
     if(expense.price > most_exp_item.price) {
      most_exp_item = expense;
     }

    const {item,category,price,date} = expense;

    let color = categoryColor[category];

    let html = `
      <div class="expense-details">
       <div class="expense-container1">
        <span>${item}</span>
        <span class="item-category" style="
         background-color: ${color}
        ">${category}</span>
       </div>
       <div class="expense-container2">
        <span class="price">Rs.${price}</span>
        <span class="date">${date}</span>
       </div>
       <div class="buttons-container">
        <button class="edit-button">
         <img src="./icons/edit.png" >
        </button>
        <button class="delete-button">
         <img src="./icons/delete.png" >
        </button>
       </div>
       </div>
    `;

    expenseHTML += html;

  })

  document.querySelector('.expense-grid').innerHTML = expenseHTML;


  document.querySelectorAll('.delete-button').
   forEach((deleteBtn,index) => {
    deleteBtn.addEventListener('click', () => {
     expenses.splice(index,1)
     renderExpense();
    })
   })

  document.querySelectorAll('.edit-button').
   forEach((editBtn,index) => {
    editBtn.addEventListener('click', () => {
      if(itemBox.value !== '') {
        expenses[index].item = itemBox.value;
      } 
      
      if(expenseCategorySelector.value !== '') {
        expenses[index].category = expenseCategorySelector.value;
      }

      if(amountBox.value !== '') {
        expenses[index].price = amountBox.value;
      }

      if(dateInputEl.value !== '') {
        expenses[index].date = dateInputEl.value;
      }

      renderExpense();
    })

   })
   
   
   totalAmount.innerHTML = total;
   totalQuantity.innerHTML = expenses.length;
   highestExpense.innerHTML = `${most_exp_item.item}(Rs.${most_exp_item.price})`
}

 

function addExpense() {
  let item = itemBox.value;
  let category = expenseCategorySelector.value;
  let price = Number(amountBox.value);
  let date = dateInputEl.value;

  if(!item || !category || !price || !date) {
    alert('Please fill all the fields!');
    return;
  }

  expenses.push({
    item,
    category,
    price,
    date
  })


  itemBox.value = '';
  expenseCategorySelector.selectedIndex = 0;
  amountBox.value = '';
  dateInputEl.value = '';


  renderExpense();
}

 