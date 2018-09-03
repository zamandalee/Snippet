/*eslint no-undef: 0*/

const favoriteButton = document.getElementById('favorites');
const modal = document.getElementsByClassName('black-modal')[0];
const modalX = document.getElementById('black-modal-x');

// open history modal
favoriteButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    renderContent('fact');
});

// exit history modal
modalX.addEventListener('click', () => {
  //make fact the default selected tab again
  const selectedTab = document.getElementsByClassName('history-selected-tab')[0];
  selectedTab.classList.remove('history-selected-tab');
  document.getElementById("fact-tab").classList.add('history-selected-tab');

  modal.classList.add('hidden');
});

// get content from chrome storage
function getContent(category, callback) {
  let categoryContent = [];

  chrome.storage.sync.get(null, items => {
    const allKeys = Object.keys(items);

    for (let i = 0; i < allKeys.length; i++) {
      if ( String(allKeys[i]) !== 'preferences' && String(allKeys[i]) !== 'todos' ) {
        const todayData = items[ allKeys[i] ];

        switch( category ) {
          case 'fact':
            categoryContent.push(['history', todayData['history']]);
            categoryContent.push(['science', todayData['science']]);
            categoryContent.push(['misc', todayData['misc']]);
            break;
          case 'riddle':
            categoryContent.push(['riddle', todayData['riddle']]);
            break;
          case 'vocab':
            categoryContent.push(['vocab', todayData['vocab']]);
            break;
          case 'favorites':
            const favorites = getFavorites(todayData);
            if (favorites.length > 0) {
              categoryContent.push(...favorites);
            }
        }
      }
    }
    callback(categoryContent);
  });
}

function getFavorites(todayData) {
  let favorites = [];

  // to iterate through todayData obj
  for (let category in todayData) {
    if (todayData[category].favorited) {
      favorites.push([category, todayData[category]]);
    }
  }

  return favorites;
}

function renderContent(category) {
  getContent(category, (content) => {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    // render each item in history list
    for (let i = 0; i < content.length; i++) {
      const categoryPair = content[i];
      console.log("in for");
      const newHistoryItem = document.createElement('li');
      const itemContent = document.createElement('p');

      // handle favorite button coloring
      const itemFavoriteButton = document.createElement('button');
      itemFavoriteButton.innerHTML = '&hearts;';
      itemFavoriteButton.classList.add('heart');
      if (categoryPair[1].favorited) {
        itemFavoriteButton.classList.add('favorited');
      }

      // add the innerHTML depending on category, slice to length
      itemContent.innerHTML = getItemContent(categoryPair[0], categoryPair[1].content);

      newHistoryItem.appendChild(itemFavoriteButton);
      newHistoryItem.appendChild(itemContent);
      historyList.appendChild(newHistoryItem);
    }
  });
}

function getItemContent(category, content) {
  switch (category) {
    case 'science':
    case 'history':
    case 'misc':
      return content;
    case 'riddle':
      return content.riddle;
    case 'vocab':
      return content.id;
  }
}

// Click handlers for each tab
const factTab = document.getElementById('fact-tab');
const riddlesTab = document.getElementById('riddles-tab');
const vocabTab = document.getElementById('vocab-tab');
const favTab = document.getElementById('fav-tab');

const historyTabs = [[factTab, 'fact'], [riddlesTab, 'riddle'], [vocabTab, 'vocab'], [favTab, 'favorites']];

historyTabs.forEach( tab => {
  tab[0].addEventListener('click', () => {
    const selectedTab = document.getElementsByClassName('history-selected-tab')[0];
    selectedTab.classList.remove('history-selected-tab');
    tab[0].classList.add('history-selected-tab');

    renderContent(tab[1]);
  });

});
