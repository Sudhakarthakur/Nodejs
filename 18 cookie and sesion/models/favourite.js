const mongoose = require("mongoose");

const FavouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Favourite", FavouriteSchema);
