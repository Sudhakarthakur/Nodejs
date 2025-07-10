// External Module
const express = require("express");
const storeRouter = express.Router();
const storeControllers = require("../controllers/storeController");

storeRouter.get("/", storeControllers.getIndex);
storeRouter.get("/homes", storeControllers.getHomes);
storeRouter.get("/bookings", storeControllers.getBookings);

storeRouter.get("/favourite-list", storeControllers.getFavouritesList);

storeRouter.get("/homes/:homeId", storeControllers.getHomeDetails);

storeRouter.post("/favourites", storeControllers.postAddToFavouritre);

module.exports = storeRouter;
