'use strict';

const options = {
  results: 10,
  seed: 'abc',
  page: 1,
};

load(options);

const [prevBtn, nextBtn] = document.querySelectorAll('button');
prevBtn.addEventListener('click', btnPrevFun);
nextBtn.addEventListener('click', btnNextFun);

function btnPrevFun(e) {
  if (options.page >= 1) options.page--;
  load(options);
}

function btnNextFun(e) {
  options.page++;
  load(options);
}

function load({ results, seed, page }) {
  fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`
  )
    .then((response) => response.json())
    .then(({ results }) => loadUsersOnPage(results));
}

function loadUsersOnPage(users) {
  // проверить есть ли элемент с классом .list ?
  // если есть то удалить старый список
  // старый список - это список с прошлой страницы
  const list = document.querySelector('.list');
  if (list) list.remove();
  // создание нового списка
  const newList = document.createElement('ul');
  newList.classList.add('list');
  document.getElementById('usersCont').prepend(newList);
  //новый элемент
  //const usersArray = users.map((u) => createUserCard(u));
  //newList.append(...usersArray);
  users.forEach((u) => {
    newList.append(createUserCard(u));
  });
}

function createUserCard({
  name: { first: name, last: surname },
  picture: { medium: img },
}) {
  const item = document.createElement('li');
  item.classList.add('item');
  const userImg = new Image();
  //const userImg = document.createElement('img');
  userImg.setAttribute('src', img);
  userImg.setAttribute('alt', 'user photo');
  userImg.classList.add('userImg');
  item.append(userImg);
  const userFullName = document.createElement('p');
  userFullName.innerText = `${name} ${surname}`;
  userFullName.classList.add('userFullName');
  item.append(userFullName);
  return item;
}
