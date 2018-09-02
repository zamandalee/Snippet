/*eslint no-undef: 0*/

function getContent(category) {
  let categoryContent = [];

  chrome.storage.sync.get(null, items => {
    const allKeys = Object.keys(items);

    for (let i = 0; i < allKeys.length; i++) {
      if( String(allKeys[i]) !== 'name') {
        const todayData = items[ allKeys[i] ];

        switch( category ) {
          case 'fact':
            categoryContent.push(todayData['history']);
            categoryContent.push(todayData['science']);
            categoryContent.push(todayData['misc']);
            break;
          case 'riddle':
            categoryContent.push(todayData['riddle']);
            break;
          case 'vocab':
            categoryContent.push(todayData['vocab']);
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
      favorites.push(todayData[category]);
    }
  }

  return favorites;
}

function renderContent(category) {
  const content = getContent(category);

  switch (category) {
    case 'fact':

      break;
    case 'riddle':
      break;
    case 'vocab':
      break;
    case 'favorites':
  }

}
