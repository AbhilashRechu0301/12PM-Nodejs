require('fs'); // This is a global Object

console.log(__filename);
console.log(__dirname);

setInterval(function(){
    var date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}, 2000);

setTimeout(function(){

    console.log("I am out from time Interval")
}, 4000);

setImmediate(function(){
    console.log("I am Out")
}, 2500)