
// External Module
const express = require('express');
const userRouter = express.Router();
const homesControllers = require('../controllers/homes');

userRouter.get("/", homesControllers.getHomes);

module.exports = userRouter;