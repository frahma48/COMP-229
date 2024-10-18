const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes
router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getProductById);
router.post('/api/products', productController.addProduct);
router.put('/api/products/:id', productController.updateProductById);
router.delete('/api/products/:id', productController.deleteProductById);
router.delete('/api/products', productController.deleteAllProducts);
router.get('/products?name=[kw]', productController.findProductsByKw);//Find all products which name contains ‘kw’
module.exports = router;
