var express = require("express");
var UserRouter = express.Router();
var UserController = require("../controllers/Users.controllers");

UserRouter.post("/addUser", UserController.addUser);
UserRouter.get("/users", UserController.getAllUsers);
UserRouter.put("/user/:id", UserController.updateUser);
UserRouter.delete("/user/:id", UserController.deleteUser);
UserRouter.post("/login", UserController.login);

module.exports = UserRouter;
