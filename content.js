/*eslint no-undef: 0*/

const SELECTORS = ['history', 'science', 'misc'];

const displaySelectedFact = () => {
  chrome.storage.sync.get('preferences', (currentStore)=>{
    const currentPreferences = currentStore.preferences;
    SELECTORS.forEach((id)=>{
      const div = document.getElementById(id);
      if (currentPreferences.fact === id) {
        div.classList.remove('hidden');
      }
    });
  });
};

// TODO button event that changes rendered tab

displaySelectedFact();
