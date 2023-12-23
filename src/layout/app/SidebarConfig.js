// npm
import {
  FaFlipboard,
  FaUserCheck,
  FaBorderAll,
  FaPrint,
  // FaListAlt,
  // FaSitemap,
} from "react-icons/fa";
import { FaBowlFood, FaKitchenSet } from "react-icons/fa6";
import {
  MdOutlineRestaurantMenu,
  MdTableChart,
  MdGroupAdd,
  MdBookmarkAdd,
  MdOnlinePrediction,
} from "react-icons/md";
// import { PiListDashesFill } from "react-icons/pi";
// import { IoBagAddSharp } from "react-icons/io5";
// import { TbBus } from "react-icons/tb";
// constants
import { ROUTES_URL } from "src/constants/url.constant";
// ----------------------------------------------------------------------

const sidebarConfig = [
  {
    title: "Dashboard",
    path: ROUTES_URL.HOME,
    icon: <FaFlipboard />,
  },
  {
    path: ROUTES_URL.ADD_CUSTOMER,
    title: "Customer",
    icon: <MdGroupAdd />,
  },

  {
    path: ROUTES_URL.CUSTOMER_ORDER,
    title: "Customer Orders",
    icon: <FaBorderAll />,

    // children: [
    //   {
    //     path: ROUTES_URL.ONLINE_ORDER,
    //     title: "Online order",
    //     icon: <MdOnlinePrediction />,
    //   },
    // ],
  },
  {
    path: ROUTES_URL.PRINTING,
    title: "Printing",
    icon: <FaPrint />,
  },
  // {
  //   path: ROUTES_URL.COUNTER_CHECKOUT,
  //   title: "Checkout",
  //   icon: <FaUserCheck />,
  // },

  {
    path: ROUTES_URL.KITCHEN_ORDER,
    title: "Kitchen Order",
    icon: <FaKitchenSet />,
  },
  {
    path: ROUTES_URL.PRODUCTS,
    title: "Products",
    icon: <MdBookmarkAdd />,
  },
  {
    path: ROUTES_URL.MENU_STOCK,
    title: "Menu Stock",
    icon: <MdOutlineRestaurantMenu />,
  },

  // {
  //   path: ROUTES_URL.TABLE_BOOKING,
  //   title: "Table Booking",
  //   icon: <MdTableChart />,
  // },

  // {
  //   path: ROUTES_URL.PURCHASE,
  //   title: "Purchase",
  //   icon: <IoBagAddSharp />,
  //   children: [
  //     {
  //       path: ROUTES_URL.PURCHASEORDER,
  //       title: "Purchase Order",
  //       icon: <TbBus />,
  //     },

  //     {
  //       path: ROUTES_URL.PURCHASERETURNLIST,
  //       title: "Purchase Return",
  //       icon: <FaListAlt />,
  //     },
  //     {
  //       path: ROUTES_URL.PURCHASESUPLIRE,
  //       title: "Purchase Suplire",
  //       icon: <FaSitemap />,
  //     },
  //   ],
  // },
];

export default sidebarConfig;
