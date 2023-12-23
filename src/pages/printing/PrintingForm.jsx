import React, { useState, useEffect, useId } from "react";
//css
import "./Printing.scss";
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
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import toastr from "toastr";
import { useSelector, useDispatch } from "react-redux";
// components
import { CustomBackdrop } from "src/Components";
// redux
import { actionPrinting } from "src/store/slices/printing.slice";
import { ID_KEY, MESSAGE } from "src/constants/content.constant";
import { ROUTES_URL } from "src/constants/url.constant";

const PrintingForm = () => {
  const uid = useId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxData = useSelector(({ printing }) => printing?.items);

  // console.log("reduxData", reduxData);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(null);

  const { state } = useLocation();

  useEffect(() => {
    try {
      if (state?.id) {
        const selectedItem = reduxData?.filter(
          (f) => f[ID_KEY] === state?.id
        )[0];
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
      // const files = [...e.target.files];
      // let oldImages = formState?.image || [];
      // let newImages = [];
      // let err = "";

      // files.forEach((file) => {
      //   if (!file) {
      //     return (err = "File does not exist.");
      //   }
      //   return newImages.push(file);
      // });
      // if (err) {
      //   toastr.error(err);
      // }
      setFormState({
        ...formState,
        image: { url: URL.createObjectURL(e.target.files[0]) }, // [...oldImages, ...newImages],
      });
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

  const handleSubmit = async (event) => {
    event && event?.preventDefault();

    try {
      let updateData =
        Array.isArray(reduxData) && reduxData?.length > 0 ? [...reduxData] : [];
      if (state?.id) {
        const itemExist = updateData?.findIndex(
          (item) => item[ID_KEY] === state?.id
        );
        if (itemExist > -1) {
          updateData[itemExist] = { ...formState };
        } else {
          updateData.push({
            ...formState,
            [ID_KEY]: uid + reduxData?.length + 1,
          });
        }
      } else {
        updateData.push({
          ...formState,
          [ID_KEY]: uid + reduxData?.length + 1,
          status: false,
        });
      }
      dispatch(actionPrinting(updateData));
      toastr.success(
        state?.id ? MESSAGE.UPDATE_SUCCESS : MESSAGE.CREATE_SUCCESS
      );
      navigate(ROUTES_URL.PRINTING);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <CustomBackdrop loading={loading}>
        <Container maxWidth={false}>
          <Stack mb={5}>
            <Typography variant="h4" gutterBottom>
              {state?.id ? "Update Printer" : " Add Printer"}
            </Typography>
          </Stack>

          <Stack>
            <Card>
              <Container maxWidth={false}>
                <form
                  className="addUpdateForm"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        type="text"
                        label="Title (To add printer easily)"
                        name="title"
                        required
                        value={formState?.title || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        type="text"
                        label="Printer IP Address"
                        name="ipAddress"
                        required={false}
                        value={formState?.ipAddress || ""}
                        onChange={(e) => handleChange(e)}
                        multiline
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        type="number"
                        label="Printer Port"
                        name="printerPort"
                        required={false}
                        value={formState?.printerPort || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        type="text"
                        label="Printer Type"
                        name="printerType"
                        required={false}
                        value={formState?.printerType || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        type="text"
                        label="Printer Interface"
                        name="printerInterface"
                        required={false}
                        value={formState?.printerInterface || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      size="large"
                      type="button"
                      variant="outlined"
                      disabled={loading}
                      onClick={() => navigate(ROUTES_URL.PRINTING)}
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
                </form>
              </Container>
            </Card>
          </Stack>
        </Container>
      </CustomBackdrop>
    </>
  );
};

export default PrintingForm;
