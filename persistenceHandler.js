/*eslint no-undef: 0*/

// TODO Make sure functions return unique values for each day
//
// const uniqueCheck = (data, field) => {
//
// };
//
// const generateUniqueField = (field) => {
//
// };

const todayDate = new Date().toDateString();

const getDailySnippets = () => {
  const todayData = {};
  todayData['history'] = historySnippet();
  todayData['science'] = scienceSnippet();
  todayData['riddle'] = riddleSnippet();

  factSnippet.innerHTML = todayData['history'];
  getVocabWord((result) => {
    todayData['vocab'] = result;
    fetchImage((imageURL) => {
      todayData['imageURL'] = imageURL;
      document.body.style.backgroundImage = `url(${imageURL})`;
      miscSnippet((miscValue) => {
        todayData['misc'] = miscValue;
        chrome.storage.sync.set({ [todayDate]: todayData});
      });
    });
  });
};
