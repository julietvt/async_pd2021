const spinner = document.getElementById('spinner');
let d = 0;

setInterval(rotateSpinner, 1000 / 60);

function rotateSpinner() {
  spinner.style.transform = `rotate(${++d}deg)`;
}

const btn = document.getElementById('hello');
btn.onclick = function () {
  //console.log('Hello');
  alert('Hello');
};
