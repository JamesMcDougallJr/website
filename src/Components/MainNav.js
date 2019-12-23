import React, {
  Component,
} from "react";
import {
  Navbar
} from "react-bootstrap";
class MainNav extends Component {
  render() {
    return (
        < Navbar fixedTop="top"
          bg="dark"
          variant="dark"
          style={{
            margin: "0px"
          }} >
          <Navbar.Brand >
            <Navbar.Link href="#top" > James McDougall </Navbar.Link>
          </Navbar.Brand >
        </ Navbar>
    );
  }
}
export default MainNav;