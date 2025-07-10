// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathutil");
const homesControllers= require('../controllers/homes');

hostRouter.get("/add-home",homesControllers.getAddHome)
 
hostRouter.post("/add-home", homesControllers.postAddHome ) 

exports.hostRouter = hostRouter;
