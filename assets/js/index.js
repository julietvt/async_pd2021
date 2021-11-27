// Асинхронный код выполняется только после синхронного!!!
// status 200 *, 404-not found

/*
'use strict';

const store = {
  users: null,
  isFetching: false,
  error: null,
};

const request = new XMLHttpRequest();

const btn = document.getElementById('loadUsers');

btn.onclick = function () {
  // false - синхронно, true - ассинхронно
  request.open('GET', '../../assets/data/users.json', true);
  request.send();
};

request.onloadstart = function () {
  store.isFetching = true;
  //console.log(store);
};

request.onloadend = function () {
  store.isFetching = false;
  if (this.status >= 200 && this.status < 300) {
    store.users = JSON.parse(this.responseText);
  } else {
    store.error = new Error(`${this.status} ${this.statusText}`);
  }
};

*/

/*
fetch('../../assets/data/users.json')
  .then(loadUsersResolve)
  .then(logData)
  .catch(loadUsersReject);

function loadUsersResolve(response) {
  return response.json();
}

function logData(data) {
  console.log(data);
}

function loadUsersReject(response) {
  console.log(response);
}

/*
function loadUsersResolve(response) {
  console.log(response);
  const loadUsers = response.json();
  console.log(loadUsers);
}

function loadUsersReject(response) {
  console.log(response);
}
*/

// Promise

//1

const promise1 = new Promise(fun1);

function fun1(resolve, reject) {
  console.log("I'm running");
}

// 2

const promise2 = new Promise(function (resolve, reject) {
  console.log("I'm running");
});

// Получить число меньше 5. Создать обещание

let promiseGetNumberLessThan5 = new Promise(funFor5);

function funFor5(resolve, reject) {
  let number = Math.random() * 10;
  console.log('number=', number);
  if (number < 5) resolve(number);
  else reject(new Error('Reject. Number is ' + number));
}
