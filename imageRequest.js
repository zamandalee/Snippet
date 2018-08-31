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
      `https://source.unsplash.com/random/?nature`,
      true
    );
    xmlHttp.send(null);
}

function fetchImage(callback) {
  getImage((res) => {
    callback(res.responseURL);
  });
}
