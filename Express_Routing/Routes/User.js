var express = require('express');
var Router = express.Router();

var users=[{
    id: 101,
    name:"Abhilash",
    Address: "Leipzig" 
},
{
    id: 102,
    name:"Uday",
    Address: "Essen" 
},
{

    id: 103,
    name:"Anji",
    Address: "Jena" 
}];
Router.get("/list", function(req, res){

res.send(users);
});

Router.post("/login", function(req, res){
var user = req.body;

if(user.username == "Santosh" && user.password == "Marri"){
    console.log("login success");
    res.send({
        status:200,
        result: true
    })
   
}
else{
    console.log("login failure");
    res.send({
        status:500,
        result: false
    })
}
})

Router.get("/user/:userID", function(req, res){
    var Uid = req.params.userID;
    var requiredUser = {};
    users.forEach(user=>{
        if(user.id==Uid){
            requiredUser=user;
            return;
        }
    })
    return res.send(requiredUser);
})
module.exports= Router;