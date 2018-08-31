/*eslint no-undef: 0*/

const defaultPreferences = {
  fact: true,
  vocab: true,
  news: true,
  brain: true,
  name: ''
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({preferences: defaultPreferences}, function() {
    console.log('Default preferences syced.');
  });
});
