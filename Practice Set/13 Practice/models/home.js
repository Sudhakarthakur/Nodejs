const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathutil");
const { error } = require("console");

// fake database
// let registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writen Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      console.log("File read:", err, data);
      callback(!err ? JSON.parse(data) : []);
      // if (!err) {
      //   callback(JSON.parse(data));
      // } else {
      //   callback([]);
      // }
    });
  }
};
