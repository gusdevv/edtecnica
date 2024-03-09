const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// carpeta client/home
app.use('/', express.static(path.resolve(__dirname, 'client', 'home')));

// carpeta client/login
app.use('/login', express.static(path.resolve(__dirname, 'client', 'login')))

//carpeta client/register
app.use('/register', express.static(path.resolve(__dirname, 'client', 'register')))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})