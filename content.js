/*eslint no-undef: 0*/
const date = new Date().toDateString();
const factSnippet = document.getElementById('fact-snippet');

chrome.storage.sync.get(date, (ret)=>{
  if (!ret[date]) {
    getDailySnippets();
  } else {
    const todayData = ret[date];
    document.body.style.backgroundImage = `url(${todayData['imageURL']})`;
    displayRiddleSnippet(todayData['riddle']);
    factSnippet.innerHTML = todayData['history'];
    renderVocabSnippet(todayData['vocab']);
  }
});

const hisTab = [document.getElementById('his-tab'), "history"];
const sciTab = [document.getElementById('sci-tab'), "science"];
const misTab = [document.getElementById('mis-tab'), "misc"];
const tabs = [hisTab, sciTab, misTab];

const setFact = (type) => {
  chrome.storage.sync.get(date, (ret)=>{
    const todayData = ret[date];
    factSnippet.innerHTML = todayData[type];
  });
};

const selectTab = (tab, factName) => {
  const selectedTab = document.getElementsByClassName('selected-tab')[0];
  selectedTab.classList.remove('selected-tab');
  tab.classList.add('selected-tab');
  setFact(factName);
};

tabs.forEach((tabInfo)=>{
  tabInfo[0].addEventListener('click', ()=>{
    selectTab(tabInfo[0], tabInfo[1]);
  });
});
