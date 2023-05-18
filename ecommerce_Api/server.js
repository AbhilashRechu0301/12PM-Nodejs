var express = require('express');
var mongoose = require ('mongoose');
var cors = require ('cors');
var UserRouter = require('./routes/Users.routes');
var ProductRouter = require('./routes/Products.routes');
var CategoryRouter = require('./routes/categories.route');
var app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.use(ProductRouter);
app.use(CategoryRouter);



mongoose.connect("mongodb://127.0.0.1/Ecommerce").then(
    response=>{
        console.log("connected to DB Ecommerce");
    },
     error=>{
            console.log(error);
        }
)

app.listen(9171, function (){
    console.log("server started in port 9171!");
})