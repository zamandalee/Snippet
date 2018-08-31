// fetching top news from NYT "home"
let url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a9d221d6d5ef2e8d17f12958f23f98d7";

$.ajax({
  url: url,
  method: 'GET'
}).done( result => {
  result = result.results;
  renderHomeNews(result);
}).fail( err => {
  throw err;
});


function renderWeatherSnippet(result) {

}
