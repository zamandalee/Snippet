/*eslint no-undef: 0*/

const defaultPreferences = {
  fact: true,
  vocab: true,

  name: ''
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({preferences: defaultPreferences}, function() {
    console.log('Default preferences syced.');
  });
});

// TODO Function checks if there are facts stored for today. If not, calls APIs
// Same with image
// chrome.runtime.onConnect.addListener()

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch( request.type ) {
    case 'getVocabWord':
      // send ajax requestion to oxford dictionary for vocabSnippet
      $.ajax({
        // url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${request.word}`,
        url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/esoteric`,
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
