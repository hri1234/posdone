import { useState } from "react";
// npm
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
// css
// import "./mainPage.scss";
// comp
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
// import Sidebar from "src/Components/sidebar/Sidebar";
// import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 60;
const APP_BAR_DESKTOP = 50;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  // flexDirection: "column",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 20,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(2),
  },
}));

function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <RootStyle>
      <DashboardNavbar
        isOpenSidebar={open}
        toggleSidebar={() => setOpen(!open)}
      />
      <DashboardSidebar
        isOpenSidebar={open}
        toggleSidebar={() => setOpen(!open)}
      />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default AppLayout;
