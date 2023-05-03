var express = require('express');
var Router = express.Router();
var products = [{
    id: 1,
    name:"product 1",
    price: 399 
},
{
    id: 2,
    name:"product 2",
    price: 699 
},
{

    id: 3,
    name:"product 3",
    price: 999  
}]
Router.get("/list", function(req, res){

res.send(products);
});

Router.get("/product/:productID", function(req, res){
    var Pid = req.params.productID;
    var requiredProduct={};
    products.forEach(product => {
        if(product.id==Pid){
            requiredProduct=product;
            return;
        }     
    });
    return res.send(requiredProduct);
})
module.exports= Router;