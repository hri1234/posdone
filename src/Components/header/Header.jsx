import React from "react";
import { Link } from "react-router-dom";
// constants
import { ROUTES_URL } from "src/constants/url.constant";
// components
import ProfilePopover from "src/Components/selection/ProfilePopover";

const Header = () => {
  return (
    <div>
      <div id="header" className="app-header   d-flex justify-content-between ">
        <div className="navbar-header">
          <a href="index.html" className="navbar-brand">
            <span className="navbar-logo" /> <b className="me-3px">Restro</b>{" "}
          </a>
          <button
            type="button"
            className="navbar-mobile-toggler"
            data-toggle="app-sidebar-mobile"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="navbar-nav">
          <div className="navbar-item navbar-user dropdown">
            <span className="me-3">
              <ProfilePopover />
            </span>
          </div>
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
    // </div>
  );
};

export default Header;
