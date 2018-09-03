/*eslint no-undef: 0*/

const defaultPreferences = {
  name: ''
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({preferences: defaultPreferences, todos: {}}, function() {
    console.log('Default preferences syced.');
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.update({url: "https://zamandalee.github.io/Snippet/"});
  window.close();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch( request.type ) {
    case 'getVocabWord':
      // ajax request to oxford dictionary for vocabSnippet
      $.ajax({
        url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${request.word}`,
        method: 'GET',
        headers: {
          'app_id': '2b9cea8c',
          'app_key': 'd1ab5e609892b9e47be76b2fee2d40ba'
        },
      }).done( result => {
        sendResponse({result: result.results[0]});
      });
  }
  return true; //necessary for sendResponse() to be valid
});
