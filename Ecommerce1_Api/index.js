var express = require ('express');
var mongoose = require ('mongoose');
var app = express();
var cors = require ('cors');
app.use(express.json());
app.use(cors());
var UserRouter = require('./routes/Users.routes');
var ProductRouter = require('./routes/Products.routes');
var CategoryRouter = require('./routes/Categories.routes');
app.use(UserRouter);
app.use(ProductRouter);
app.use(CategoryRouter);

mongoose.connect("mongodb://127.0.0.1/Ott").then(
    response=>{
        console.log("connected to DB Ott");
    },
     error=>{
            console.log(error);
        }
)

app.listen (9991, ()=>{
    console.log("server started in 9991 port");
});