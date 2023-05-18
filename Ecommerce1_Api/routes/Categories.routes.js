var express = require ('express');
var CategoryRouter = express.Router();
var CategoryController = require ('../controllers/Categories.controllers');

CategoryRouter.post('/addCategory', CategoryController.addCategory);
CategoryRouter.get('/Categories', CategoryController.getAllCategories);
CategoryRouter.put('/Category/:id', CategoryController.updateCategory);
CategoryRouter.delete('/Category/:id', CategoryController.deleteCategory);

module.exports = CategoryRouter;