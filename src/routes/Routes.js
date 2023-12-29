import React, { lazy, memo } from "react";
// npm
import { Navigate, useRoutes, Outlet } from "react-router-dom";
// constants
import { ROUTES_URL } from "src/constants/url.constant";
// import OnlineOrder from "src/pages/customerOrder/OnlineOrder";

import PurchaseOrder from "src/pages/purchase/PurchaseOrder";
import SalesOrder from "src/pages/purchase/SalesOrder";
import PurchaseSuplire from "src/pages/purchase/PurchaseSuplire";
import ProductsForm from "src/pages/products/ProductsForm";
import KitchenOrderEX from "src/pages/kitchenOrder/KitchenOrderEX";
import Inventory from "src/pages/inventory/Inventory";
import OnlineOrder from "src/pages/onlineOrder/OnlineOrderPage";
import { OnlineOrderTable } from "src/pages/onlineOrder/OnlineOrderTable";
import Reward from "src/pages/reward/Reward";
import Invoice from "src/pages/invoice/Invoice";
// import BillModal from "src/Components/modals/billmodal/BillModal";

const AddCustomerForm = lazy(() =>
  import("src/pages/addcustomer/AddCustomerForm")
);

// components
const PrivateRoute = lazy(() =>
  import("src/Components/privateRoute/PrivateRoute")
);
// layout
const LoginPage = lazy(() => import("src/layout/user/auth/login/Login"));
const AppLayout = lazy(() => import("src/layout/app/AppLayout"));
const LogoOnlyLayout = lazy(() => import("src/layout/LogoOnlyLayout"));

// pages

const LogoutPage = lazy(() => import("src/layout/user/auth/Logout"));
const Dashboard = lazy(() => import("src/pages/dashboard/Dashboard"));
const CustomerCheckout = lazy(() =>
  import("src/pages/customerCheckout/CustomerCheckout")
);
const CustomerOrder = lazy(() =>
  import("src/pages/customerOrder/CustomerOrder")
);
const KitchenOrder = lazy(() => import("src/pages/kitchenOrder/KitchenOrder"));
const PrintingForm = lazy(() => import("src/pages/printing/PrintingForm"));
const MenuStock = lazy(() => import("src/pages/menuStock/MenuStock"));
const MenuForm = lazy(() => import("src/pages/menuStock/MenuForm"));
const BillModal = lazy(() => import("src/pages/BillModal/BillModal"));
const TableBooking = lazy(() => import("src/pages/tableBooking/TableBooking"));
const Products = lazy(() => import("src/pages/products/Products"));
// const ProductsForm = lazy(() => import("src/pages/products/ProductsForm"));
const AddCustomer = lazy(() => import("src/pages/addcustomer/AddCustomer"));
const Printing = lazy(() => import("src/pages/printing/Printing"));

const Purchase = lazy(() => import("src/pages/purchase/Purchase"));
const Page404 = lazy(() => import("src/pages/Page404/Page404"));
const Charge = lazy(() => import("src/pages/BillModal/Charge"));
const Payment = lazy(() => import("src/pages/BillModal/Payment"));
const SplitCustom = lazy(() => import("src/pages/BillModal/SplitCustom"));
const Done = lazy(() => import("src/pages/BillModal/Done"));
const Openregister = lazy(() => import("src/pages/Managment/Openregister"));
const CustomizedSteppers = lazy(() =>
  import("src/pages/Stepper/CustomizedSteppers")
);
const Calculater = lazy(() => import("src/pages/BillModal/Calculater"));
const Dinning = lazy(() => import("src/pages/diningmanagement/Dinning"));
const KitchenDinning = lazy(() =>
  import("src/pages/diningmanagement/KitchenDinning")
);
const Dinnside = lazy(() => import("src/pages/diningmanagement/Dinnside"));
const Table = lazy(() => import("src/pages/diningmanagement/Table"));
const Bells = lazy(() => import("src/pages/diningmanagement/Bells"));
const Customer = lazy(() => import("src/pages/customer/Customer"));
const Order = lazy(() => import("src/pages/order/Order"));

// const BillModal1 = lazy(() =>{"src/modals/billModal/BillModal1"})
// const MainPage = lazy(() => import("src/pages/mainPage/MainPage"));

// import AddMenu from "src/pages/addmenu/AddMenu";

// const Order = lazy(() => import("src/pages/order/Order"));

