const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    email: email.value,
    password: password.value,
  }

  window.localStorage.setItem('user', JSON.stringify(data))
})