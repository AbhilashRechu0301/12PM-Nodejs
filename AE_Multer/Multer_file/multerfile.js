var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer({dest:'./uploadfiles'});

app.get('/', function(req, res){
    res.sendFile(__dirname+ "/form.html");
})
//----------------------% for single file to upload use below one %-------------------------------------
//app.post('/uploadFile', upload.single('mypic'), function(req, res){
//console.log(req.file)
//})

//----------------------% for Multiple files to upload use below one %-------------------------------------
app.post('/uploadFile', upload.array('mypic', 5), function(req, res){
    console.log(req.files)
    })

app.listen(9166, function(){
    console.log("server started!");
})