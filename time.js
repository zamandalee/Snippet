function currentTime() {
  let timeH1 = document.getElementById("currentTime");
  let time = new Date();
  timeH1.innerHTML = time.toLocaleTimeString().slice(0,5);
}

currentTime();
