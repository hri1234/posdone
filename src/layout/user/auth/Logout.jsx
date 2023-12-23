import React, { useEffect } from "react";
// library
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// constants
import { MESSAGE } from "src/constants/content.constant";
import { ROUTES_URL } from "src/constants/url.constant";
// redux
// import { actionUser } from "src/store/slices/user.slice";

export default function Logout() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
    // dispatch(actionUser(null))

    toastr.success(MESSAGE.LOGOUT_SUCCESS);
    navigate(ROUTES_URL.LOGIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
