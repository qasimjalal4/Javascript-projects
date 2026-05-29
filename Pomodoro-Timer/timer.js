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

function startStopTimer() {

  if(!isRunning) {
   intervalId = setInterval(() => {
      if(totalSeconds > 0) {
        totalSeconds--;
        displayTime.innerText = totalSeconds;
      }
    }, 1000)

    isRunning = true;
  } else {
 
    clearInterval(intervalId)
    isRunning = false;
  }
}


function resetTimer() {
   totalSeconds = 1500;
  isRunning = false;
  clearInterval(intervalId);
  displayTime.innerText = totalSeconds;

 }