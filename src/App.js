import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotesBoard from "./pages/NotesBoard";

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" component={NotesBoard} />
        </Switch>
      </>
    </Router>
  );
}
