import React, { Component } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./component/Home";
import Item from "./component/items/Item";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Navigation from "./component/Navigation";
import Axios from "axios";
import AddItem from "./component/items/AddItem";
import { decode } from "jsonwebtoken";
import PrivateRoute from "./component/PrivateRoute";

const URL = process.env.REACT_APP_URL;
export default class App extends Component {
  state = {
    items: [],
    isAuth: false,
    user: null,
  };

  loginHandler = (credentials) => {
    //login here
    Axios.post(`${URL}/auth/login`, credentials)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        this.setState({
          isAuth: true,
        });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({
          isAuth: false,
        });
      });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");

    if (!(token == null)) {
      let decodedToken = decode(token);

      if (!decodedToken) {
        localStorage.removeItem("token");
      } else {
        this.setState({
          isAuth: true,
        });
      }
    }
  }

  render() {
    let { isAuth } = this.state;
    return (
      <Router>
        <Navigation />

        <Switch>
          <PrivateRoute exact path="/" isAuth={isAuth} component={Home} />
          {/* <Route path="/" exact render={() => <Home />} /> */}
          <Route path="/item/add" exact render={() => <AddItem />} />
          <Route path="/item/:id" component={Item} />
          <Route path="/register" exact render={() => <Register />} />
          <Route
            path="/login"
            exact
            render={() =>
              isAuth ? <Redirect to="/" /> : <Login login={this.loginHandler} />
            }
          />
        </Switch>
      </Router>
    );
  }
}
