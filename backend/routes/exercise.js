const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// route to get exercises
router.route("/").get((req, res) => {
  Exercise.find()
    .then(exercises => res.JSON(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

//
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const data = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    data
  });

  newExercise.save();
  then(() => res.json("Exercise added!")).catch(err =>
    res.status(400).json("Error: " + err)
  );
});

module.exports = router;
