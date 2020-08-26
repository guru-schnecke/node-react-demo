import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Item from "./component/items/Item";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Navigation from "./component/Navigation";
import Axios from "axios";
import AddItem from "./component/items/AddItem";

const URL = process.env.REACT_APP_URL;
export default class App extends Component {
  mounted = true;
  state = {
    items: [],
  };

  fetchItems = () => {
    Axios.get(`${URL}/items`, {
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY0NWQyMzg5MTYxZWRiY2FiNTQ2MDEzIn0sImlhdCI6MTU5ODQxMzY2NiwiZXhwIjoxOTU4NDEzNjY2fQ.D9oMAE3sbi7_jjs8Wr61exjyCRzGd_ZKqABwS0GdArQ",
      },
    })
      .then((res) => {
        console.log(res.data);
        // if (this.mounted) {
        this.setState({ items: res.data.items });
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  loginHandler = (credentials) => {
    //login here
    Axios.post(`${URL}/auth/login`, credentials)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchItems();
  }

  // componentWillMount() {
  //   this.mounted = false;
  // }

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
          <Route path="/item/add" exact render={() => <AddItem />} />
          <Route path="/item/:id" component={Item} />
          <Route path="/register" exact render={() => <Register />} />
          <Route
            path="/login"
            exact
            render={() => <Login login={this.loginHandler} />}
          />
        </Switch>
      </Router>
    );
  }
}

//    / all items
//    /:id one single item
//    /register
//    /login
