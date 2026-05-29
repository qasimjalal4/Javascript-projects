const startStopBtn = document.querySelector('.start-stop-button');
const resetBtn = document.querySelector('.reset-button');
const displayTime = document.querySelector('.time-display');

let totalSeconds = 1500;
let isRunning = false;
let intervalId;

startStopBtn.addEventListener('click', () => {

  startStopTimer()
})

resetBtn.addEventListener('click', () => {
  resetTimer();
})

function formatTime(totalSeconds) {

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const mintStr = minutes < 10 ? '0' + minutes : minutes;
  const secStr = seconds < 10 ? '0' + seconds : seconds;

  return `${mintStr} : ${secStr}`;
}

function startStopTimer() {

  if(!isRunning) {
   intervalId = setInterval(() => {
      if(totalSeconds > 0) {
        totalSeconds--;
        displayTime.innerText = formatTime(totalSeconds);
      }
    }, 1000)
    startStopBtn.innerText = 'Stop';
    startStopBtn.classList.add('color-changer'); 
    isRunning = true;
  } else {
 
    clearInterval(intervalId)
    isRunning = false;
    startStopBtn.innerText = 'Start';
    startStopBtn.classList.remove('color-changer');
  }
}


function resetTimer() {
  totalSeconds = 1500;
  isRunning = false;
  clearInterval(intervalId);
  displayTime.innerText = formatTime(totalSeconds);
  startStopBtn.innerText = 'Start';
   startStopBtn.classList.remove('color-changer')
 }