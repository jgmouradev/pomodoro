const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      alert('Time is up!');
    } else {
      timeLeft--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  timeLeft = 25 * 60;
  timerDisplay.innerText = '25:00';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);