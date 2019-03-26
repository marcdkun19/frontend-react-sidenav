import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = e => {
    e.preventDefault();

    this.setState(
      {
        username: "",
        role: ""
      },
      () => {
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    );
  };

  render() {
    return (
      <div className="top-nav">
        <div className="top-nav-left">
          <span className="welcome-top">
            Welcome to Singapore North, Southeast Asia II
          </span>
        </div>
        <div className="user-profile">
          <NavLink to="" className="link" onClick={this.handleLogout}>
            <span>
              Logout <i className="fa fa-sign-out" />
            </span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default TopNav;
