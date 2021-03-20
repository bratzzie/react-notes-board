import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import NotesBoard from "./pages/NotesBoard";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={NotesBoard} />
          <Route exact path="/notes/:id/edit" component={EditNote} />
          <Route exact path="/notes/create" component={CreateNote} />
        </Switch>
      </div>
    </Router>
  );
}
