import React, { useState } from "react";
// npm
import { NavLink } from "react-router-dom";
import {
  FaFlipboard,
  FaUserCheck,
  FaBorderAll,
  FaPrint,
  FaListAlt,
  FaSitemap,
} from "react-icons/fa";
import { FaBowlFood, FaKitchenSet } from "react-icons/fa6";
import {
  MdOutlineRestaurantMenu,
  MdTableChart,
  MdGroupAdd,
  MdBookmarkAdd,
  MdOnlinePrediction,
} from "react-icons/md";
import { PiListDashesFill } from "react-icons/pi";
import { IoBagAddSharp } from "react-icons/io5";
import { TbBus } from "react-icons/tb";

// import React, { useState } from 'react';
// import "./sidebar.scss";
// import { Link, NavLink } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';

//  const Sidebar = () => {
//    const [sidebar, setSidebar] = useState(false);

//    const showSidebar = () => setSidebar(!sidebar);

//    return (
//      <>
//        <IconContext.Provider value={{ color: '#fff' }}>
//           < div className="Nav">
//            <NavLink className="nav"  to='#'>
//              <FaIcons.FaBars onClick={showSidebar} />
//            </NavLink>
//          </div>
//          <div className='sidebarNav' sidebar={sidebar}>
//            < div className="SidebarWrap">
//              <NavLink to='#'>
//                <AiIcons.AiOutlineClose onClick={showSidebar} />
//              </NavLink>
//              {SidebarData.map((item, index) => {
//                return <SubMenu item={item} key={index} />;
//              })}
//            </div>
//          </div>
//        </IconContext.Provider>
//      </>
//    );
//  };

//  export default Sidebar;

// constants
import { ROUTES_URL } from "src/constants/url.constant";
import SubMenu from "./SubMenu";

const Sidebar = (props) => {
  const { isOpenSidebar, toggleSidebar } = props;
  const isOpen = isOpenSidebar;
  console.log("isOpen", isOpenSidebar, isOpen);
  // const [isOpen, setIsOpen] = useState(false);

  const toggle = () => toggleSidebar();
  const menuItem = [
    {
      path: ROUTES_URL.HOME,
      name: "Dashboard",
      icon: "fa-solid fa-house fs-6",
    },
    {
      path: ROUTES_URL.CUSTOMER_ORDER,
      name: "Customer Orders",
      icon: "fa-solid fa-child fs-6",
    },

    {
      path: ROUTES_URL.KITCHEN_ORDER,
      name: "Kitchen Order",
      icon: "fa-solid fa-box-circle-check fs-6",
    },
    {
      path: ROUTES_URL.ONLINE_ORDER,
      name: "Online Order",
      icon: "fa-solid fa-box-circle-check fs-6",

      // subNav: [
      //   {
      //     path: ROUTES_URL.ONLINE_ORDER,
      //     name: "Online order",
      //     icon: <MdOnlinePrediction />,
      //   },
      // ],
    },
    {
      path: ROUTES_URL.PRINTING,
      name: "Printing",
      icon: "fa-duotone fa-typewriter fs-6",
    },
    {
      path: ROUTES_URL.PRODUCTS,
      name: "Products",
      icon: "fa-duotone fa-nfc-pen fs-6",
    },
    // {
    //   path: ROUTES_URL.COUNTER_CHECKOUT,
    //   name: "Checkout",
    //   icon: <FaUserCheck />,
    // },

    {
      path: ROUTES_URL.MENU_STOCK,
      name: "Menus",
      icon: "fa-solid fa-utensils fs-6",
    },
    {
      path: ROUTES_URL.HOME,
      name: "Checkout",
      icon: "fa-duotone fa-credit-card fs-6",
    },
    {
      path: ROUTES_URL.HOME,
      name: "Reports",
      icon: "fa-solid fa-chart-mixed-up-circle-dollar fs-6",
    },
    {
      path: ROUTES_URL.HOME,
      name: "Contacts",
      icon: "fa-solid fa-phone fs-6",
    },
    {
      path: ROUTES_URL.HOME,
      name: "Settings",
      icon: "fa-solid fa-globe fs-6",
    },
    {
      path: ROUTES_URL.HOME,
      name: "",
      icon: "fa-solid fa-calculator fs-6",
    },
    // {
    //   path: ROUTES_URL.TABLE_BOOKING,
    //   name: "Table Booking",
    //   icon: <MdTableChart />,
    // },

    // {
    //   path: ROUTES_URL.PURCHASE,
    //   name: "Purchase",
    //   icon: <IoBagAddSharp />,
    //   subNav: [
    //     {
    //       path: ROUTES_URL.PURCHASEORDER,
    //       name: "Purchase Order",
    //       icon: <TbBus />,
    //     },

    //     {
    //       path: ROUTES_URL.PURCHASERETURNLIST,
    //       name: "Purchase Return",
    //       icon: <FaListAlt />,
    //     },
    //     {
    //       path: ROUTES_URL.PURCHASESUPLIRE,
    //       name: "Purchase Suplire",
    //       icon: <FaSitemap />,
    //     },
    //   ],
    // },
  ];

  return (
    <>
      <div style={{ width: isOpen ? "300px" : "100px" }} className="sidebarr">
        <div className="card">
          <div
            className="card-body  p-0 m-0"
            style={{ width: isOpen ? "text-left" : "text-center" }}
          >
            {menuItem.map((item, index) => (
              <SubMenu
                key={index}
                item={item}
                toggle={() => toggle()}
                sidebarOpen={isOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
