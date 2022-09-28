require("dotenv").config();
const express = require("express");
const path = require("path");
const Meal = require('./db.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/meals', function(req, res) {
  //object stored at req.body
  Meal.create({
      mealName: 'tacos',
      description: 'yummy meal of tacos',
      recipeLink: 'www.tacis.com',
      cost: '100',
      rating: '3',
      difficulty: '5'
  })
  .then(() => res.sendStatus(201))
  .catch((err) => res.status(500).send(err));
});

app.get('/meals', function(req, res) {
  Meal.find({})
  .then(result => res.status(200).send(result))
  .catch((err) => res.status(500).send(err));
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);