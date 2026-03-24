const addButton = document.querySelector('.js-add-button');

const todoList = [{
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

  let todoListHTMl = '';

  todoList.forEach((todo) => {

    const {name,date} = todo;

    const html = `
    
     <div>${name}</div>
     <div>${date}</div>
     <button>Delete</button>
    `;

    todoListHTMl += html;

  })


  document.querySelector('.js-todo-list-grid').innerHTML = todoListHTMl;
}


function addTodo() {

  const inputEl = document.querySelector('.js-name-input');
  const dueDateEl = document.querySelector('.js-due-date-input');


  let name = inputEl.value;
  let date = dueDateEl.value;

  todoList.push({
    name,
    date
  })

  renderTodo();

  inputEl.value = '';

}