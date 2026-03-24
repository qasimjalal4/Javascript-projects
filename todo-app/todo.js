const addButton = document.querySelector('.js-add-button');

let todoList = JSON.parse(localStorage.getItem('todoList')) ||  [{
  name: 'dinner',
  date: '20-02-23'
}, {
  name: 'shopping',
  date: '23-08-24'
}];

renderTodo();

addButton.addEventListener('click', () => {
  addTodo();
})

function renderTodo() {

  let todoListHTML = '';

  todoList.forEach((todo,index) => {

    const {name,date} = todo;

    const html = `
    
     <div>${name}</div>
     <div>${date}</div>
     <button class="delete-button js-delete-button">Delete</button>
    `;

    todoListHTML += html;

  })

  
  
  document.querySelector('.js-todo-list-grid').innerHTML = todoListHTML;

   
 document.querySelectorAll('.js-delete-button').
  forEach((deleteBtn,index) => {
    deleteBtn.addEventListener('click', () => {
      todoList.splice(index,1);
      renderTodo();
      saveToStorage();
    })
  })   
}
 


function addTodo() {

  const inputEl = document.querySelector('.js-name-input');
  const dueDateEl = document.querySelector('.js-due-date-input');


  let name = inputEl.value;
  let date = dueDateEl.value;

  if(name === '' || date === '') {
    alert('Inputs cant be empty bacha!');
    return;
  }

  todoList.push({
    name,
    date
  })

  renderTodo();

   

  inputEl.value = '';

  saveToStorage();
}


function saveToStorage() {
  localStorage.setItem('todoList',JSON.stringify(todoList));
}