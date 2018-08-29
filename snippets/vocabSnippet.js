function getVocabWord() {
  const vocabSnippets = ['acumen', 'accrete', 'adroit', 'adumbrate',
    'alacrity', 'antipathy', 'arcane', 'aspersion', 'avarice', 'bellicose',
    'bereft', 'bombastic', 'bourgeois', 'bowdlerize', 'buttress',
    'byzantine', 'cajole', 'capacious', 'carouse', 'castigate', 'caucus',
    'circuitous', 'circumvent', 'clement', 'clout', 'commodious', 'concord',
    'congruous', 'convivial', 'corroborate', 'delineate', 'diffident',
    'dilatory', 'egregious', 'ephemeral', 'esoteric', 'ethereal',
    'evanescent', 'fastidious', 'fatuous', 'foment', 'hackneyed',
    'ignominious', 'impasse', 'incongruous', 'indolent', 'inertia',
    'insipid', 'inundate', 'jocular', 'lackadaisical', 'mercurial',
    'mitigate', 'nascent', 'nebulous', 'neophyte', 'noetic', 'nugatory',
    'obdurate', 'obsequious', 'oracular', 'orthogonal', 'ostensible',
    'palliative', 'paragon', 'paramour', 'perturbation', 'pithy',
    'polemic', 'presage', 'prevaricator', 'propitious', 'protean',
    'provisory', 'quixotic', 'quotidian', 'rancorous', 'recidivism',
    'reprobate', 'ribald', 'rife', 'sophomoric', 'splendiferous', 'staid',
    'sublimity', 'surfeit', 'sycophant', 'truculent', 'turgid', 'umbrage',
    'unctuous', 'variegated', 'venal', 'veracity', 'verdant', 'vituperate',
    'waif', 'wallydraigle', 'winsome', 'xenophobia', 'yahoo', 'yoke',
    'zany', 'zenith', 'zephyr'];

  const vocWord = vocabSnippets[ Math.floor( Math.random() * vocabSnippets.length ) ];

  const url = `https://od-api.oxforddictionaries.com/api/v1/entries/en/${vocWord}`;

  $.ajax({
    url: url,
    method: 'GET',
    data: {
      app_id: '2b9cea8c',
      app_key: 'd1ab5e609892b9e47be76b2fee2d40ba'
    }
  }).done( result => {
    result = result.results[1];
    renderVocabSnippet(result);
  }).fail( err => {
    throw err;
  });
}

function renderVocabSnippet(result) {
  let word = result.id;
  const vocWordP = document.getElementById("voc-word");
  vocWordP.innerHTML = word;

  let partOfSpeech = result.lexicalEntries[1].lexicalCategory;
  const posP = document.getElementById("voc-partofspeech");
  posP.innerHTML = partOfSpeech;

  let definition = result.lexicalEntries[1].entries[1].senses[1].definitions[1];
  const defP = document.getElementById("voc-def");
  defP.innerHTML = definition;
}

getVocabWord();
