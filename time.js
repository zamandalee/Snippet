function currentTime() {
  let timeH1 = document.getElementById("currentTime");
  let time = new Date();
  timeH1.innerHTML = time.getHours() + ":" + time.getMinutes();
}

currentTime();
