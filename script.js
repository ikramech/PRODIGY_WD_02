let hour1 = document.getElementById('hour1');
let hour2 = document.getElementById('hour2');
let minute1 = document.getElementById('minute1');
let minute2 = document.getElementById('minute2');
let second1 = document.getElementById('second1');
let second2 = document.getElementById('second2');
let millisecond1 = document.getElementById('millisecond1');
let millisecond2 = document.getElementById('millisecond2');

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let interval;
let startTime = 0;
let running = false;

function startTimer() {
  if (!running) {
    running = true;
    startTime = Date.now() - startTime;
    interval = setInterval(updateTime, 10); // Update every 10ms for milliseconds
  }
}

function stopTimer() {
  if (running) {
    running = false;
    clearInterval(interval);
    startTime = Date.now() - startTime;
  }
}

function resetTimer() {
  clearInterval(interval);
  startTime = 0;
  running = false;

  // Reset the display to 00:00:00:00
  hour1.textContent = 0;
  hour2.textContent = 0;
  minute1.textContent = 0;
  minute2.textContent = 0;
  second1.textContent = 0;
  second2.textContent = 0;
  millisecond1.textContent = 0;
  millisecond2.textContent = 0;
}

function updateTime() {
  let currentTime = Date.now() - startTime;
  
  let hours = Math.floor(currentTime / (1000 * 60 * 60));
  let minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((currentTime % 1000) / 10);

  // Update each digit
  updateDigits(hour1, hour2, hours);
  updateDigits(minute1, minute2, minutes);
  updateDigits(second1, second2, seconds);
  updateDigits(millisecond1, millisecond2, milliseconds);
}

function updateDigits(digit1, digit2, value) {
  let tens = Math.floor(value / 10);
  let ones = value % 10;

  digit1.textContent = tens;
  digit2.textContent = ones;
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
