/*eslint no-undef: 0*/

const hearts = document.getElementsByClassName('heart');
console.log(hearts);

Array.from(hearts).forEach( heart => {
  heart.addEventListener('click', (event) => {

    heart.classList.toggle('favorited');
    console.log(heart);

    // set chrome storage's todayData key's favorite key to true or false
    chrome.storage.sync.get(date, ret => {
      const todayData = ret[date];
      const thisHistory = todayData[heart.dataset.type];

      thisHistory.favorited = !thisHistory.favorited;

      chrome.storage.sync.set({ date: todayData }); // save in chrome storage
    });

    event.stopPropagation();
  });
});
