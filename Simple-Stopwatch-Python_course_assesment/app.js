const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const text = document.querySelector("h1");
let seconds = 0;
let secs = 0;
let mins = 0;
let hours = 0;
let interval = null;

const stopwatch = () => {
  seconds++;

  secs = seconds % 60;
  hours = Math.floor(seconds / 3600);
  mins = Math.floor((seconds - hours * 3600) / 60);

  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (secs < 10) {
    secs = `0${secs}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  text.textContent = `${hours} : ${mins} : ${secs}`;
};

const startStopwatch = () => {
if(interval){
return 
}
  interval = setInterval(stopwatch, 1000);
};
const stopStopwatch = () => {
  clearInterval(interval);
  interval = null;
};
const resetStopwatch = () => {
  stopStopwatch();
  seconds = 0;
  text.textContent = `00 : 00 : 00`;
};

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
