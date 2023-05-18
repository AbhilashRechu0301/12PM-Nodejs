var express = require("express");
var categoryRouter = express.Router();
var CategoryController = require("../controllers/categories.controller");

categoryRouter.post("/addCategory", CategoryController.addCategory);
categoryRouter.get("/Categories", CategoryController.getAllCategories);
categoryRouter.put("/Category/:id", CategoryController.updateCategory);
categoryRouter.delete("/Category/:id", CategoryController.deleteCategory);

module.exports = categoryRouter;