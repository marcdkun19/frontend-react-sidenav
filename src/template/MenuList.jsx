import React, { Component } from "react";
import "./MenuList.css";
import MenuItem from "./MenuItem";

/**
 *  This menu list only supports upto 2-level menu
 */
class MenuList extends Component {
  constructor(props) {
    super(props);

    this.state = { navs: [] };

    this.nav = React.createRef();
  }

  getMenus() {
    return `
      [{
         "name":"Home",
         "icon": "home",
         "link": "/home",
         "level": 1,
         "menus":[]
      },
      {
         "name":"Tools",
         "icon": "home",
         "level": 1,
         "menus":[
            {
               "name":"Manual Card",
               "link":"/manualCard",
               "level": 2,
               "icon":"card"
            },
            {
               "name":"Batch Card",
               "link":"/batchCard",
               "level": 2,
               "icon":"card"
            }
         ]
      },
      {
         "name":"Search",
         "icon": "home",
         "level": 1,
         "menus":[
            {
               "name":"By Profile",
               "link":"/searchProfile",
               "level": 2,
               "icon":"search"
            },
            {
               "name":"By R201",
               "link":"/searchByID",
               "level": 2,
               "icon":"id"
            }
         ]
      },
      {
        "name": "About",
        "icon": "about",
        "link": "/about",
        "level": 1,
        "menus": []
      }
   ]`;
  }

  componentWillMount() {
    this.setMenus();
  }

  setMenus = () => {
    let menus = this.getMenus();

    this.setState({ navs: this.state.navs.concat(JSON.parse(menus)) });
  };

  render() {
    return this.state.navs.map((menu, i) => {
      return <MenuItem key={"menu-" + i} nav={menu} />;
    });
  }
}

export default MenuList;
