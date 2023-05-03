var express = require('express');
var app=express();
app.use(express.json());
var userRouter = require('./Routes/User');
var productRouter = require('./Routes/Products');
app.use("/users", userRouter);
app.use("/products", productRouter);
app.listen(9164, function(){
    console.log("server is started in port 9164!");
})