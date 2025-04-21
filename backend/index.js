const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/kcc')
  .then(() => console.log('MongoDB Connected'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/loan', require('./routes/loan'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(5000, () => console.log('Server running on port 5000'));
