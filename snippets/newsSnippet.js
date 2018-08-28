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
  for (let i = 0; i < 5; i++) {

    let headline = document.getElementById(i + "-headline");
    let multimedia = document.getElementById(i + "-multimedia");
    let copyright = document.getElementById(i + "-copyright");
    let abstract = document.getElementById(i + "-abstract");

    headline.innerHTML = result[i].title;
    multimedia.src = result[i].multimedia[4].url;
    copyright.innerHTML = result[i].multimedia[4].copyright;
    abstract.innerHTML = result[i].abstract;
  }
}

let slideIndex = 0;
carousel();

function carousel() {
    let articles = document.getElementsByClassName("news-article");

    for (let i = 0; i < articles.length; i++) {
      articles[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > articles.length) {
      slideIndex = 1;
    }

    articles[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4500);
}
