require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)



const mealSchema = mongoose.Schema({
  mealName: String,
  description: String,
  recipeLink: String,
  cost: String,
  rating: String,
  difficulty: String
})

let Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
