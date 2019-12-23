import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import MainNav from "./Components/MainNav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import BlogPage from "./Components/BlogPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <MainNav />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/blog/:title" component={BlogPage} />
          </Switch>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}
export default App;