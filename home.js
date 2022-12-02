let countDownTime = new Date("Oct 20, 2023 00:00:00").getTime();

function durgaPujo() {
  let nowTime = new Date().getTime();
  let diff = countDownTime - nowTime;

  let sec = 1000;
  let min = sec * 60;
  let hr = min * 60;
  let day = hr * 24;

  let d = Math.floor(diff / day);
  let h = Math.floor((diff % day) / hr);
  let m = Math.floor((diff % hr) / min);
  let s = Math.floor((diff % min) / sec);

  document.getElementById("Days").innerText = addZero(d);
  document.getElementById("Hours").innerText = addZero(h);
  document.getElementById("Minutes").innerText = addZero(m);
  document.getElementById("Seconds").innerText = addZero(s);
}

setInterval(function () {
  durgaPujo();
}, 1000);

function addZero(num) {
  if (num < 10) return `0${num}`;
  else return num;
}
