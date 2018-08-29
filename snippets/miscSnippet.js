function getMISC(callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(JSON.parse(xmlHttp.response));
    };
    xmlHttp.open(
      "GET",
      "https://www.reddit.com/r/TodayILearned/hot.json?sort=hot",
      true
    );
    xmlHttp.send(null);
}

function miscSnippet() {
  const miscP = document.getElementById("misc-snippet");
  getMISC((res)=>{
    const miscSnip = res.data.children[1].data.title;
    miscP.innerHTML = miscSnip;
  });
}

miscSnippet();
