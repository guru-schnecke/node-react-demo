import React, { Component } from "react";
import Axios from "axios";
import EditItem from "./EditItem";

const URL = process.env.REACT_APP_URL;

export default class Item extends Component {
  state = {
    item: null,
  };

  editItems = (obj, id) => {
    Axios.put(`${URL}/items/${id}`, obj)
      .then((res) => {
        // console.log("done");
        //call method to call a re render
        this.getItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getItem = () => {
    Axios.get(`${URL}/items/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ item: res.data.item });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getItem();
  }
  render() {
    let { item } = this.state;
    return (
      <div>
        <h1>Single Item</h1>
        {item ? (
          <div>
            {item.name}
            <div>{item.text} </div>
            <div>
              <img src={item.picture} width="400" />{" "}
            </div>

            <EditItem item={item} editItem={this.editItems} />
          </div>
        ) : (
          "ho liao buey!"
        )}
      </div>
    );
  }
}
