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
import Stop from "./views/stop";

function App() {
  return (
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/stop" component={Stop} />
    </Router>
  );
}

export default App;
