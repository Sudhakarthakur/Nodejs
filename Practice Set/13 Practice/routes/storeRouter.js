// External Module
const express = require("express");
const storeRouter = express.Router();
const homesControllers = require("../controllers/storeController");

storeRouter.get("/", homesControllers.getIndex);
storeRouter.get("/homes", homesControllers.getHomes);
storeRouter.get("/bookings", homesControllers.getBookings);

storeRouter.get("/favourites", homesControllers.getFavouritesList);

module.exports = storeRouter;
