/*eslint no-undef: 0*/

// open history/favorites modal
const favoriteButton = document.getElementById('favorites');
const modal = document.getElementsByClassName('black-modal')[0];
const modalX = document.getElementById('black-modal-x');


favoriteButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    renderContent('fact');
});

modalX.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// get content from chrome storage
function getContent(category) {
  let categoryContent = [];

  chrome.storage.sync.get(null, items => {
    const allKeys = Object.keys(items);

    for (let i = 0; i < allKeys.length; i++) {
      if( String(allKeys[i]) !== 'name') {
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
  });
  return categoryContent;
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
  const content = getContent(category);

  const historyList = document.getElementById('history-list');

  // render each item in history list
  content.forEach( categoryPair => {
    const newHistoryItem = document.createElement('li');
    const itemContent = document.createElement('p');

    // handle favorite button coloring
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('heart');
    if (categoryPair[1].favorited) {
      favoriteButton.classList.add('favorited');
    }

    // add the innerHTML depending on category
    itemContent.innerHTML = getItemContent(categoryPair[0], categoryPair[1].content);

    newHistoryItem.appendChild(favoriteButton);
    newHistoryItem.appendChild(itemContent);
    historyList.appendChild(newHistoryItem);

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
