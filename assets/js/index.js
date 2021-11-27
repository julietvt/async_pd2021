/*
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
*/

// setTimeout, setInterval

//1
/*
setTimeout(() => {
  console.log('Hello');
}, 2 * 1000);
*/

//2
/*
const fun = (who) => {
  console.log('Hello, ' + who + ' !!!');
};

setTimeout(fun, 3 * 1000, 'Vasya');
setTimeout(fun, 4 * 1000, 'Tom');
setTimeout(fun, 1 * 1000, 'Masha');
*/

const fun2 = () => {
  console.log('Hello');
};

const id = setTimeout(fun2, 0);
//clearInterval(id);
