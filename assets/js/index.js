/*
fetch('../../assets/data/users.json')
  .then(loadUsersResolve)
  .then(logData)
  .catch(console.error);

function loadUsersResolve(response) {
  return response.json();
}

function logData(users) {
  // обработка данных
  console.log(users);
  const list = document.getElementById('usersList');
  users.forEach((u) => {
    list.append(createUserCard(u));
  });
}

function createUserCard(u) {
  const item = document.createElement('li');
  item.classList.add('userItem');

  // image
  const userImgCont = document.createElement('div');
  userImgCont.classList.add('imgContainer');

  const userImg = document.createElement('img');
  userImg.setAttribute('src', u.img);
  userImg.setAttribute('alt', 'user photo');
  userImg.classList.add('userImg');

  userImgCont.append(userImg);
  item.append(userImgCont);
  // text
  const userFullName = document.createElement('p');
  userFullName.innerText = `${u.name} ${u.surname}`;
  userFullName.classList.add('userFullName');
  item.append(userFullName);

  return item;
}
*/

/*
const promise1 = new Promise(fun1);

function fun1(resolve, reject) {
  setTimeout(() => reject('err'), 2 * 1000);
}

function fun2(resolve, reject) {
  setTimeout(() => resolve('ok'), 3 * 1000);
}

*/

/*
С помощью промиса setTimeout() : напишите функцию delay(ms),
которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Должен быть возможен вот такой вызов delay(ms).then(doSomething)

Пример использования и эквивалетный вызов setTimeout():

funDelay(1000).then(() => alert("Hello!"))


function sum (a,b) {}

new Promise(function(resolve, reject) { ... });

// **

проверить при этом что число ms является действительно числом (тип Number)
и если да то вернуть соответствующий пропис
*/

/*
function funDelay(timeMS) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, timeMS);
  });
}

funDelay(1 * 1000).then(() => alert('Hello'));
*/

/*
function funDelay2(timeMS) {
  if (!Number.isNaN(timeMS)) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise have status "resolve"');
      }, timeMS);
    });
  } else {
    throw new Promise((resolve, reject) =>
      setTimeout(() => reject(TypeError('Parameter is not a number'), timeMS))
    );
  }
}

//const ms = 2 * 1000;

funDelay2(NaN)
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error);
  });
*/

/*
Напишите функцию, которая последовательно выводит в консоль числа от 1 до 20,
 с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс,
 в течение которых каждые 100мс в консоли появляется очередное число.
 Решение задачи должно использовать setTimeout. (По циклу таймеры не создавать)
 */

/*
//1 bad
for (let i = 1; i <= 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
//2 !!!!
let start = 1,
  end = 20;
const timerId = setInterval(() => {
  start <= end ? console.log(start++) : clearInterval(timerId);
}, 100);
//3
let i = 1;
setTimeout(function funTime() {
  console.log(i++);
  if (i < 21) {
    setTimeout(funTime, 100);
  }
}, 100);
*/
/*
1. Создать promise для каждого типа (number, boolean, string, symbol, null, undefined, object )
2. создать асинхронную функцию для их console.log
*/

const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(true);
const promise3 = Promise.resolve('Hello, Vasya!');
const promise4 = Promise.resolve(Symbol('SOME_ACTION'));
const promise5 = Promise.resolve(null);
const promise6 = Promise.resolve(undefined);
const promise7 = Promise.resolve({ id: 1, name: 'Vasya', age: 20 });

/*
console.log(promise1);
promise1.then((result) => {
  console.log('Result is', result);
});
*/
console.log(promise7);

promise7.then((data) => {
  console.log('Result is', data);
});
