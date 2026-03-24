const addButton = document.querySelector('.js-add-button');

const todoList = [{
  name: 'dinner',
  date: '20-02-23'
}, {
  name: 'shopping',
  date: '23-08-24'
}];


addButton.addEventListener('click', () => {
  addTodo();
})



function addTodo() {

  const inputEl = document.querySelector('.js-name-input');
  const dueDateEl = document.querySelector('.js-due-date-input');


  let name = inputEl.value;
  let date = dueDateEl.value;

  todoList.push({
    name,
    date
  })

  console.log(todoList);


}