let timeH1 = document.getElementById("currentTime");
let time = new Date();

function minsLeadingZeros(dt) {
  return (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
}

function currentTime() {
  timeH1.innerHTML = time.getHours() + ":" + minsLeadingZeros();
}

currentTime();
setInterval( currentTime, 1000 );
