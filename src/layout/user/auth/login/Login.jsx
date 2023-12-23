import React, { useState } from "react";
// css
import "./auth.scss";
// npm
import toastr from "toastr";
import { Navigate, useLocation } from "react-router-dom";
// constants
import { API_STATUS_CODE, MESSAGE } from "src/constants/content.constant";
import { API_URL, ROUTES_URL } from "src/constants/url.constant";
// utils
import { postMethod } from "src/utils/api";
import {
  StoredVariables,
  getSessionState,
  setSessionState,
} from "src/utils/session";
import CustomSpinner from "src/Components/spinners/CustomSpinner";

const LoginLayout = () => {
  const location = useLocation();
  const [formState, setFormState] = useState({});
  const [formName, setFormName] = useState("Login");
  const [role, setRole] = useState("admin");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const payload = { ...formState };
      const url = role === "admin" ? API_URL.LOGIN_ADMIN : API_URL.LOGIN;
      const response = await postMethod(url, payload, false, false);
      setLoading(false);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        if (formName === "Login") {
          toastr.success(MESSAGE.LOGIN_SUCCESS);
          setSessionState(
            StoredVariables.authToken,
            response?.data?.token,
            false
          );

          window.location.href = ROUTES_URL.HOME;
        } else {
          toastr.success(MESSAGE.REGISTER_SUCCESS);
          setFormName("Login");
        }
      } else {
        console.log("else", response?.data);
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const payload = { ...formState, role: role };
      const url = API_URL.REGISTER;
      const response = await postMethod(url, payload, false, false);
      setLoading(false);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        toastr.success(MESSAGE.REGISTER_SUCCESS);
        handleFormChange("Login");
      } else {
        console.log("else", response?.data);
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (formName === "Login") {
        handleLogin();
      } else {
        handleRegister();
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleFormChange = (name) => {
    setFormName(name);
    setFormState({});
  };

  const isAuthenticated = getSessionState(StoredVariables.authToken);

  if (isAuthenticated) {
    return <Navigate to={ROUTES_URL.HOME} state={{ from: location }} />;
  }
  return (
    <div className="authLayout">
      {loading ? <CustomSpinner /> : null}
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="row">
        <div className="col-4    authLayout-col">
          <h4 className="text-center mt-3">{formName}</h4>
          <form onSubmit={(e) => handleSubmit(e)} className="m-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={formState?.email || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={formState?.password || ""}
                required
              />
            </div>
            {formName !== "Login" ? (
              <>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    onChange={handleChange}
                    value={formState?.firstname || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Lirstname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    onChange={handleChange}
                    value={formState?.lastname || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    onChange={handleChange}
                    value={formState?.mobile || ""}
                  />
                </div>
              </>
            ) : null}

            <div className="">
              <button
                type="submit"
                className="btn border-0  py-2 mt-2 w-100 authLayout-submitBtn"
                disabled={loading}
              >
                {" "}
                <b>{formName}</b>{" "}
              </button>

              <div className="authLayout-askAccount">
                {formName === "Login" ? (
                  <>
                    Didn't have an account ?{" "}
                    <span
                      className="authLayout-link"
                      onClick={() => handleFormChange("Register")}
                    >
                      Signup here
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account ?{" "}
                    <span
                      className="authLayout-link"
                      onClick={() => handleFormChange("Login")}
                    >
                      Login here
                    </span>
                  </>
                )}
              </div>

              {formName === "Login" ? (
                <div className="row  mt-4">
                  <div className="col-6 p-2  text-center">
                    <div className="">
                      <button
                        type="button"
                        className={`btn btn-primary w-100 authLayout-roleBtn ${
                          role === "admin" ? "selected" : null
                        }`}
                        onClick={() => setRole("admin")}
                      >
                        Admin
                      </button>
                    </div>

                    {/* <div>
                    <button
                      type="button"
                      className={`btn btn-primary w-100 authLayout-roleBtn ${
                        role === "Manager" ? "selected" : null
                      }`}
                      onClick={() => setRole("Manager")}
                    >
                      Manager
                    </button>
                  </div> */}
                  </div>
                  <div className="col-6 p-2 text-center">
                    <div className="">
                      <button
                        type="button"
                        className={`btn btn-primary w-100 authLayout-roleBtn ${
                          role === "customer" ? "selected" : null
                        }`}
                        onClick={() => setRole("customer")}
                      >
                        Customer
                      </button>
                    </div>
                    <div className="mt-3">
                      {/* <button
                      type="button"
                      className={`btn btn-primary w-100 authLayout-roleBtn ${
                        role === "POS Operator" ? "selected" : null
                      }`}
                      onClick={() => setRole("POS Operator")}
                    >
                      POS Operator
                    </button> */}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
