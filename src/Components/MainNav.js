import React, { Component, Fragment } from "react";
import { Navbar } from "react-bootstrap";

class MainNav extends Component {
  render() {
    return (
      <Fragment>
        {" "}
        <Navbar
          fixedTop="top"
          bg="dark"
          variant="dark"
          style={{ margin: "0px" }}
        >
          <Navbar.Brand>
            <Navbar.Link href="#top">James McDougall</Navbar.Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Navbar.Link href="#experience">Experience</Navbar.Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Navbar.Link href="#project">Projects</Navbar.Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Navbar.Link href="#education">Education</Navbar.Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Navbar.Link href="#contact">Contact Me</Navbar.Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <Navbar.Link href="#site">About this Site</Navbar.Link>
          </Navbar.Brand>
        </Navbar>
      </Fragment>
    );
  }
}
export default MainNav;