const RoutesWrap = () => {
  const appSplitStr = "/";
  return useRoutes([
    {
      path: ROUTES_URL.HOME,
      element: (
        <PrivateRoute>
          <AppLayout />
        </PrivateRoute>
      ),
      children: [
        { element: <Navigate to={ROUTES_URL.HOME} replace /> },
        // {
        //   path: "",
        //   element: <Navigate to={ROUTES_URL.DASHBOARD} replace />,
        // },
        {
          path: "",
          element: <Outlet />,
          children: [{ path: "", element: <Dashboard /> }],
        },

        {
          path: ROUTES_URL.PRODUCTS.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Products />,
            },
            {
              path: ROUTES_URL.ADD_PRODUCT.split(ROUTES_URL.PRODUCTS + "/")[1],
              element: <ProductsForm />,
            },
          ],
        },
        {
          path: ROUTES_URL.PRINTING.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Printing />,
            },
            {
              path: ROUTES_URL.ADD_PRINTING.split(ROUTES_URL.PRINTING + "/")[1],
              element: <PrintingForm />,
            },
          ],
        },

        {
          path: ROUTES_URL.COUNTER_CHECKOUT.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <CustomerCheckout />,
            },
          ],
        },

        {
          path: ROUTES_URL.CUSTOMER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Customer />,
            },
          ],
        },

        {
          path: ROUTES_URL.ORDER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Order />,
            },
          ],
        },
        {
          path: ROUTES_URL.REWARD.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Reward />,
            },
          ],
        },
        {
          path: ROUTES_URL.INVOICE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Invoice />,
            },
          ],
        },

        {
          path: ROUTES_URL.INVENTORY.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Inventory />,
            },
          ],
        },

        {
          path: ROUTES_URL.BELLS.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Bells />,
            },
          ],
        },

        {
          path: ROUTES_URL.TABLE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Table />,
            },
          ],
        },

        {
          path: ROUTES_URL.DINNSIDE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Dinnside />,
            },
          ],
        },

        {
          path: ROUTES_URL.KITCHENDINNING.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <KitchenDinning />,
            },
          ],
        },

        {
          path: ROUTES_URL.DINNING.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Dinning />,
            },
          ],
        },

        {
          path: ROUTES_URL.CALCULATER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Calculater />,
            },
          ],
        },

        // {
        //   path: ROUTES_URL.COUNTER_BILLMODAL1.split(appSplitStr)[1],
        //   element: <Outlet />,
        //   children: [
        //     {
        //       path: "",
        //       element: <BillModal1 />,
        //     },
        //   ],
        // },

        {
          path: ROUTES_URL.CHARGE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Charge />,
            },
          ],
        },

        {
          path: ROUTES_URL.PAYMENT.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Payment />,
            },
          ],
        },

        {
          path: ROUTES_URL.DONE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Done />,
            },
          ],
        },

        {
          path: ROUTES_URL.SPLITCUSTOM.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <SplitCustom />,
            },
          ],
        },

        {
          path: ROUTES_URL.BILL_MODAL.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <BillModal />,
            },
          ],
        },

        {
          path: ROUTES_URL.OPENREGISTER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Openregister />,
            },
          ],
        },

        // {
        //   path: ROUTES_URL.COUNTER_CHECKOUT.split(appSplitStr)[1],
        //   element: <Outlet />,
        //   children: [
        //     {
        //       path: "",
        //       element: <CustomerCheckout />,
        //     },
        //   ],
        // },

        {
          path: ROUTES_URL.CUSTOMER_ORDER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <CustomerOrder />,
            },
          ],
        },

        {
          path: ROUTES_URL.STEPPER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <CustomizedSteppers />,
            },
          ],
        },

        {
          path: ROUTES_URL.KITCHEN_ORDER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <KitchenOrder />,
            },
          ],
        },

        {
          path: ROUTES_URL.MENU_STOCK.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <MenuStock />,
            },
            {
              path: ROUTES_URL.ADD_MENU.split(ROUTES_URL.MENU_STOCK + "/")[1],
              element: <MenuForm />,
            },
          ],
        },

        {
          path: ROUTES_URL.TABLE_BOOKING.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <TableBooking />,
            },
          ],
        },
        {
          path: ROUTES_URL.KITCHEN_ORDEREX.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <KitchenOrderEX />,
            },
          ],
        },

        {
          path: ROUTES_URL.PURCHASE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Purchase />,
            },
          ],
        },
        // {
        //   path: ROUTES_URL.PURCHASEORDERLIST.split(appSplitStr)[1],
        //   element: <Purchaseorder />,
        //   children: [
        //     {
        //       path: "",
        //       element: <Purchase/>,
        //     },
        //   ],
        // },

        {
          path: ROUTES_URL.PRINTING.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Printing />,
            },
          ],
        },

        {
          path: ROUTES_URL.PURCHASEORDER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <PurchaseOrder />,
            },
          ],
        },

        {
          path: ROUTES_URL.SALESORDER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <SalesOrder />,
            },
          ],
        },
        {
          path: ROUTES_URL.PURCHASESUPLIRE.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <PurchaseSuplire />,
            },
          ],
        },

        {
          path: ROUTES_URL.ONLINE_ORDER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <OnlineOrderTable />,
            },
          ],
        },

        {
          path: ROUTES_URL.ADD_CUSTOMER.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <AddCustomer />,
            },
            {
              path: ROUTES_URL.ADD_ADD_CUSTOMER.split(
                ROUTES_URL.ADD_CUSTOMER + "/"
              )[1],
              element: <AddCustomerForm />,
            },
          ],
        },

        {
          path: ROUTES_URL.LOGOUT.split(appSplitStr)[1],
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <LogoutPage />,
            },
          ],
        },
      ],
    },

    {
      path: ROUTES_URL.HOME,
      element: <LogoOnlyLayout onlyChildren />,
      children: [
        {
          path: "/",
          element: <Outlet />,
          children: [{ path: "/", element: <Dashboard /> }],
        },
        {
          path: ROUTES_URL.LOGIN.split("/")[1],
          element: <LoginPage />,
        },

        { path: ROUTES_URL.NOT_FOUND.split("/")[1], element: <Page404 /> },
        {
          path: "/",
          element: <Navigate to={ROUTES_URL.HOME} />,
        },
        { path: "*", element: <Navigate to={ROUTES_URL.NOT_FOUND} /> },
      ],
    },

    { path: "*", element: <Navigate to={ROUTES_URL.NOT_FOUND} replace /> },
  ]);
};

export default memo(RoutesWrap);
