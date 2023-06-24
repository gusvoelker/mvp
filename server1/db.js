require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);

//schemas
const mealSchema = mongoose.Schema({
  id: String,
  mealName: String,
  description: String,
  recipeLink: String,
  cost: String,
  rating: String,
  difficulty: String,
});

const calendarSchema = mongoose.Schema({
  date: String,
  mealName: String,
});

//models
let Meal = mongoose.model("Meal", mealSchema);
let Days = mongoose.model("Days", calendarSchema);

module.exports.Meal = Meal;
module.exports.Days = Days;
