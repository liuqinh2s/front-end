import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Register from "./views/register";
import Controller from "./views/controller";

function App() {
  return (
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/controller" component={Controller} />
    </Router>
  );
}

export default App;
