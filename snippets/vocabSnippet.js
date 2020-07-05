function getVocabWord(callback) {
  const vocabSnippets = [
    'aberration', 'abeyance', 'abject', 'abnegate', 'abstruse', 'acarpous', 'acrimonious', 'acumen',
    'accrete', 'adroit', 'adumbrate', 'alacrity', 'antipathy', 'arcane',
    'aspersion', 'assiduity', 'avarice', 'bellicose', 'bereft', 'bifurcation', 'bombastic', 'bourgeois',
    'bowdlerize', 'buttress', 'capacious', 'capricious', 'carouse', 'castigate',
    'circuitous', 'circumvent', 'clement', 'cogitate', 'commodious', 'concominent', 'concord',
    'congruous', 'convivial', 'corroborate', 'delineate', 'diffident',
    'dilatory', 'egregious', 'ephemeral', 'epistolary', 'eponymous', 'esoteric', 'ethereal',
    'evanescent', 'extoll', 'fastidious', 'fatuous', 'foment', 'hackneyed', 'heuristic',
    'iconoclastic', 'ignominious', 'impasse', 'incipient', 'incongruous', 'indolent', 'inertia',
    'insipid', 'inundate', 'jejune', 'jocular', 'lackadaisical', 'malaise', 'mercurial',
    'misanthrope', 'mitigate', 'nascent', 'nebulous', 'neophyte', 'noetic', 'nugatory',
    'obdurate', 'obfuscate', 'obsequious', 'opprobrium', 'oracular', 'orthogonal', 'ostensible',
    'palliative', 'paragon', 'paramour', 'perturbation',
    'polemic', 'presage', 'prevaricator', 'propensity', 'propitious', 'protean',
    'provisory', 'quixotic', 'quotidian', 'rancorous', 'recidivism',
    'reprobate', 'rife', 'sacrosanct', 'salient', 'sophomoric', 'splendiferous', 'staid',
    'sublimity', 'surfeit', 'sycophant', 'truculent', 'turgid', 'umbrage',
    'unctuous', 'variegated', 'venal', 'veracity', 'verdant', 'vitriol', 'vituperate',
    'vivify', 'waif', 'wallydraigle', 'winsome', 'xenophobia', 'yahoo',
    'zany', 'zenith', 'zephyr'
  ];

  const vocWord = vocabSnippets[ Math.floor( Math.random() * vocabSnippets.length ) ];

  chrome.runtime.sendMessage({ type: 'getVocabWord', word: vocWord }, (response) => {
    renderVocabSnippet(response.result); // first render of the day
    callback(response.result);
  });
}

function renderVocabSnippet(result) {
  let partOfSpeech = result.lexicalEntries[0].lexicalCategory.id;
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
  if (definition[definition.length - 1] === '.') { definition = definition.slice(0, -1); }
  const defP = document.getElementById("voc-def");
  defP.innerHTML = definition;
}

// for click&flip functionality
const vocabBox = document.getElementsByClassName("vocab-flipper-container")[0];
const vocabFront = document.getElementsByClassName("vocab-front")[0];
const vocabBack = document.getElementsByClassName("vocab-back")[0];
const vocabFlipper = document.getElementsByClassName('vocab-flipper')[0];

vocabBox.addEventListener('click', (event) => {
  vocabBox.classList.toggle('flip');

  vocabFront.classList.toggle('hide');
  vocabBack.classList.toggle('hide');

  vocabFlipper.classList.toggle('background');

  setTimeout(() => {
    vocabFlipper.classList.toggle('background');
  }, 200);

});
