function updateClock() {
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  let dateString = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("clock").innerText = timeString;
  document.getElementById("date").innerText = dateString;
}
setInterval(updateClock, 1000);
updateClock();
