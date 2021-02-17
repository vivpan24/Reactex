const todo_form = document.querySelector('.todo_form');
const todo_input = document.querySelector('.todo_input');
const todo_items = document.querySelector('.todo_items');

let todos = [];

todo_form.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(todo_input.value);
});

