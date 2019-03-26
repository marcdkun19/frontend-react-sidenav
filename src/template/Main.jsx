import React, { Component } from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./TopNav";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Title from "./Title";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <TopNav />
          <SideNav />
          <div className="main-content">
            <div className="actual-content">
              <Title />
              <div className="content-body">
                <Route name="Home" exact={true} path="/home" component={Home} />
                <Route
                  name="About"
                  exact={true}
                  path="/about"
                  component={About}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
