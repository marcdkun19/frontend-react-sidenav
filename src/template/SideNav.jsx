import React, { Component } from "react";
import MenuList from "./MenuList";
import "./SideNav.css";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.sideNavRoot = React.createRef();
  }
  render() {
    return (
      <div className="side-bar">
        <nav>
          <ul className="nav-ul" ref={this.sideNavRoot}>
            <MenuList nav={this.sideNavRoot} />
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideNav;
