var fs = require('fs')


fs.readFile("Hello.txt", function (err, data){

    if (err){
        console.log(err);
    }
    else{
        console.log(data.toString())
        console.log("----------------------------")
    }
})


var response = fs.readFileSync('Hello.txt');

    if (response instanceof Error){
        console.log(response);
    }
    else{
        console.log(response.toString());
        console.log("----------------------------")
    }
         console.log("done")

fs.writeFile("abc.txt", "Hello Developer", function (err){ //overwriting the data in file if you remove "Helo Developer" and add something in that place. sOMETHING WILL BE SHOWN THERE.
    if (err){
        console.log(err);
    }
    else{
        console.log("data written")
    }
})

fs.appendFile("abc.txt", " I am back", function (err){  //to add the data to the data which is already in the text or updating the text
    if (err){
        console.log(err);
    }
    else{
        console.log("data written")
    }
})