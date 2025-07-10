const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Home-List",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Boolings ",
    currentPage: "bookings",
  });
};

exports.getFavouritesList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourites-list", {
      registeredHomes: registeredHomes,
      pageTitle: "My Faviourites ",
      currentPage: "favourites",
    });
  });
};
