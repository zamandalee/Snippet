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
  const url = `https://od-api.oxforddictionaries.com/api/v1/entries/en/${vocWord}/`;


}

// Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/zephyr';
//
//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }
//
//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     alert('Response from CORS request to ' + url + ': ');
//   };
//
//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };
//
//   xhr.send();
// }

function renderVocabSnippet(result) {
  console.log("in render voc snippet");

  let word = result.id;
  const vocWordP = document.getElementById("voc-word");
  vocWordP.innerHTML = word;

  let partOfSpeech = result.lexicalEntries[0].lexicalCategory.toUpperCase();
  const posP = document.getElementById("voc-partofspeech");
  posP.innerHTML = partOfSpeech;

  // remove period at the end of definition
  let definition = result.lexicalEntries[0].entries[0].senses[0].definitions[0].slice(0, -1);
  const defP = document.getElementById("voc-def");
  defP.innerHTML = definition;
}

getVocabWord();
