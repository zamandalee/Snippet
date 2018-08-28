function currentTime() {
  let timeH1 = document.getElementById("currentTime");
  let time = new Date();
  timeH1.innerHTML = time.getHours() + ":" + time.getMinutes();
}

function updateTime() {
  setInterval( currentTime, 60000 );
}

currentTime();
setTimeout( updateTime, 60 - new Date().getSeconds() );
