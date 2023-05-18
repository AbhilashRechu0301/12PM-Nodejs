var express = require  ('express');
var  ProductRouter = express.Router();
var ProductController = require ('../controllers/Products.contollers');

ProductRouter.post('/addProduct', ProductController.addProduct );
ProductRouter.get('/products', ProductController.getAllProducts);
ProductRouter.put('/product/:id', ProductController.updateProduct);
ProductRouter.delete('/product/:id', ProductController.deleteProduct);

module.exports = ProductRouter;