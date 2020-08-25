import React, { Component } from "react";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

export default class Item extends Component {
  state = {
    item: null,
  };
  componentDidMount() {
    Axios.get(`${URL}/items/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ item: res.data.item });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let { item } = this.state;
    return (
      <div>
        <h1>Single Item</h1>
        {item ? <div>{item.name}</div> : "ho liao buey!"}
      </div>
    );
  }
}
