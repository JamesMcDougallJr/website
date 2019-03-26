import React, { Component } from "react";
import { Jumbotron, Image } from "react-bootstrap";
class About extends Component {
  render() {
    return (
      <Jumbotron
        id="about"
        style={{ backgroundColor: "#c8dcf0", margin: "0", textAlign: "center" }}
      >
        <h2 style={{ color: "#c68c28", fontSize: "50px", textAlign: "center" }}>
          About Me!
        </h2>
        <Image style={{ width: "20vw" }} src="images/my-face.jpg" />
        <p style={{ margin: "20px" }}>
          I love my family, friends, tech, and coffee. In that order. As such, I
          do everything I do in order to maximize my time with those things. I
          love nothing more than going down the rabbit hole, pouring myself a
          cup of french press coffee before settling down to learn about a brand
          new technology. I'm enjoy studying IoT, systems, and hardware, but am
          interested in any tech job! I'm currently in the market for a Software
          Engineering Internship.
        </p>
      </Jumbotron>
    );
  }
}
export default About;
