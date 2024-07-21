import React from "react";
import "./Navbar.css";

import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";

function Navbar() {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu_icon" src={menu_icon} alt="menu_icon" />
        <img className="logo" src={logo} alt="logo_icon" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search_ico" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload_icon" />
        <img src={more_icon} alt="more_icon" />
        <img src={notification_icon} alt="notification_icon" />
        <img src={profile_icon} className="user-icon" alt="profile_icon" />
      </div>
    </nav>
  );
}

export default Navbar;
