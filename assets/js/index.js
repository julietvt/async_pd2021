// Асинхронный код выполняется только после синхронного!!!
// status 200 *, 404-not found

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

/*
request.onloadend = function () {
  console.log(this);
};
*/
