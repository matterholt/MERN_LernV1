const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// route to get exercises
router.runInContext("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.JSON(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});
