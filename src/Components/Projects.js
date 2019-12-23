import React, { Component } from "react";
import { Jumbotron, Button, Image } from "react-bootstrap";

const jumbotronStyle = {
  backgroundColor: "#c8dcf0",
  margin: "0",
  textAlign: "center"
};
const mainHeading = {
  color: "#c68c28",
  fontSize: "50px",
  textAlign: "center"
};
const h3Style = {
  color: "#4185f2",
  textAlign: "center"
};

const h4Style = {
  textAlign: "center",
  color: "blue"
};
class Projects extends Component {
  render() {
    return (
      <Jumbotron id="project" style={jumbotronStyle}>
        <h2 style={mainHeading}>Projects</h2>
        <h3 style={h3Style}>Cat Fact Messages</h3>
        <h4 style={h4Style}>Python, Flask,Twilio API </h4>
        <Button href="https://github.com/JamesMcDougallJr/cat-messages">
          Click Here to view cat fact messages on github.
        </Button>
        <p style={{ margin: "20px" }}>
          I made a fun little app that allows me to send cat messages to my
          friends and family. Unfortunately, Twilio costs money so I can't send
          an unlimited amount...
        </p>
        <h3 style={h3Style}>Chicago Crime Analysis</h3>
        <h4 style={h4Style}>Jupyter, Python, Pandas</h4>
        <Button href="html/FinalProject.html">
          Click Here to my data analysis project
        </Button>
        <p style={{ margin: "20px" }}>
          For a Cognitive Science group project, I used a Binomial Regression
          model to predict whether district or crime type was a better predictor
          of arrest. My group used Github to make sure we didn't overwrite each
          other's work.
        </p>
        <h3 style={h3Style}>ServerPi</h3>
        <h4 style={h4Style}>PHP, Raspberry Pi, Nginx</h4>
        <p style={{ margin: "20px" }}>
          As an avid photo taker with an older, 16gb iPhone, my mom was in
          desperate need of an easy way to store her older photos. To fix this,
          I decided to make a server in the garage using my Raspberry Pi and a
          hard drive. I used a rudimentary HTML web interface with a button for
          uploading photos (Pictures to come!) and PHP as a back end to transfer
          the image files from her phone to the hard drive. I used port
          forwarding on our WiFi router so I could access my app by typing the
          the PI's IP address.
        </p>
        <h3 style={h3Style}>Diamond Bot</h3>
        <h4 style={h4Style}>C, Arduino</h4>
        <Image style={{ width: "40vw" }} src="images/DiamondBot.jpg" />
        <p style={{ margin: "20px" }}>
          I built a robot using C on the Arduino IDE that manipulated rotors and
          flashed lights
        </p>
        <Button href="https://github.com/JamesMcDougallJr/CSE42ArduinoProject">
          Click here to check out Diamond Bot on Github
        </Button>
        <h3 style={h3Style}>Ultrasonic Sensing Robot (MAUSR)</h3>
        <h4 style={h4Style}>Python, Raspberry Pi</h4>
        <Image style={{ width: "40vw" }} src="images/mausr.png" />
        <p>
          I built a small robot that used ultrasonic sensors to detect and avoid
          obstacles.
        </p>
        <Button href="https://github.com/JamesMcDougallJr/mausr">
          Click here to check out MAUSR on Github
        </Button>
      </Jumbotron>
    );
  }
}
export default Projects;
