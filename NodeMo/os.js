var os = require('os');

console.log(os.tmpdir()); //TEMP directory
console.log(os.freemem());//free Memory
console.log(os.machine);//Machine number
console.log(os.hostname());//Name of the PC
console.log(os.homedir());//Home directory
console.log(os.platform());//which os
console.log(os.totalmem());//Total Memory
console.log(os.uptime());//uptime
console.log(os.version());//CPUs