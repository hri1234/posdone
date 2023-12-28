import React, { useState } from "react";
// npm
// import "./sidebar.scss";
// import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

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
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { IconContext } from 'react-icons/lib';

const Sidebar = (props) => {
  const { isOpenSidebar, toggleSidebar } = props;
  const isOpen = isOpenSidebar;
  // console.log("isOpen", isOpenSidebar, isOpen);
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
      name: "Online Kitchen Order",
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
      path: ROUTES_URL.KITCHEN_ORDEREX,
      name: "Offline Kitchen Order",
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
      path: ROUTES_URL.ONLINE_ORDER,
      name: "Online Order",
      icon: "fa-solid fa-box-circle-check fs-6",
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
      path: ROUTES_URL.COUNTER_CHECKOUT,
      name: "Checkout",
      icon: "fa-duotone fa-credit-card fs-6",
    },
    {
      
      name: "Reports",
      icon: "fa-solid fa-house fs-6",
      // icon: <IoBagAddSharp />,
      subNav: [
        {
          path: ROUTES_URL.PURCHASEORDER,
          name: "Purchase Order",
          // icon: <TbBus />,
        },

        {
          path: ROUTES_URL.SALESORDER,
          name: "Sales Order",
          // icon: <FaListAlt />,
        },
        {
          path: ROUTES_URL.PURCHASESUPLIRE,
          name: "Purchase Suplire",
          // icon: <FaSitemap />,
        },
      ],
    },
    {
      path: ROUTES_URL.HOME,
      name: "Contacts",
      icon: "fa-solid fa-phone fs-6",
    },
     {
      
      name: "Customer",
      icon: "fa-solid fa-house fs-6",
      // icon: <IoBagAddSharp />,
      subNav: [
        {
          path: ROUTES_URL.ADD_CUSTOMER,
          name: "Add Customer",
          // icon: <TbBus />,
        },

        {
          path: ROUTES_URL.ADD_ADD_CUSTOMER,
          name: "Add customerForm",
          // icon: <FaListAlt />,
        },
        {
          path: ROUTES_URL.PURCHASESUPLIRE,
          name: "Purchase Suplire",
          // icon: <FaSitemap />,
        },
      ],
    },
    // {
    //   path: ROUTES_URL.HOME,
    //   name: "Add Customer",
    //   icon: "fa-solid fa-globe fs-6",
    // },
    {
      path: ROUTES_URL.TABLE_BOOKING,
      name: "Table Booking",
      icon: "fa-solid fa-calculator fs-6",
    },
    // {
    //   path: ROUTES_URL.TABLE_BOOKING,
    //   name: "Table Booking",
    //   // icon: <MdTableChart />,
    // },

    // {
    //   path: ROUTES_URL.PURCHASE,
    //   name: "Purchase",
    //   icon: "fa-solid fa-house fs-6",
    //   // icon: <IoBagAddSharp />,
    //   subNav: [
    //     {
    //       path: ROUTES_URL.PURCHASEORDER,
    //       name: "Purchase Order",
    //       // icon: <TbBus />,
    //     },

    //     {
    //       path: ROUTES_URL.PURCHASERETURNLIST,
    //       name: "Purchase Return",
    //       // icon: <FaListAlt />,
    //     },
    //     {
    //       path: ROUTES_URL.PURCHASESUPLIRE,
    //       name: "Purchase Suplire",
    //       // icon: <FaSitemap />,
    //     },
    //   ],
    // },
  ];

  return (
    <>
      <div style={{ width: isOpen ? "250px" : "50px"  }} className="sidebar">
        <div className="card" style={{marginTop:"34px"}}>
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
    </>
  );
};

export default Sidebar;
