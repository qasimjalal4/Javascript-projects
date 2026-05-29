const startStopBtn = document.querySelector('.start-stop-button');
const resetBtn = document.querySelector('.reset-button');
const displayTime = document.querySelector('.time-display');

let totalSeconds = 1500;
let isRunning = false;

startStopBtn.addEventListener('click', () => {

  startStopTimer()
})


function startStopTimer() {

  if(!isRunning) {
    setInterval(() => {
      if(totalSeconds > 0) {
        totalSeconds--;
        displayTime.innerText = totalSeconds;
      }
    }, 1000)

    isRunning = true;
  }
}