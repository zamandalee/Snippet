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

const createTrashButton = (text, li) => {
  const trashButton = document.createElement('button');
  trashButton.classList.add('trash');
  trashButton.innerHTML = "&#10005;";

  trashButton.addEventListener('click', ()=>{
    chrome.storage.sync.get('todos', (ret) => {
      const currentTodos = ret['todos'];
      delete currentTodos[text];
      todoUl.removeChild(li);
      chrome.storage.sync.set({todos: currentTodos});
    });
  });
  return trashButton;
};


const createTodoLi = (text) => {
  const newTodoLi = document.createElement('li');
  const newButton = document.createElement('button');
  const trashButton = createTrashButton(text, newTodoLi);

  chrome.storage.sync.get('todos', (initialSyncRet) => {
    const initialCurrentTodos = initialSyncRet['todos'];
    if (initialCurrentTodos[text]) {
      newButton.innerHTML = `<strike>${text}</strike>`;
    } else {
      newButton.innerHTML = text;
    }
    newTodoLi.appendChild(newButton);
    newTodoLi.appendChild(trashButton);
    todoUl.appendChild(newTodoLi);
    newButton.addEventListener('click', () => {
      chrome.storage.sync.get('todos', (ret) => {
        const currentTodos = ret['todos'];
        currentTodos[text] = !currentTodos[text];
        if (currentTodos[text]) {
          newButton.innerHTML = `<strike>${text}</strike>`;
        } else {
          newButton.innerHTML = text;
        }
        chrome.storage.sync.set({todos: currentTodos});
      });
    });
  });
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value;

  todoForm.reset();
  chrome.storage.sync.get('todos', (ret) => {
    const currentTodos = ret['todos'];
    currentTodos[text] = false;
    chrome.storage.sync.set({todos: currentTodos}, () => {
      createTodoLi(text);
    });
  });
});
