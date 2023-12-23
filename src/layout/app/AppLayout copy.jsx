import { useState } from "react";
// npm
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
// css
// import "src/App.css";
// Components
// import Header from "src/Components/header/Header";
import Sidebar from "src/Components/sidebar/Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
}));

function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    // <>
    //   <Header />
    //   <div className="layoutDiv">
    //     <Sidebar />
    //     <main>
    //       <Outlet />
    //     </main>
    //   </div>
    // </>

    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      {/* <Header /> */}
      {/* <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} /> */}
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
        onOpenSidebar={() => setOpen(true)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default AppLayout;
