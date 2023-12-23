import PropTypes from "prop-types";
import { Close } from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
// components
import ProfilePopover from "src/Components/selection/ProfilePopover";
// css
import "./dashboardNavbar.scss";
// constants
import { ROUTES_URL } from "src/constants/url.constant";
// ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 50;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
  // backdropFilter: "blur(6px)",
  // WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: "#ffffff", // alpha(theme.palette.background.default, 0.72),
  zIndex: "1250",
  // [theme.breakpoints.up("lg")]: {
  //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  // },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: "0px 20px 0px 20px",
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ toggleSidebar, isOpenSidebar }) {
  return (
    <RootStyle className="dashboardNavbar">
      <ToolbarStyle>
        <Box className="navbar-brand">
          <span className="me-3">
            {isOpenSidebar ? (
              <Close
                onClick={() => toggleSidebar()}
                htmlColor="#092c40"
                fontSize="large"
                className="pointer"
              />
            ) : (
              <i
                className="fa-solid fa-bars-sort pointer"
                style={{ fontSize: "25px", color: "rgb(9, 44, 64)" }}
                onClick={() => toggleSidebar()}
              />
            )}{" "}
          </span>
          <span className="navbar-logo">
            <i
              className="fas fa-registered"
              style={{
                color: "white",
                fontSize: "15px",
                lineHeight: "30px",
                textAlign: "center",
                width: "30px",
                height: "30px",
                borderRadius: "40%",
                backgroundColor: "rgb(9, 44, 64)",
              }}
            />
          </span>
          <Link className="navbar-brand fs-4" to={ROUTES_URL.HOME}>
            <b>REGISTER</b>
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <div className="main">
                <div className="input-group mt-3">
                  <button className="btn btn-light " type="button">
                    <i
                      className="fa-solid fa-magnifying-glass"
                      style={{ fontSize: "20px" }}
                    />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary border-start-0"
                      type="button"
                      style={{
                        backgroundColor: "white",
                        border: "1px solid rgb(204, 203, 203)",
                      }}
                    >
                      <i
                        className="fa-duotone fa-barcode-read"
                        style={{ fontSize: "25px", color: "#00003E" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">
                <i
                  className="fa fa-bell"
                  style={{
                    color: "#0A1E3C",
                    fontSize: "26px",
                    lineHeight: "45px",
                    textAlign: "center",
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link " aria-current="page" href="#">
                <i
                  className="fa fa-envelope"
                  style={{
                    color: "#0A1E3C",
                    fontSize: "26px",
                    lineHeight: "45px",
                    textAlign: "center",
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">
                <i
                  className="fa fa-plus-circle"
                  style={{
                    color: "#0A1E3C",
                    fontSize: "26px",
                    lineHeight: "45px",
                    textAlign: "center",
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </li>
            
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">
                <i
                  className="fa-solid fa-arrows-rotate"
                  style={{
                    color: "#0A1E3C",
                    fontSize: "26px",
                    lineHeight: "45px",
                    textAlign: "center",
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </li>
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">
                <div className="btn-group dropstart">
                  <i
                    className="fa-solid fa-grid"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      color: "#0A1E3C",
                      fontSize: "26px",
                      lineHeight: "45px",
                      textAlign: "center",
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                    }}
                  ></i>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        {" "}
                        <i className="fa-regular fa-id-card-clip me-2" />
                        Merchant ID
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <i className="fa-solid fa-notes me-2" />
                        Add Note
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        {" "}
                        <i className="fa-regular fa-cash-register me-2" />
                        Open Register
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        {" "}
                        <i className="fa-regular fa-language me-2" />
                        Languages
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        {" "}
                        <i className="fa-duotone fa-gear-complex me-2" />
                        Support
                      </button>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <ProfilePopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
