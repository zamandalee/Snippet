/*eslint no-undef: 0*/

const defaultPreferences = {
  fact: 'history',
  name: 'FirstName LastName'
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({preferences: defaultPreferences}, function() {
    console.log('Default preferences syced.');
  });
});

// TODO Function checks if there are facts stored for today. If not, calls APIs
// Same with image
// chrome.runtime.onConnect.addListener()

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'changeFact') {
    chrome.storage.sync.get('preferences', (currentStore)=>{
      const currentPreferences = currentStore.preferences;
      currentPreferences.fact = request.factType;
      chrome.storage.sync.set({preferences: currentPreferences});
      chrome.tabs.reload();
    });
  }
});

$.ajax({
  url: "https://od-api.oxforddictionaries.com/api/v1/entries/en/zephyr",
  method: 'GET',
  // dataType: 'jsonp',
  headers: {
    // 'Accept': 'application/json',
    'app_id': '2b9cea8c',
    'app_key': 'd1ab5e609892b9e47be76b2fee2d40ba'
  },
  // contentType: 'application/json; charset=utf-8'
}).done( result => {
  result = result.results[0];
  // renderVocabSnippet(result);
}).fail( err => {
  throw err;
});
