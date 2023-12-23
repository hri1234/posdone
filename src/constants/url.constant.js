const ROUTES_GATEWAY = "/";
export const ROUTES_URL = {
  HOME: ROUTES_GATEWAY,
  COUNTER_CHECKOUT: "/Counter-Checkout",
  CUSTOMER_ORDER: "/Customer-Order",
  KITCHEN_ORDER: "/Kitchen-order",
  MENU_STOCK: "/menu",
  ADD_MENU: "/menu/addUpdate",
  SALESORDER: "/SalesOrder",
  TABLE_BOOKING: "/table-booking",
  ADD_CUSTOMER: "/addcustomer",
  PRINTING: "/printing",
  PRODUCTS: "/products",
  PURCHASEORDERLIST: "/purchaseorder",
  ADD_PRINTING: "/printing/addUpdate",
  ADD_PRODUCT: "/products/addUpdate",
  ADD_ADD_CUSTOMER: "/addcustomer/addUpdate",
  ONLINE_ORDER: "/onlineorder",
  PURCHASE: "/purchase",
  PURCHASEORDER: "/purchaseorder",
  PURCHASERETURNLIST: "/purchasereturnlist",
  PURCHASESUPLIRE: "/PurchaseSuplire",
  LOGIN: "/login",
  LOGOUT: "/logout",
  NOT_FOUND: "/404",
  KITCHEN_ORDEREX: "/KITCHEN_ORDEREX",
};

// const API_GATEWAY = "http://localhost:8000/api";
const API_GATEWAY = "https://pos-api-3v8o.onrender.com/api";
// const API_GATEWAY = "https://poshritik.onrender.com/api";

export const API_URL = {
  LOGIN: `${API_GATEWAY}/user/login`,
  LOGIN_ADMIN: `${API_GATEWAY}/user/admin-login`,

  REGISTER: `${API_GATEWAY}/user/register`,

  UPLOAD_FILES: `${API_GATEWAY}/upload/`,
  DELETE_FILES: `${API_GATEWAY}/delete-img`, // /id={id}

  GET_ALL_PRODUCTS: `${API_GATEWAY}/product/`,
  GET_SINGLE_PRODUCT: `${API_GATEWAY}/product/`, // /id={id}
  CREATE_PRODUCT: `${API_GATEWAY}/product`,
  UPDATE_PRODUCT: `${API_GATEWAY}/product`, // /id={id}
  DELETE_PRODUCT: `${API_GATEWAY}/product/`, // /id={id}

  GET_ALL_CATEGORY: `${API_GATEWAY}/category/`,
  GET_SINGLE_CATEGORY: `${API_GATEWAY}/category/`, // /id={id}
  CREATE_CATEGORY: `${API_GATEWAY}/category`,
  UPDATE_CATEGORY: `${API_GATEWAY}/category`, // /id={id}
  DELETE_CATEGORY: `${API_GATEWAY}/category/`, // /id={id}

  GET_ALL_CUSTOMER: `${API_GATEWAY}/customer/`,
  GET_SINGLE_CUSTOMER: `${API_GATEWAY}/customer/`, // /id={id}
  CREATE_CUSTOMER: `${API_GATEWAY}/customer`,
  UPDATE_CUSTOMER: `${API_GATEWAY}/customer`, // /id={id}
  DELETE_CUSTOMER: `${API_GATEWAY}/customer/`, // /id={id}
};
