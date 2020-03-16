const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

const Product = mongoose.model('Product');
const ProductController = require('../controllers/ProductController');

routes.get('/', (req, res) => {
    Product.create({
        title: 'React native',
        description: 'Build native apps',
        url: 'url'
    });
    res.send('Página API');
});

routes.get('/product', ProductController.index);
routes.get('/product/:id', ProductController.show);
routes.post('/product', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.destroy);

module.exports = routes;