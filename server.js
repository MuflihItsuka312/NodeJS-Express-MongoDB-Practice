const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;
const DB_URI = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB URI

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});