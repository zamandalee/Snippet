function getMISC(callback) {
    const xmlHttp = new XMLHttpRequest();
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
  getMISC(res => {
    const post = res.data.children[1].data;
    callback(post.title, post.permalink);
  });
}
