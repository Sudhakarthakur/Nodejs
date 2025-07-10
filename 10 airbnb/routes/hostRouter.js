const path  = require('path');
const rootDir = require('../utils/utilspath');

const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req ,res ,next) => {
 res.sendFile(path.join(rootDir ,'views','addHomme.html'));
})


hostRouter.post("/add-home", (req ,res ,next) => {
  console.log(req.body);
 // __dirname, '../' == rootDir;n
   res.sendFile(path.join(rootDir ,'views','addedHome.html'));
})


module.exports = hostRouter;