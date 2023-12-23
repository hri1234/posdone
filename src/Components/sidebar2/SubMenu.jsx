// css
import "./submenu.scss";
// npm
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
// const SubMenu = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);

//   const showSubnav = () => setSubnav(!subnav);

//   return (
//     <>
//       <NavLink  className='link' to={item.path} onClick={item.subNav && showSubnav}>
//         <div>
//           {item.icon}
//           <div>{item.name}</div>
//         </div>
//         <div>
//           {item.subNav && subnav
//             ? item.iconOpened
//             : item.subNav
//             ? item.iconClosed
//             : null}
//         </div>
//       </NavLink>
//       {subnav &&
//         item.subNav.map((item, index) => {
//           return (
//             <Link  className='Link' to={item.path} key={index}>
//               {item.icon}
//               <div>{item.title}</div>
//             </Link>
//           );
//         })}
//     </>
//   );
// };

// export default SubMenu;

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
                {item.icon}
              </div>
              <div
                className="link_text"
                style={{ display: sidebarOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>

            //    <NavLink
            //        to={item.path}
            //        key={index}
            //        className="link"
            //        activeclassName="active"
            //        >
            //        <div className="icon">{item.icon}</div>
            //        <div
            //            style={{ display: isOpen ? "block" : "none" }}
            //            className="link_text"
            //        >
            //            {item.name}

            //        </div>
            //    </NavLink>
          );
        })}
    </>
  );
};

export default SubMenu;
