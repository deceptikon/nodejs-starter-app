// import { User } from './models/User.js';
import 'reflect-metadata';
import express from 'express';

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Test app listening on port 8080!');
});
