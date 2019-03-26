import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: "navsidemenu-li-active-level-" + this.props.level,
      hasChildren:
        typeof this.props.menus !== undefined || this.props.menus === null
    };

    //-- create 1 ref
    this.li = React.createRef();
    this.selectLi = this.selectLi.bind(this);
  }

  selectLi = () => {
    //-- the current click menu <li>
    let currLi = ReactDOM.findDOMNode(this.li.current);

    //-- the root nav <ul>
    let navRoot = ReactDOM.findDOMNode(this.props.nav.current); //-- root nav

    //-- list of all submenus <ul>
    let submenus = navRoot.getElementsByClassName("navsubmenu");

    if (currLi.classList.contains("nav-level-2")) {
      //-- if menu has submenus

      //-- the current menu <li>
      let currSubMenus = currLi.getElementsByClassName("navsubmenu");
      let show = !currSubMenus[0].classList.contains("navsubmenu-active");

      if (show) {
        currSubMenus[0].classList.add("navsubmenu-active");
      } else {
        currSubMenus[0].classList.remove("navsubmenu-active");
      }

      //-- hide all submenus
      for (let sub of submenus) {
        if (sub !== currSubMenus[0]) {
          sub.classList.remove("navsubmenu-active");
        }
      }
    } else {
      //-- if menu has no submenus
      if (!currLi.classList.contains("sub")) {
        //-- this is first level, hide all visible submenus

        for (let sub of submenus) {
          sub.classList.remove("navsubmenu-active");
        }
      }
    }
  };

  render() {
    let theLink = this.props.link;
    let hasLink = theLink !== undefined;
    let theSubMenus = this.props.menus;
    let hasSubMenus = theSubMenus !== undefined;
    //-- let us differentiate menus with sub and without by adding nav-level-2 and nav-level-1 respectively
    let classNm = "navsidemenu-li nav-level-";

    if (!hasSubMenus) {
      classNm += "1";
    } else {
      if (theSubMenus.length > 0) {
        classNm += "2";
      } else {
        classNm += "1";
      }
    }

    if (this.props.level === 2) {
      classNm += " sub";
    }

    return (
      <li className={classNm} ref={this.li} level={this.props.level}>
        {hasLink ? (
          <NavLink
            exact={true}
            activeClassName={this.state.activeClass}
            to={theLink}
          >
            <span onClick={this.selectLi}>{this.props.name}</span>
          </NavLink>
        ) : (
          <span className="navsidemenu-span">
            <span onClick={this.selectLi}>{this.props.name}</span>
          </span>
        )}
        {hasSubMenus ? (
          <ul className="navsubmenu">
            {theSubMenus.map((submenu, i2) => {
              return (
                <Menu
                  key={submenu.name + i2}
                  name={submenu.name}
                  link={submenu.link}
                  icon={submenu.icon}
                  level={2}
                  nav={this.props.nav}
                />
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default Menu;
