import React, { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

export default class Home extends Component {
  state = {
    items: [],
  };
  fetchItems = () => {
    let token = localStorage.getItem("token");

    Axios.get(`${URL}/items`, {
      headers: {
        "x-auth-token": token,
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

  componentDidMount() {
    this.fetchItems();
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Container fluid>
          <Row>
            {this.state.items.map((item) => (
              <Col key={item._id} md="3">
                <Card>
                  <Card.Body>
                    {item.name}
                    <div>
                      <Link to={`/item/${item._id}`}>See Item</Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
