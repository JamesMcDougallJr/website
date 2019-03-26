import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
class Education extends Component {
  render() {
    return (
      <Jumbotron
        id="education"
        style={{ backgroundColor: "#c8dcf0", margin: "0", textAlign: "center" }}
      >
        <h2 style={{ color: "#c68c28", fontSize: "50px", textAlign: "center" }}>
          Education
        </h2>
        <p>
          I am currently pursuing a computer engineering degree at UC San Diego,
          with a minor in business. I love hardware and am considering a masters
          in hardware engineering. <br /> I've been an RA in Warren College for
          one year, and am continuing for the 2019-2020 school year.
        </p>
      </Jumbotron>
    );
  }
}
export default Education;
