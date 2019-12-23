import React, { Component, Fragment } from "react";
import { Carousel, Jumbotron } from "react-bootstrap";
const bImage = "images/nature-background.jpeg";
class ScreenTop extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron
          style={{
            background: `url(${bImage}) no-repeat center center`,
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            backgroundSize: "cover",
            //height: "1000px",
            margin: "0"
          }}
        >
          <h1
            style={{
              textShadow:
                "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
              color: "#e0a33a",
              textAlign: "center",
              marginTop: "200px",
              font: "helvetica"
            }}
          >
            James McDougall
          </h1>
          <Carousel
            controls={false}
            indicators={false}
            nextLabel={null}
            interval={2000}
            style={{
              marginTop: "300px",
              textAlign: "center",
              color: "#4185f2",
              //color: "#e0a33a",
              textShadow:
                "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000"
            }}
          >
            <Carousel.Item>
              <h1>I am a Developer</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>I am an Engineer</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>I am a Leader</h1>
            </Carousel.Item>
          </Carousel>
        </Jumbotron>
      </Fragment>
    );
  }
}
export default ScreenTop;
