// core Module
//const http = require('http');
//local module
const userfile = require('./user');
// External module
const express = require('express');


const app = express();
// middleware calledred by uaing app.user
app.use((req,res,next) => {
  console.log("came in first middleeare",req.url,req.methode);
  next();  // this will call nexrt midllware
});

// secand middleware call
app.use((req,res,next) => {
  console.log("came in secand middleeare",req.url,req.methode);
  res.send("<p>Wlcome to compleate coading Node js</p>")
    // Here not call nexrt midllware
})

 // no need to create server
//const server = http.createServer(app);

const PORT = 3001;
app.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});


