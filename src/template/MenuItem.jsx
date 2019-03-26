import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import "./MenuItem.css";

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onMenuClick = this.onMenuClick.bind(this);
    console.log("prop", props);
  }

  onMenuClick = e => {
    //e.preventDefault();
    //console.log(e.target);
    //e.target.className = "navsidemenu-li-active-level-1";
    //e.target.addClass("navsidemenu-li-active-level-1");
  };

  onHasSubMenu = () => {
    return this.props.nav.menus && this.props.nav.menus.length > 0;
  };

  onHasLink = () => {
    return this.props.nav.link !== undefined;
  };

  render() {
    return (
      <li className={this.getClassNameLevel1()}>
        {this.onHasLink() ? (
          <NavLink
            exact={true}
            activeClassName="navsidemenu-li-active-level-1"
            to={this.props.nav.link}
            onClick={this.onMenuClick}
          >
            <span>{this.props.nav.name}</span>
          </NavLink>
        ) : (
          <span className="navsidemenu-span">
            <span onClick={this.selectLi}>{this.props.nav.name}</span>
          </span>
        )}
      </li>
    );
  }

  getClassNameLevel1 = () => {
    return "navsidemenu-li nav-level-1";
  };
}

export default MenuItem;
