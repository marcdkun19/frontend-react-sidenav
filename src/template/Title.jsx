import React, { Component } from "react";
import "./Title.css";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: null };
  }

  componentWillMount() {
    console.log(this.props.location);
  }

  render() {
    return (
      <div className="content-header">
        <span className="content-title">
          ddd
          <Route
            name="Home"
            exact={true}
            path="/home"
            render={() => {
              return <span>Home</span>;
            }}
          />
          <Route
            name="About"
            exact={true}
            path="/about"
            render={() => {
              return <span>About</span>;
            }}
          />
        </span>
      </div>
    );
  }
}

export default withRouter(Title);
