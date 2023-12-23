import { useRef, useState } from "react";
// material
import { alpha } from "@mui/material/styles";
import { Box, Avatar, IconButton, Button } from "@mui/material";
import toastr from "toastr";
// components
import MenuPopover from "src/Components/selection/MenuPopover";
// constants
import { ROUTES_URL } from "src/constants/url.constant";
// components
import { CustomBackdrop } from "src/Components";
import { MESSAGE } from "src/constants/content.constant";
// ----------------------------------------------------------------------

export default function ProfilePopover(props) {
  const [loading, setLoading] = useState(false);

  const { user } = props;
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      sessionStorage.clear();
      localStorage.clear();

      toastr.success(MESSAGE.LOGOUT_SUCCESS);
      // navigate(ROUTES_URL.HOME);
      window.location.href = ROUTES_URL.LOGIN;
    } catch (error) {
      setLoading(false);
    }
  };

  const handleMenuClick = (action) => {
    if (action === "LOGOUT") {
      handleLogout();
    }
  };

  return (
    <>
      <CustomBackdrop loading={loading}>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            padding: 0,
            width: 44,
            height: 44,
            ...(open && {
              "&:before": {
                zIndex: 1,
                content: "''",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
          }}
        >
          <Avatar src={user?.profile_img} alt="photoURL" />
        </IconButton>

        <MenuPopover
          open={open}
          onClose={handleClose}
          anchorEl={anchorRef.current || ""}
          sx={{ width: 220 }}
        >
          <Box sx={{ p: 2, pt: 1.5 }}>
            <Button
              fullWidth
              color="inherit"
              variant="outlined"
              onClick={() => handleMenuClick("LOGOUT")}
            >
              Logout
            </Button>
          </Box>
        </MenuPopover>
      </CustomBackdrop>
    </>
  );
}
