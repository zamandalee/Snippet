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
  for (let i = 0; i < 5; i++) {

    let headline = document.getElementById(i + "-headline");
    let multimedia = document.getElementById(i + "-multimedia");
    let copyright = document.getElementById(i + "-copyright");
    let abstract = document.getElementById(i + "-abstract");

    headline.innerHTML = result[i].title;
    headline.href = result[i].url;
    multimedia.src = result[i].multimedia[4].url;
    copyright.innerHTML = result[i].multimedia[4].copyright;
    abstract.innerHTML = result[i].abstract;
  }
}

// window.addEventListener('load', (event) => {
//   const dots = document.getElementsByClassName("dot");
//
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener('click', () => { currentSlide(i); });
//   }
// };

let slideIndex = 0;
carousel(slideIndex);

function selectArticle(num) {
  console.log("in currentSlide");
  carousel(slideIndex = num);
}

function carousel(num) {

    let i;
    const articles = document.getElementsByClassName("news-article");
    const dots = document.getElementsByClassName("dot");

    if (num > articles.length) {
      slideIndex = 0;
    }

    if (num < 1) {
      slideIndex = articles.length - 1;
    }

    for (i = 0; i < articles.length; i++) {
       articles[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > articles.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    articles[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(carousel, 2000);
}
