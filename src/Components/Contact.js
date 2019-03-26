import React, { Component } from "react";
import { Jumbotron, Image, Row, Col } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Jumbotron
        id="contact"
        style={{ backgroundColor: "#c8dcf0", margin: "0", textAlign: "center" }}
      >
        <h2 style={{ color: "#c68c28", fontSize: "50px", textAlign: "center" }}>
          Contact Me
        </h2>
        <h3 style={{ color: "#4185f2", textAlign: "center" }}>
          The best way to contact me is via my school email: jmcdouga@ucsd.edu
        </h3>
        <Row>
          <Col xs={6} md={4}>
            <p>Facebook</p>
            <a href="https://www.facebook.com/james.mcdougall.5059">
              <Image style={{ width: "10vw" }} src="images/facebook-logo.png" />
            </a>
          </Col>
          <Col xs={6} md={4}>
            <p>Linkedin</p>
            <a href="https://www.linkedin.com/in/james-mcdouga">
              <Image style={{ width: "15vw" }} src="images/linkedin-logo.png" />
            </a>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}
export default Contact;
