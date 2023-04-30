var fs = require('fs');

var WriteStream = fs.createWriteStream( "abc.txt");

var str = "Hi! how are you?"

WriteStream.write(str, function(err){
    if (err){
        console.log(err)
    }
})

WriteStream.end();

WriteStream.on("finish", function(){

    console.log("wtiting data is finished")
})