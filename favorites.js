/*eslint no-undef: 0*/

const favoriteButton = document.getElementById('favorites');
const modal = document.getElementsByClassName('black-modal')[0];
const modalX = document.getElementById('black-modal-x');

Array.from(hearts).forEach( heart => {
  heart.addEventListener('click', (event) => {
    console.log(date);

    heart.classList.toggle('favorited');

    // set chrome storage's todayData key's favorite key to true or false
    chrome.storage.sync.get(date, ret => {
      const todayData = ret[date];
      const thisHistory = todayData[heart.dataset.type];
      console.log(thisHistory);

      thisHistory.favorited = !thisHistory.favorited;

      chrome.storage.sync.set({ [date]: todayData }); // save in chrome storage
      console.log(todayData);
    });

    event.stopPropagation();
  });
});

favoriteButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

modalX.addEventListener('click', () => {
  modal.classList.add('hidden');
});
