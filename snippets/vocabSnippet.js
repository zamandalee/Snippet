function getVocabWord() {
  const vocabSnippets = ['abeyance', 'abject', 'abnegate', 'abstruse', 'acarpous', 'acrimonious', 'acumen',
    'accrete', 'adroit', 'adumbrate', 'alacrity', 'antipathy', 'arcane',
    'aspersion', 'assiduity', 'avarice', 'bellicose', 'bereft', 'bombastic', 'bourgeois',
    'bowdlerize', 'buttress', 'capacious', 'carouse', 'castigate',
    'circuitous', 'circumvent', 'clement', 'clout', 'cogitate', 'commodious', 'concord',
    'congruous', 'convivial', 'corroborate', 'delineate', 'diffident',
    'dilatory', 'egregious', 'ephemeral', 'esoteric', 'ethereal',
    'evanescent', 'fastidious', 'fatuous', 'foment', 'hackneyed',
    'ignominious', 'impasse', 'incongruous', 'indolent', 'inertia',
    'insipid', 'inundate', 'jocular', 'lackadaisical', 'mercurial',
    'mitigate', 'nascent', 'nebulous', 'neophyte', 'noetic', 'nugatory',
    'obdurate', 'obsequious', 'oracular', 'orthogonal', 'ostensible',
    'palliative', 'paragon', 'paramour', 'perturbation',
    'polemic', 'presage', 'prevaricator', 'propitious', 'protean',
    'provisory', 'quixotic', 'quotidian', 'rancorous', 'recidivism',
    'reprobate', 'rife', 'sophomoric', 'splendiferous', 'staid',
    'sublimity', 'surfeit', 'sycophant', 'truculent', 'turgid', 'umbrage',
    'unctuous', 'variegated', 'venal', 'veracity', 'verdant', 'vituperate',
    'vivify', 'waif', 'wallydraigle', 'winsome', 'xenophobia', 'yahoo',
    'zany', 'zenith', 'zephyr'];

  const vocWord = vocabSnippets[ Math.floor( Math.random() * vocabSnippets.length ) ];

  chrome.runtime.sendMessage({type: 'getVocabWord', word: vocWord}, (response) => {
    renderVocabSnippet(response.result);
  });
}

function renderVocabSnippet(result) {
  let partOfSpeech = result.lexicalEntries[0].lexicalCategory.toLowerCase();
  if (partOfSpeech === 'adjective') {
    partOfSpeech = 'adj.';
  }
  const posP = document.getElementById("voc-partofspeech");
  posP.innerHTML = partOfSpeech;

  let word = result.id;
  const vocWordP = document.getElementById("voc-word");
  vocWordP.innerHTML = word;

  let definition = result.lexicalEntries[0].entries[0].senses[0].definitions[0];
  // remove period at the end of definition
  if (definition[-1] === '.') { definition = definition.slice(0, -1); }
  const defP = document.getElementById("voc-def");
  defP.innerHTML = definition;
}

getVocabWord();

// for click&flip functionality
const vocabBox = document.getElementsByClassName("vocab-flipper-container")[0];
const vocabFront = document.getElementsByClassName("vocab-front")[0];
const vocabBack = document.getElementsByClassName("vocab-back")[0];
const vocabFlipper = document.getElementsByClassName('vocab-flipper')[0];

vocabBox.addEventListener('click', (event) => {
  console.log("clicked");
  vocabBox.classList.toggle('flip');

  vocabFront.classList.toggle('hide');
  vocabBack.classList.toggle('hide');

  vocabFlipper.classList.toggle('background');

  setTimeout(() => {
    vocabFlipper.classList.toggle('background');
  }, 200);

});
