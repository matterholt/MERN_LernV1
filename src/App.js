import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./component/navbar.component";
import ExerciseList from "./component/exerciseList.component";
import EditExercise from "./component/editExercise.component";
import CreateExercise from "./component/createExercise.component";
import CreateUser from "./component/createUser.component";
function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
