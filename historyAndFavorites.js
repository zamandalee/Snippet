/*eslint no-undef: 0*/

const heart = document.getElementById('heart');

heart.addEventListener('click', (event) => {
  heart.classList.toggle('favorited');

  // set todayData's favorite key to true or false
  chrome.storage.sync.get(date, ret => {
    const todayData = ret[date];
    const thisHistory = todayData[history];

    thisHistory.favorited = !thisHistory.favorited;

  });

  event.stopPropagation();
});
