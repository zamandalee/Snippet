/*eslint no-undef: 0*/

const SELECTORS = ['history', 'science', 'misc'];

function toggleButtonColor(id) {
  SELECTORS.forEach((selectedId)=>{
    const button = document.getElementById(selectedId);
    if (selectedId === id) {
      button.classList.remove('red');
      button.classList.add('green');
    } else {
      button.classList.add('red');
      button.classList.remove('green');
    }
  });
}

chrome.storage.sync.get('preferences', (currentStore)=>{
  const currentPreferences = currentStore.preferences;
  SELECTORS.forEach((id)=>{
    const button = document.getElementById(id);
    button.addEventListener('click', (e)=>{
      toggleButtonColor(id);
      chrome.runtime.sendMessage({type: 'changeFact', factType: id});
    });
    if (currentPreferences.fact === id) {
      toggleButtonColor(id);
    }
  });
});
