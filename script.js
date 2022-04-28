
 const minutes = document.querySelector('.minutes');
 const seconds = document.querySelector('.seconds');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let s = 0;
let min = 0;
let interval;
//Variables
start.addEventListener('click',startButton);
reset.addEventListener('click',resetButton);
pause.addEventListener('click',pauseButton);

function startButton() {
  clearInterval(interval);
  interval = setInterval(time, 1000);
  min = "0";
}

function pauseButton() {
  clearInterval(interval);
}

function resetButton() {
  clearInterval(interval);
  s = "00";
  min = "00";
  seconds.innerText = s;
  minutes.innerText = min;
}

function time() {
  s++;

  if (s <= 9){
    seconds.innerText = "0" + s;
  }

  if (s > 9){
    seconds.innerText = s;
  }

  if (s == 60){
    s = 0;
    min++; 
  }

  if (min <= 9){
    minutes.innerText = '0' + min;
  }

  if (min > 9){
    minutes.innerText = min;
  }

}
