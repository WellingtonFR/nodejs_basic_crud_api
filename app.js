const express = require('express');
const app = express();
const routes = express.Router();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

mongoose.connect('mongodb://localhost:32768/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');
app.use(express.json());
app.use(cors());

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes/routes'));

app.listen(3001);