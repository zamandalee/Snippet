/*eslint no-undef: 0*/

const SELECTORS = ['history', 'science', 'misc'];

function toggleButtonColor(id) {
  SELECTORS.forEach((selectedId)=>{
    const button = document.getElementById(selectedId);
    if (selectedId === id) {
      button.classList.add('darken');
    } else {
      button.classList.remove('darken');
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
