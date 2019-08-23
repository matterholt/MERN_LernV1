/**
 *
 *
 * for the tut will not add any more routes.
 * for side/ practice should update and create
 */

const router = require("express").Router();
let User = require("../models/user.model");

// creating the route to GET  users
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});
// create route to add users
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch(err => res.status(404).json("Error: " + err));
});
module.exports = router;
