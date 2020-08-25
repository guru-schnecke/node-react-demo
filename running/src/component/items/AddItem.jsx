import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;
export default class AddItem extends Component {
  state = {
    name: "",
    picture: "",
    text: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // e.target.value
    // e.target.name
  };

  submitHandler = () => {
    console.log(this.state);
    Axios.post(`${URL}/items`, this.state)
      .then((res) => {
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let { name, picture, text } = this.state;
    return (
      <div>
        <h1>Add Item</h1>
        <div>
          <Row>
            <Form.Control
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="picture"
              value={picture}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="text"
              value={text}
              onChange={this.changeHandler}
            />
          </Row>
          <Button onClick={this.submitHandler}>Submit</Button>
        </div>
      </div>
    );
  }
}
