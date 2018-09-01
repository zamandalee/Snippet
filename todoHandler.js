const todoOpener = document.getElementById('todo-toggle-button');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');
const todoDisplay = document.getElementsByClassName('todo-display')[0];

todoOpener.addEventListener('click', () => {
  if (todoDisplay.classList.value.includes('translate-left')) {
    todoDisplay.classList.remove('translate-left');
    todoDisplay.classList.add('translate-right');
  } else {
    todoDisplay.classList.add('translate-left');
    todoDisplay.classList.remove('translate-right');
  }
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  const newTodoLi = document.createElement('li');
  newTodoLi.innerHTML = `<button>${newTodo}</button>`;
  todoUl.appendChild(newTodoLi);

  todoForm.reset();
  chrome.storage.sync.get('todos', (ret) => {
    const currentTodos = ret['todos'];
    currentTodos.push(newTodo);
    chrome.storage.sync.set({todos: currentTodos});
  });
});
