function getImage(callback, width, height)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          callback(xmlHttp);
        }
    };
    xmlHttp.open(
      "GET",
      `https://source.unsplash.com/random/${width}x${height}?nature?dark?night`,
      true
    );
    xmlHttp.send(null);
}

function fetchImage(callback) {
  const {height, width} = document.body.getBoundingClientRect();
  getImage((res) => {
    callback(res.responseURL);
  }, width, height);
}
