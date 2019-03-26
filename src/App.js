import React, { Component, Fragment } from "react";

import "./App.css";
import MainNav from "./Components/MainNav";
import ScreenTop from "./Components/ScreenTop";
import MainQuote from "./Components/MainQuote";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import SiteInfo from "./Components/SiteInfo";

/*
These are the default styles for jumbotrons and headings.
they are copied into every other file, here just in case.

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
*/

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainNav />
        <ScreenTop />
        <MainQuote />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <SiteInfo />
      </Fragment>
    );
  }
}
export default App;
