require("dotenv").config();
const express = require("express");
const path = require("path");
const Meal = require("./db.js").Meal;
const Days = require("./db.js").Days;
const cors = require("cors");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.post("/meals", function (req, res) {
  Meal.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(500).send(err));
});

app.get("/meals", function (req, res) {
  Meal.find({})
    .then((result) => {
      const meals = result.map((meal) => {
        return {
          id: meal.id,
          mealName: meal.mealName,
          description: meal.description,
          recipeLink: meal.recipeLink,
          cost: meal.cost,
          rating: meal.rating,
          difficulty: meal.difficulty,
        };
      });
      res.status(200).send(meals);
    })
    .catch((err) => res.status(500).send(err));
});

app.put("/delete", function (req, res) {
  Meal.deleteOne({ id: req.query.id })
    .then(() => res.sendStatus(202))
    .catch((err) => console.log({ err }));
});

app.post("/days", function (req, res) {
  let { date, mealName } = req.body;
  Days.create({
    date: date,
    mealName: mealName,
  })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(500).send(err));
});

app.get("/days", function (req, res) {
  Days.find({})
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
});

app.put("/delete/days", function (req, res) {
  Days.deleteOne({ date: req.query.date }).then((result) =>
    res.sendStatus(202)
  );
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
