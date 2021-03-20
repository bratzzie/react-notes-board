import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import NotesBoard from "./pages/NotesBoard";

export default function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" component={NotesBoard} />
          <Route path="/notes/:id/edit" component={EditNote} />
          <Route path="/notes/create" component={CreateNote} />
        </Switch>
      </>
    </Router>
  );
}
