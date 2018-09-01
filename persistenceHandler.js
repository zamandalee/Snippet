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
  todayData['history'] = {content: historySnippet(), favorited: false};
  todayData['science'] = {content: scienceSnippet(), favorited: false};
  todayData['riddle'] = {content: riddleSnippet(), favorited: false};

  factSnippet.innerHTML = todayData['history'].content;

  getVocabWord((result) => {
    todayData['vocab'] = {content: result, favorited: false};

    fetchImage((imageURL) => {
      todayData['imageURL'] = {content: imageURL, favorited: false};
      document.body.style.backgroundImage = `url(${imageURL})`;

      miscSnippet((miscValue) => {
        todayData['misc'] = {content: miscValue, favorited: false};
        chrome.storage.sync.set({ [todayDate]: todayData });
      });
    });
  });
};
