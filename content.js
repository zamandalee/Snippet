/*eslint no-undef: 0*/
const date = new Date().toDateString(); // day, not time
const factSnippet = document.getElementById('fact-snippet');
const hearts = document.getElementsByClassName('heart');

chrome.storage.sync.get([date, 'todos'], (ret) => {
  if (!ret[date]) {
    getDailySnippets();
  } else {
    const todayData = ret[date];

    document.body.style.backgroundImage = `url(${todayData['imageURL'].content})`;

    displayRiddleSnippet(todayData['riddle'].content);
    factSnippet.innerHTML = todayData['history'].content;
    renderVocabSnippet(todayData['vocab'].content);

    Array.from(hearts).forEach( heart => {
      if (todayData[heart.dataset.type].favorited) {
        heart.classList.add('favorited');
      }
    });

    const todos = Object.keys(ret['todos']);
    todos.forEach((todoString)=>{
      createTodoLi(todoString);
    });
  }
});

const hisTab = [document.getElementById('his-tab'), "history"];
const sciTab = [document.getElementById('sci-tab'), "science"];
const misTab = [document.getElementById('mis-tab'), "misc"];
const tilFooter = document.getElementsByClassName('til-footer')[0];
const heart = document.getElementById('heart');
const tabs = [hisTab, sciTab, misTab];
const til = document.getElementById('til');

const setFact = (type) => {
  chrome.storage.sync.get(date, (ret) => {
    const todayData = ret[date];
    factSnippet.innerHTML = todayData[type].content;

    heart.dataset.type = type;
    if (todayData[type].favorited) {
      heart.classList.add('favorited');
    } else {
      heart.classList.remove('favorited');
    }

    if (type === 'misc') {
      til.href = `https://reddit.com${todayData[type].url}`;
      tilFooter.classList.add('footer-border');
      til.classList.remove('hidden');
    } else {
      tilFooter.classList.remove('footer-border');
      til.classList.add('hidden');
    }
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
