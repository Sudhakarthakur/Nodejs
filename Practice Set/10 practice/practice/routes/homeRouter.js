// path knows as core module
const path = require('path');
// Express known as External mmodule
const express = require('express');
// root directory known as locla module
const rootDir = require('../utils/pathUtils');
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  // console.log("Handling / for Get" ,req.url , req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;