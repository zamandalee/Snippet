/*eslint no-undef: 0*/

historySnippet();

const hisTab = document.getElementById('his-tab');
const sciTab = document.getElementById('sci-tab');
const misTab = document.getElementById('mis-tab');


hisTab.addEventListener('click', ()=>{
  hisTab.classList.add('selected-tab');
  sciTab.classList.remove('selected-tab');
  misTab.classList.remove('selected-tab');
  historySnippet();
});

sciTab.addEventListener('click', ()=>{
  sciTab.classList.add('selected-tab');
  hisTab.classList.remove('selected-tab');
  misTab.classList.remove('selected-tab');
  scienceSnippet();
});

misTab.addEventListener('click', ()=>{
  misTab.classList.add('selected-tab');
  sciTab.classList.remove('selected-tab');
  hisTab.classList.remove('selected-tab');
  miscSnippet();
});
