var path = require ("path");

console.log(path.extname("hello.txt"))// EXTENSION NAME EX: abc.js=>output: .js, hello. html=> ouput: .html
console.log(path.isAbsolute("C:\Users\ABHILASH\OneDrive\Desktop\Full stack Practice\12PM-Nodejs\NodeMo\path.js"))// Path os the file

console.log(path.join ("abc", "hello", "nodejs")) //joins the path like abc/hello/nodejs
console.log(path.dirname("C:\Users\ABHILASH\OneDrive\Desktop\Full stack Practice\12PM-Nodejs\NodeMo\path.js"))
