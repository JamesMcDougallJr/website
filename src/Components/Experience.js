import React, { Component, Fragment } from "react";
import { Jumbotron, Button } from "react-bootstrap";
const h3Style = {
  color: "#4185f2",
  textAlign: "center"
};

const h4Style = {
  textAlign: "center",
  color: "blue"
};
class Experience extends Component {
  render() {
    return (
      <Jumbotron
        id="experience"
        style={{ backgroundColor: "#c8dcf0", margin: "0", textAlign: "center" }}
      >
        <h2 style={{ color: "#c68c28", fontSize: "50px", textAlign: "center" }}>
          {" "}
          Tech Experience
        </h2>

        <h3 style={h3Style}>
          Backend Developer in Python and C++ at Nimber, Inc.
        </h3>
        <h4 style={h4Style}> OpenCv, Ubuntu, Github</h4>

        <p style={{ textAlign: "center" }}>
          Through my work with student startup Nimber, Inc. I've learned about
          computer vision, machine learning applications, and working with
          embedded systems
        </p>

        <ul>
          <li style={{ textAlign: "left", fontSize: "20px" }}>
            {" "}
            I used the{" "}
            <a href="https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html">
              OpenCv (Python){" "}
            </a>
            computer vision library and numpy arrays to extract facial features
            from photos, match faces to a database
          </li>

          <li style={{ textAlign: "left", fontSize: "20px" }}>
            {" "}
            I used the OpenCv (C++) library on Ubuntu to extract faces from
            video capture using a{" "}
            <a href="https://developer.nvidia.com/embedded/buy/jetson-tx1">
              Nvidia Jetson Tx1
            </a>
          </li>
        </ul>

        <h3 style={h3Style}>
          Tutor with the Computer Science and Engineering department at UCSD
        </h3>
        <h4 style={h4Style}>Advanced Data Structures in C++, Debugging</h4>
        <p style={{ textAlign: "center" }}>
          I love being a tutor in the CSE department. I get to watch other
          students become better developers, and seeing them get excited when
          they discover a solution!
        </p>
        <ul>
          <li style={{ textAlign: "left", fontSize: "20px" }}>
            I helped other students debug their code, showing them how to use
            tools like GDB and
          </li>
        </ul>

        <h3 style={h3Style}>Data Analyst in Python</h3>

        <h4 style={h4Style}>
          Jupyter, <a href="https://pandas.pydata.org/">Pandas</a>,{" "}
          <a href="https://www.statsmodels.org/stable/index.html">
            StatsModels
          </a>
        </h4>

        <p style={{ textAlign: "center" }}>
          I performed data analysis under professor
          <a href="https://sites.google.com/a/eng.ucsd.edu/alvarado/">
            {" "}
            Christine Alvarado{" "}
          </a>
          for an education research project.
        </p>

        <ul>
          <li style={{ textAlign: "left", fontSize: "20px" }}>
            I performed t-tests and z-tests on data which I organized into
            dataframes, and displayed the results of these tests in a Jupyter
            notebook.
          </li>
        </ul>

        <h3 style={h3Style}>Check out the rest of my Resume</h3>
        <Button href="pdf/Resume 2019.pdf">Click Here</Button>
      </Jumbotron>
    );
  }
}
export default Experience;
