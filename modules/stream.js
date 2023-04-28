var fs = require ('fs');

var ReadStream = fs.createReadStream("package.json");

var info = "";

ReadStream.on('data', function(chunk){
    console.log("streaming is started") 
    info += chunk; 
})
ReadStream.on('err', function(err){

    console.log(err) 
})
ReadStream.on('end', function(){
    console.log("streaming is ended") 
    console.log(info) 
})