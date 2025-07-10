// Core Module
const path = require("path");

// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathutil");
const hostControllers = require("../controllers/hostController");

hostRouter.get("/add-home", hostControllers.getAddHome);
hostRouter.post("/add-home", hostControllers.postAddHome);
hostRouter.get("/host-home-list", hostControllers.getHostHomes);

module.exports = hostRouter;
