import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Item from "./component/items/Item";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Navigation from "./component/Navigation";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;
export default class App extends Component {
  state = {
    items: [],
  };

  fetchItems = () => {
    Axios.get(`${URL}/items`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ items: res.data.items });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home items={this.state.items} />}
          />
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
