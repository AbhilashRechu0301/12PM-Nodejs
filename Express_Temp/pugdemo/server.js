var express= require('express');
var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views', './views');
app.set('view engine', 'pug');
// http://localhost:9717/login


app.get('/login', function(req, res){

    res.render('Form');
})

app.post('/authenticate', function(req, res){
var body = req.body;
console.log("body", body);

if(body.username=="Abhilash" && body.password=="Rechu"){

    res.render('Success', {message:body.username});
}
else{
    res.render("Form", {message:"Login failure"});
}
})
app.listen(9717, function(){

    console.log("server started in port 9717!");
})