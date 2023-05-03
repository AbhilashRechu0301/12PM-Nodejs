var express = require('express');
var cors = require('cors')
var app = express();
app.use(express.json());
app.use(cors())

app.listen(9633, function(){

    console.log("server is connected");
});

 var products = [
 {
   id: 101,
   name: "product 1",
   price: 349

 },
 {
    id: 102,
    name: "product 2",
    price: 549
 
  },
  {
    id: 103,
    name: "product 3",
    price: 999
 
  }
];

//-------% Get the Products %%-----------------------------------------------------------------------------------------

app.get("/products", function(req, res){
console.log("products Api is triggered");
res.send(products);
});

//------------%% Add the Product   %%----------------------------------------------------------------------------------

app.post("/product", function (req, res){
  var body = req.body;
  console.log(body);
  products.push(body);
 
  res.send({
    message: "Product added successfully"
  })
})

//------------%% Delete the Product   %%-------------------------------------------------------------------------------

app.delete("/product/:productID", function(req, res){
  var Pid = req.params.productID;
  console.log(Pid);

  products.forEach((product, i) => {
   if(product.id==Pid){
      products.splice(i, 1);
      res.send({ message: "Product delete successfully"})
    }
   })
   
})

//------------%% Updated the Product   %%-------------------------------------------------------------------------------

app.put("/product", function(req, res){
  var productuser = req.body;

  products.forEach(product => {
    if(product.id==productuser.id){
       product.name = productuser.name;
       product.price = productuser.price;
       res.send({ message: "Product Updated successfully"})
     }
    })

})


