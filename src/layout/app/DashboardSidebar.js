import { useEffect } from "react";
// npm
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Drawer, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
// components
// import Logo from "../../components/Logo";
import Scrollbar from "src/Components/Scrollbar";
import NavSection from "src/Components/NavSection";
import { MHidden } from "src/Components/@material-extend";
import Sidebar from "src/Components/sidebar/Sidebar";
//
import sidebarConfig from "./SidebarConfig";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    flexShrink: 0,
    // width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------

export default function DashboardSidebar(props) {
  const { isOpenSidebar, onCloseSidebar, onOpenSidebar, toggleSidebar } = props;
  const { pathname } = useLocation();
  const DRAWER_WIDTH = "auto"; // isOpenSidebar ? 300 : 50;

  useEffect(() => {
    if (isOpenSidebar) {
      toggleSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "flex", justifyContent: "flex-end" }}>
        <Box
          component={IconButton}
          sx={{ display: "inline-flex" }}
          onClick={() => onCloseSidebar()}
        >
          <Close htmlColor="#ffffff" />
        </Box>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={true}
          onClose={onCloseSidebar}
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "transparent", // "secondary.main",
              borderRight: "none",
            },
          }}
        >
          {/* {renderContent} */}
          <Sidebar
            isOpenSidebar={isOpenSidebar}
            toggleSidebar={() => toggleSidebar()}
          />
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open={true}
          onClose={onCloseSidebar}
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "transparent", // "secondary.main",
              borderRight: "none",
            },
          }}
        >
          {/* {renderContent} */}
          <Sidebar
            isOpenSidebar={isOpenSidebar}
            toggleSidebar={() => toggleSidebar()}
          />
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
