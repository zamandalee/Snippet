import { config } from './config.js'

const defaultPreferences = {
  name: ''
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ preferences: defaultPreferences, todos: {} }, function() {
    console.log('Default preferences syced.');
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.update({ url: "https://zamandalee.github.io/Snippet/"} );
  window.close();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch( request.type ) {
    case 'getVocabWord':
      // ajax request to oxford dictionary for vocabSnippet
      $.ajax({
        url: `https://od-api.oxforddictionaries.com:443/api/v2/entries/en-us/${request.word}`,
        method: 'GET',
        headers: {
          'app_id': config.OXFORD_DICT_APP_ID,
          'app_key': config.OXFORD_DICT_APP_KEY
        },
      }).done( result => {
        sendResponse({result: result.results[0]});
      });
  }
  return true; //necessary for sendResponse() to be valid
});


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   debugger;
//   switch( request.type ) {
//     case 'getVocabWord':
//       // ajax request to oxford dictionary for vocabSnippet
//       debugger;
//       $.ajax({
//         url: `https://od-api.oxforddictionaries.com:443/api/v2/entries/en-us/${request.word}`,
//         method: 'GET',
//         headers: {
//           'app_id': "4d02697c",
//           'app_key': "bb507e921eece6a19bba40e6f321026a"
//         },
//       }).done( result => {
//         sendResponse({result: result.results[0]});
//       });
//   }
//   return true; //necessary for sendResponse() to be valid
// });
