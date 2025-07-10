// path knows as core module
const path = require('path');
// Express known as External mmodule
const express = require('express');
// root directory known as locla module
const rootDir = require('../utils/pathUtils') ;

const contactRouter = express.Router();


contactRouter.get("/contex-us" ,(req , res ,next) => {
  res.sendFile(path.join(rootDir ,"views" ,"contex-us.html"));
});

contactRouter.post("/contex-us" ,(req,res,next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir,"views","contex-succes.html"));
})

module.exports = contactRouter;