import React, { Component } from "react";
import Login from "./public/Login";
import Main from "./template/Main";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      role: null
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = e => {
    e.preventDefault();

    this.setState(
      {
        username: e.target.elements.username.value,
        role: "role"
      },
      () => {
        const user = this.state;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
      }
    );
  };

  render() {
    if (localStorage.getItem("user") == null) {
      return <Login handleLogin={this.handleLogin} />;
    } else {
      return <Main />;
    }
  }
}

export default App;
