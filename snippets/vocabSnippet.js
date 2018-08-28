function vocabSnippet() {
  const vocP = document.getElementById("voc-snippet");

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

  vocP.innerHTML = vocabSnippets[ Math.floor( Math.random() * vocabSnippets.length ) ];
}

vocabSnippet();
