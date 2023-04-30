var os = require('os');

console.log(os.tmpdir()); //TEMP directory
console.log(os.freemem());//free Memory
console.log(os.hostname());//Name of the PC
console.log(os.homedir());//Home directory
console.log(os.totalmem());//Total Memory

if (os.freemem > os.totalmem){
    console.log("It is true")
}
else {
    console.log("False")
}

