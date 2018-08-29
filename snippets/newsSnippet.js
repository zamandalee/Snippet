// fetching top news from NYT "home"
let url = "https://api.nytimes.com/svc/topstories/v2/home.json";

url += '?' + $.param({
  'api-key': "1928f74d185e4c9eb207c55d32651c25"
});

$.ajax({
  url: url,
  method: 'GET',
}).done( result => {
  result = result.results;
  fiveHomeNews(result);
}).fail( err => {
  throw err;
});


function fiveHomeNews(result) {
  let counter = 0;
  let idx = 0;

  while (counter < 5) {
    let headline = document.getElementById(counter + "-headline");
    let multimedia = document.getElementById(counter + "-multimedia");
    let copyright = document.getElementById(counter + "-copyright");
    let abstract = document.getElementById(counter + "-abstract");

    if ( result[idx].title && result[idx].url && result[idx].multimedia[4]
      && result[idx].multimedia[4].copyright && result[idx].abstract ) {
       headline.innerHTML = result[idx].title;
       headline.href = result[idx].url;
       multimedia.src = result[idx].multimedia[4].url;
       copyright.innerHTML = result[idx].multimedia[4].copyright;
       abstract.innerHTML = result[idx].abstract;
       counter++;
    }
    idx++;
  }
}

window.addEventListener('load', (event) => {
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => { selectArticle(i); });
  }
});

let slideIndex = 0;
// let interval;
carousel(slideIndex);

function selectArticle(num) {
  carousel(slideIndex = num);
}

function carousel(num) {
  const articles = document.getElementsByClassName("news-article");
  const dots = document.getElementsByClassName("dot");

  if (num > articles.length ) {
    slideIndex = 0;
  }

  for (let i = 0; i < articles.length; i++) {
     articles[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > articles.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  articles[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(carousel, 4500);
}
