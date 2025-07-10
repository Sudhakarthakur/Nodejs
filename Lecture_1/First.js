console.log("welcome to node js server ");

const fs = require('fs');
fs.writeFile("output.txt","Writing File" ,(err) =>{
  if(err) console.log("error occurred");
  else console.log('File Written sucssefully');
});