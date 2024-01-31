import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "./pages/home";
const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
