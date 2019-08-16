// simple bable
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// connect to the mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection establish successfully");
});
// telling the server were to find the routes
//const exercisesRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

// first parm is the link that is typed in the URL
// second parm will load every thing inside file
//app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);

//start the server
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
