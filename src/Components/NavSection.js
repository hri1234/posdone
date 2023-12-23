import { useState } from "react";
// npm
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(2.5),
  color: "#ffffff",
  fontSize: "18px",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// ----------------------------------------------------------------------

function NavItem({ item, active }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children } = item;
  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: "secondary.main",
    fontWeight: "bold",
    bgcolor: theme.palette.primary.main,

    // bgcolor: alpha(
    //   theme.palette.primary.main,
    //   theme.palette.action.selectedOpacity
    // ),
    "&:before": { display: "block" },
  };

  const activeSubStyle = {
    color: "secondary.main",
    fontWeight: "bold",
    bgcolor: theme.palette.primary.main,
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={() => handleOpen()}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
          component={RouterLink}
          to={path}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            component={IconButton}
            sx={{
              width: 16,
              height: 16,
              ml: 1,
              color: isActiveRoot ? "secondary.main" : "#ffffff",
            }}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </Box>
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path, icon } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                    paddingLeft: "36px",
                  }}
                >
                  {/* <ListItemIconStyle sx={{ marginRight: "10px" }}>
                    <Box
                      component="span"
                      sx={{
                        width: 8,
                        height: 8,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#ffffff",
                        transition: (theme) =>
                          theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "secondary.main",
                        }),
                        "&:hover": {
                          bgcolor: "secondary.main",
                        },
                      }}
                    />
                  </ListItemIconStyle> */}{" "}
                  <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();
  const match = (path) => (path ? path === pathname : false);

  // const match = (path) =>
  //   path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
