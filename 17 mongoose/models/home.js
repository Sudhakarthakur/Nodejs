const mongoose = require("mongoose");
const favourite = require("./favourite");

const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  photoUrl: String,
  description: String,
});

homeSchema.pre("findOneAndDelete", async function (next) {
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({ houseId: homeId });
  next();
});

module.exports = mongoose.model("Home", homeSchema);
