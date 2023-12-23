import React, { useState } from "react";
// library
import { Button, Grid, TextField } from "@mui/material";
import toastr from "toastr";
// constants
import { API_STATUS_CODE, MESSAGE } from "src/constants/content.constant";
import { API_URL } from "src/constants/url.constant";
// components
import { CustomBackdrop } from "src/Components";
// utils
import { postMethod, putMethod } from "src/utils";

const AddMenuModal = (props) => {
  const { selectedData, closeModal } = props;

  const [formState, setFormState] = useState(selectedData);
  const [loading, setLoading] = useState(false);

  // onchange event for input
  const handleChange = (e, type) => {
    e && e.preventDefault();
    if (type === "date") {
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

      let response = "";
      console.log("payload", payload);
      response = selectedData?._id
        ? await putMethod(
            API_URL.UPDATE_CATEGORY + `/${selectedData?._id}`,
            payload,
            false,
            true
          )
        : await postMethod(API_URL.CREATE_CATEGORY, payload, false, true);

      if (
        response?.status === API_STATUS_CODE.SUCCESS &&
        response?.data?.ResponseStatus !== "Failed"
      ) {
        toastr.success(
          selectedData?._id ? MESSAGE.UPDATE_SUCCESS : MESSAGE.CREATE_SUCCESS
        );
        closeModal?.();
      } else {
        toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // console.log("formState", formState);

  return (
    <>
      <CustomBackdrop loading={loading}>
        <Grid
          container
          spacing={2}
          component="form"
          onSubmit={(e) => handleSubmit(e)}
          mt={2}
        >
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="text"
              label="Title"
              name="title"
              required
              value={formState?.title || ""}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              size="large"
              type="submit"
              variant="contained"
              disabled={loading}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CustomBackdrop>
    </>
  );
};

export default AddMenuModal;
