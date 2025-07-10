const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathutil");
const { error } = require("console");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

// fake database
// let registeredHomes = [];

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked as favourites");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback); 
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
