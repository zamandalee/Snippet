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

const createTodoLi = (text) => {
  const newTodoLi = document.createElement('li');
  const newButton = document.createElement('button');
  newButton.innerHTML = text;
  newTodoLi.appendChild(newButton);
  todoUl.appendChild(newTodoLi);
  newButton.addEventListener('click', () => {
    chrome.storage.sync.get('todos', (ret) => {
      const currentTodos = ret['todos'];
      currentTodos[text] = true;
      chrome.storage.sync.set({todos: currentTodos});
    });
  });
  // TODO hook button to strikeout
  // TODO make trash can
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value;
  createTodoLi(text);

  todoForm.reset();
  chrome.storage.sync.get('todos', (ret) => {
    const currentTodos = ret['todos'];
    currentTodos[text] = false;
    chrome.storage.sync.set({todos: currentTodos});
  });
});
