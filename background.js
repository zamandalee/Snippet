/*eslint no-undef: 0*/

const defaultPreferences = {
  history: true,
  science: true,
  til: true,
  news: true,
  name: 'FirstName LastName'
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({preferences: defaultPreferences}, function() {
    console.log('Default preferences set.');
  });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'developer.chrome.com'},
  //     })
  //     ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});
