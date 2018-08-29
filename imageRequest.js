function getImage(callback, width, height)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp);
    };
    xmlHttp.open(
      "GET",
      `https://source.unsplash.com/random/${width}x${height}?nature?dark?night`,
      true
    );
    xmlHttp.send(null);
}

function fetchImage() {
  const body = document.body;
  const {height, width} = body.getBoundingClientRect();
  getImage((res)=>{
    body.style.backgroundImage = `url(${res.responseURL})`;
  }, width, height);
}

fetchImage();
