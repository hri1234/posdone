// css
import "./submenu.scss";
// npm
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const SubMenu = (props) => {
  const { item, sidebarOpen, toggle } = props;
  const [subnav, setSubnav] = useState(false);
  const showSubnav = (isSub) => {
    toggle();
    if (isSub) {
      setSubnav(!subnav);
    }
  };

  return (
    <>
      <NavLink
        // activeclassName="active"
        className="link sidebar-nvlink"
        to={item.path}
        onClick={() => showSubnav(item.subNav)}
      >
        <h5 className="card-title  p-0 m-0">
          <i className={item.icon} style={{ color: "#1adb40" }} />
        </h5>

        <div
          className="link_text"
          style={{ display: sidebarOpen ? "block" : "none" }}
        >
          {item.name}
        </div>
        {item.subNav && sidebarOpen ? (
          <div className="text">
            <KeyboardArrowDown />
          </div>
        ) : null}
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <NavLink
              className="link"
              to={item.path}
              onClick={() => toggle()}
              key={index}
            >
              <div
                style={{ marginLeft: sidebarOpen ? "20px" : "0px" }}
                className="icon"
              >
                <i className={item.icon} style={{ color: "#1adb40" }} />
              </div>
              <div
                className="link_text"
                style={{ display: sidebarOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          );
        })}
    </>
  );
};

export default SubMenu;
