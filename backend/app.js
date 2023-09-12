require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const path = require('path');

const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

const indexRoute = require('./routes/index.route');

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущен успешно на ${PORT}`);
});