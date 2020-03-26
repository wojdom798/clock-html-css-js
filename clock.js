const deg = 6;
const hourHand = document.getElementById("hr");
const minuteHand = document.getElementById("min");
const secondHand = document.getElementById("sec");

setInterval(() => {
  let day = new Date();
  let hr = day.getHours() * 30;
  let min = day.getMinutes() * deg;
  let sec = day.getSeconds() * deg;

  hourHand.style.transform = `rotateZ(${hr + (min / 12)}deg)`;
  minuteHand.style.transform = `rotateZ(${min}deg)`;
  secondHand.style.transform = `rotateZ(${sec}deg)`;
}, 1);