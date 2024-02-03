const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  FoodName: String,
  FoodType: String,
  FoodCategory: String,
  FoodImg: String,
  FoodPrize: Number,
});

module.exports = mongoose.model("Food", FoodSchema);
