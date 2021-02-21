const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let id = 0;

class Todo {
  constructor() {
    this.id = id++;
    this.text = this.getText();
    this.check = false;
  }
  getText() {
    return prompt('Enter a todo task:');
  }
}

let todos = [];

if(todos.length != 0){
  render();
}

//<li>
//  <input type="checkbox">
//  <button>delete</button>
//  <span>text</span>
//</li>

function newTodo() {
  //get text
  //createTodo()
  const todo = new Todo();
  todos.push(todo);
  render();
}

function render() {
  list.innerHTML = '';
  todos.map(renderTodo).forEach(todo => list.appendChild(todo));
  //updates counts
  itemCountSpan.textContent = todos.length;
  uncheckedCountSpan.textContent = todos.filter(todo => !todo.check).length;
}

function deleteTodo(id) {
  //find the todo to delete
  //delete
  todos = todos.filter(todo => todo.id !== id);
  render();
}

function renderTodo(todo) {
  //create li
  //create input checkbox
  //create button
  //create span
  const li = document.createElement('li');
  li.innerHTML = `
  <input type="checkbox" onchange="changeTodo(${todo.id})" ${todo.check ? "checked" : ""}>
  <button onClick="deleteTodo(${todo.id})">delete</button>
  <span class="todo-text">${todo.text}</span>
  `
  return li;
}

function changeTodo(id){
  todos = todos.map(todo => todo.id == id ? {...todo, check: !todo.check} : todo);
  uncheckedCountSpan.textContent = todos.filter(todo => !todo.check).length;
}