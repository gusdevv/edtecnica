const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    email: email.value,
    password: password.value,
  }

  const dataGetLocalStorage = window.localStorage.getItem('user');

  const convertDataGetLocalStorage = JSON.parse(dataGetLocalStorage);

  if (convertDataGetLocalStorage.email === data.email && convertDataGetLocalStorage.password === data.password) {
    window.location.pathname = '/';
  } else {
    alert('Email or password is incorrect');
  }


})