import React, { useState, useEffect, useId } from "react";
//css
import "./addcustomer.scss";
// library
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Card,
  Container,
  TextField,
  Button,
  Grid,
  FormControl,
  Tabs,
  Tab,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import toastr from "toastr";
import { useSelector, useDispatch } from "react-redux";
// components
import { CustomBackdrop } from "src/Components";
// redux
import { actionCustomer } from "src/store/slices/customer.slice";
// constants
import { API_URL, ROUTES_URL } from "src/constants/url.constant";
import {
  API_STATUS_CODE,
  ID_KEY,
  MESSAGE,
} from "src/constants/content.constant";
import { postMethod, putMethod } from "src/utils";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AddCustomerForm = () => {
  const uid = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxData = useSelector(({ customer }) => customer?.items);

  // console.log("reduxData", reduxData);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(null);

  const { state } = useLocation();
  console.log(state);
  const [valu, setValue] = useState(0);
  let setTap;
  console.log(valu);

  useEffect(() => {
    try {
      if (state?.Tab) {
        const selectedItem = reduxData?.filter(
          (f) => f[ID_KEY] === state?.Tab
        )[0];
        console.log("selectedItem", selectedItem);
        setFormState({
          ...formState,
          ...selectedItem,
        });
      }
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.Tab]);

  useEffect(() => {
    try {
      if (state?.id) {
        const selectedItem = reduxData?.filter(
          (f) => f[ID_KEY] === state?.id
        )[0];
        console.log("selectedItem", selectedItem);
        setFormState({
          ...formState,
          ...selectedItem,
        });
      }
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.id]);

  const handleChange = (e, type) => {
    e && e.preventDefault();
    if (type === "file") {
    } else if (type === "check") {
      setFormState({
        ...formState,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        ...formState,
      };

      const response = state?.id
        ? await putMethod(
            API_URL.UPDATE_CUSTOMER + `/${state?.id}`,
            payload,
            false,
            true
          )
        : await postMethod(API_URL.CREATE_CUSTOMER, payload, false, true);
      console.log("add-cusotmer-response", response);
      setLoading(false);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        if (state?.id) {
          toastr.success(MESSAGE.UPDATE_SUCCESS);
          setFormState({});
          navigate(ROUTES_URL.ADD_CUSTOMER);
        }
      } else if (response?.status === API_STATUS_CODE.CREATED) {
        toastr.success(MESSAGE.CREATE_SUCCESS);
        setFormState({});
        navigate(ROUTES_URL.ADD_CUSTOMER);
      } else {
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // const handleSubmit = async (event) => {
  //   event && event?.preventDefault();

  //   try {
  //     let updateData =
  //       Array.isArray(reduxData) && reduxData?.length > 0 ? [...reduxData] : [];
  //     updateData.push({ ...formState, [ID_KEY]: uid });
  //     dispatch(actionCustomer(updateData));
  //     toastr.success(
  //       state?.id ? MESSAGE.UPDATE_SUCCESS : MESSAGE.CREATE_SUCCESS
  //     );
  //     navigate(ROUTES_URL.ADD_CUSTOMER);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  const TabChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("formState", formState);

  return (
    <CustomBackdrop loading={loading}>
      <Container maxWidth={false}>
        <Stack mb={3}>
          <Typography variant="h4" gutterBottom>
            {state?.id ? "Update Customer" : "Add Customer"}
          </Typography>
        </Stack>

        <Stack>
          <Card>
            <Container maxWidth={false}>
              <form className="addUpdateForm" onSubmit={(e) => handleSubmit(e)}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={setTap ? state : valu}
                      onChange={TabChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="General" {...a11yProps(0)} />
                      <Tab label="Dinning" {...a11yProps(1)} />
                      <Tab label="Take Away" {...a11yProps(2)} />
                      {/* <Tab label="Delivery" {...a11yProps(3)} /> */}
                      {/* <Tab label="Table" {...a11yProps(4)} /> */}
                    </Tabs>
                  </Box>

                  {/* General */}
                  <CustomTabPanel value={valu} index={0}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Name"
                          name="generalName"
                          required
                          value={formState?.generalName || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Email"
                          name="generalEmail"
                          required
                          value={formState?.generalEmail || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Phone"
                          name="generalPhone"
                          value={formState?.generalPhone || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          fullWidth
                          type="textarea"
                          label="Address"
                          name="generalAddress"
                          value={formState?.generalAddress || ""}
                          onChange={(e) => handleChange(e)}
                          multiline
                        />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>

                  {/* dine in */}
                  <CustomTabPanel value={valu} index={1}>
                    Dinning
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Name"
                          name="dinningName"
                          value={formState?.dinningName || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Email"
                          name="dinningEmail"
                          value={formState?.dinningEmail || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Phone"
                          name="dinningPhone"
                          value={formState?.dinningPhone || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          fullWidth
                          type="textarea"
                          label="Address"
                          name="dinningAddress"
                          value={formState?.dinningAddress || ""}
                          onChange={(e) => handleChange(e)}
                          multiline
                        />
                      </Grid>
                    </Grid>
                  </CustomTabPanel>

                  {/* take Away */}
                  <CustomTabPanel value={valu} index={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Name"
                          name="takeAwayName"
                          value={formState?.takeAwayName || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Email"
                          name="takeAwayEmail"
                          value={formState?.takeAwayEmail || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Phone"
                          name="takeAwayPhone"
                          value={formState?.takeAwayPhone || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          fullWidth
                          type="textarea"
                          label="Address"
                          name="takeAwayAddress"
                          value={formState?.takeAwayAddress || ""}
                          onChange={(e) => handleChange(e)}
                          multiline
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <FormControl>
                          <FormLabel id="demo-row-radio-buttons-group-label">
                            Order Type
                          </FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              control={<Radio />}
                              label="Self"
                              name="orderType"
                              value="Self"
                              checked={formState?.orderType === "Self"}
                              onChange={(e) => handleChange(e)}
                            />
                            <FormControlLabel
                              control={<Radio />}
                              label="Deliver"
                              name="orderType"
                              value="Deliver"
                              checked={formState?.orderType === "Deliver"}
                              onChange={(e) => handleChange(e)}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </CustomTabPanel>

                  {/* Delivery */}
                  <CustomTabPanel value={valu} index={3}>
                    Delivery(In progress)
                  </CustomTabPanel>

                  {/* table */}
                  <CustomTabPanel value={valu} index={4}>
                    Table(In progress)
                  </CustomTabPanel>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "5px",
                  }}
                >
                  <Button
                    //  color="success"
                    size="large"
                    type="button"
                    variant="outlined"
                    disabled={loading}
                    onClick={() => navigate(ROUTES_URL.ADD_CUSTOMER)}
                    style={{ marginRight: "5px" }}
                  >
                    Cancel
                  </Button>{" "}
                  <LoadingButton
                    size="large"
                    type="submit"
                    loading={loading}
                    variant="contained"
                  >
                    {state?.id ? "Update" : "Add"}
                  </LoadingButton>
                </Box>
                <Grid />
              </form>
            </Container>
          </Card>
        </Stack>
      </Container>
    </CustomBackdrop>
  );
};

export default AddCustomerForm;
