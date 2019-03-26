import React, { Component } from "react";
import { Jumbotron, Image, Row, Col } from "react-bootstrap";
class SiteInfo extends Component {
  render() {
    return (
      <Jumbotron
        id="site"
        style={{ backgroundColor: "#c8dcf0", margin: "0", textAlign: "center" }}
      >
        <h2 style={{ color: "#c68c28", fontSize: "50px", textAlign: "center" }}>
          This site was built with:
        </h2>
        <Row>
          <Col xs={6} md={4}>
            <p>React</p>
            <Image
              style={{ width: "10vw", position: "left" }}
              src="images/react.svg"
              rounded
              fluid
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              style={{ width: "30vw" }}
              src="images/pages-logo.jpeg"
              rounded
              fluid
            />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
export default SiteInfo;
