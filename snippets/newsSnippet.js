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
  let headline = document.getElementById("headline");
  let multimedia = document.getElementById("multimedia");
  let abstract = document.getElementById("abstract");
  console.log(result);

  // for (let i = 0; i < 5; i++) {
    headline.innerHTML = result[0].title;
    multimedia.src = result[0].multimedia[0].url;
    multimedia.alt = result[0].multimedia[0].caption;
    abstract.innerHTML = result[0].abstract;
  // }
}
