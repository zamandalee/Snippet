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

function miscSnippet(callback) {
  getMISC((res) => {
    const miscSnip = res.data.children[1].data.title;
    callback(miscSnip);
  });
}
