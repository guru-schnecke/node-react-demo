import React, { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        <h1>Home</h1>
        <Container fluid>
          <Row>
            {this.props.items.map((item) => (
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
