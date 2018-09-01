/*eslint no-undef: 0*/
const date = new Date().toDateString(); // day, not time
const factSnippet = document.getElementById('fact-snippet');
// const hearts = document

chrome.storage.sync.get([date, 'todos'], (ret) => {
  if (!ret[date]) {
    getDailySnippets();
  } else {
    const todayData = ret[date];

    document.body.style.backgroundImage = `url(${todayData['imageURL'].content})`;

    displayRiddleSnippet(todayData['riddle'].content);
    factSnippet.innerHTML = todayData['history'].content;
    renderVocabSnippet(todayData['vocab'].content);



    const todos = Object.keys(ret['todos']);
    console.log(todos);
    todos.forEach((todoString) => {
      createTodoLi(todoString);
    });
  }
});

const hisTab = [document.getElementById('his-tab'), "history"];
const sciTab = [document.getElementById('sci-tab'), "science"];
const misTab = [document.getElementById('mis-tab'), "misc"];
const tabs = [hisTab, sciTab, misTab];

const setFact = (type) => {
  chrome.storage.sync.get(date, (ret) => {
    const todayData = ret[date];
    factSnippet.innerHTML = todayData[type].content;
  });
};

const selectTab = (tab, factName) => {
  const selectedTab = document.getElementsByClassName('selected-tab')[0];
  selectedTab.classList.remove('selected-tab');
  tab.classList.add('selected-tab');
  setFact(factName);
};

tabs.forEach((tabInfo) => {
  tabInfo[0].addEventListener('click', () => {
    selectTab(tabInfo[0], tabInfo[1]);
  });
});
