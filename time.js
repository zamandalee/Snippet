function currentTime() {
  let timeH1 = document.getElementById("currentTime");
  let time = new Date();
  timeH1.innerHTML = time.toLocaleTimeString().slice(0,5);
  // TODO At 6:43 AM, the above displays '6:43:' instead of the desired '6:43'
}

currentTime();
