let timeH1 = document.getElementById("currentTime");


function displayTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
  timeH1.innerHTML = hours + ":" + minutes;
}

function minuteClock() {
  setInterval(displayTime, 60000);
}

displayTime();

setTimeout(
  () => {
    displayTime();
    minuteClock();
  },
  (60 - (new Date()).getSeconds()) * 1000
);
