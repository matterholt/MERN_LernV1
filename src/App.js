import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./component/navbar.component";
/*
import ExerciseList from "./component/exercise-list.component";
import EditExercise from "./component/edit-exercise.component";
import CreateExercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";
*/
function App() {
  return (
    <Router>
      <NavBar />
      <br />
    </Router>
  );
}

/*
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
*/

export default App;
