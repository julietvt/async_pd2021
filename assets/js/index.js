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
