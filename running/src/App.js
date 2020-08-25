import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Item from "./component/items/Item";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/item/:id" exact render={() => <Item />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/login" exact render={() => <Login />} />
        </Switch>
      </Router>
    );
  }
}

//    / all items
//    /:id one single item
//    /register
//    /login
