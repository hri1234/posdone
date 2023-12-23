import React, { useState, useEffect } from "react";

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
  Fab,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Delete, Add } from "@mui/icons-material";
import toastr from "toastr";
import { useSelector } from "react-redux";
// components
import { CustomBackdrop } from "src/Components";
// redux
// utils
import { postMethod, putMethod } from "src/utils";
// constants
import {
  API_STATUS_CODE,
  ID_KEY,
  MESSAGE,
} from "src/constants/content.constant";
import { ROUTES_URL, API_URL } from "src/constants/url.constant";

const MenuForm = () => {
  const navigate = useNavigate();
  const reduxData = useSelector(({ menu }) => menu?.items);

  // console.log("reduxData", reduxData);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(null);
  const [files, setFiles] = useState(null);

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
      const newFiles = [...e.target.files];
      let oldImages = formState?.images || [];
      let newImages = [];
      setFiles(newFiles);
      if (Array.isArray(newFiles) && newFiles?.length > 0) {
        newFiles.forEach((file) => {
          return newImages.push(file);
        });
      }

      setFormState({
        ...formState,
        images: [...newImages],
      });
      e.target.value = null;
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

  const handleUpload = async (filesToUpload) => {
    try {
      let formData = new FormData();
      filesToUpload.forEach((file) => {
        return formData.append("images", file);
      });

      const response = await postMethod(
        API_URL.UPLOAD_FILES,
        formData,
        true,
        true
      );

      // console.log("handleUpload", response);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        return response?.data?.images;
      }
      return false;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let uploadImage, payload;
      const notUrlFiles = Array.isArray(formState?.images)
        ? formState?.images.filter((f) => f?.name)
        : [];
      if (notUrlFiles && notUrlFiles?.length > 0) {
        uploadImage = await handleUpload(notUrlFiles);
        payload = {
          ...formState,
          images: uploadImage,
        };
      } else {
        payload = {
          ...formState,
        };
      }

      let response = "";
      response = state?.id
        ? await putMethod(
            API_URL.UPDATE_CATEGORY + `/${state?.id}`,
            payload,
            false,
            true
          )
        : await postMethod(API_URL.CREATE_CATEGORY, payload, false, true);
      // console.log("add-menu-response", response);
      setLoading(false);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        if (state?.id) {
          toastr.success(MESSAGE.UPDATE_SUCCESS);
          setFormState({});
          navigate(ROUTES_URL.MENU_STOCK);
        } else {
          toastr.success(MESSAGE.CREATE_SUCCESS);
          setFormState({});
          navigate(ROUTES_URL.MENU_STOCK);
        }
      } else {
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleDeleteImage = (findex) => {
    let tempImages = [...formState?.images];
    const imagesAfterDelete = tempImages?.splice(0, findex);
    setFormState({
      ...formState,
      images: imagesAfterDelete,
    });
  };
  // console.log("formState", formState);
  return (
    <CustomBackdrop loading={loading}>
      <Container maxWidth={false}>
        <Stack mb={5}>
          <Typography variant="h4" gutterBottom>
            {state?.id ? "Update Menu" : "Add Menu"}
          </Typography>
        </Stack>

        <Stack>
          <Card>
            <Container maxWidth={false}>
              <form className="addUpdateForm" onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
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

                  {/* <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        type="text"
                        label="Icon"
                        name="icon"
                        value={formState?.icon || ""}
                        onChange={(e) => handleChange(e)}
                      />
                    </Grid> */}

                  <Grid
                    item
                    xs={12}
                    md={12}
                    alignItems="center"
                    // style={{ display: "none" }}
                  >
                    <Stack
                      direction="row"
                      spacing={3}
                      mb={2}
                      mt={2}
                      className="image-btn-parent-div"
                    >
                      <FormControl required fullWidth>
                        <label
                          htmlFor="upload-photo"
                          style={{ marginBottom: "10px" }}
                        >
                          <input
                            style={{ display: "none" }}
                            id="upload-photo"
                            type="file"
                            onChange={(e) => handleChange(e, "file")}
                            name="files"
                            accept="image/png, image/jpeg, image/jpg"
                          />
                          <Fab
                            color="primary"
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"
                            style={{ zIndex: 0 }}
                          >
                            <Add /> Upload Image
                          </Fab>
                        </label>
                        {Array.isArray(formState?.images) &&
                        formState?.images?.length > 0
                          ? formState?.images?.map((img, i) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                }}
                                key={img?.name + img?.url + i}
                              >
                                <a
                                  href={img?.url || URL.createObjectURL(img)}
                                  target="_blank"
                                  className="thumbImage"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={img?.url || URL.createObjectURL(img)}
                                    alt=""
                                    width="100px"
                                    height="100px"
                                  />
                                </a>

                                <span title="Delete">
                                  <Delete
                                    width={24}
                                    height={24}
                                    className="text-danger pointer"
                                    onClick={() => handleDeleteImage(i)}
                                  />
                                </span>
                              </Box>
                            ))
                          : null}
                      </FormControl>
                    </Stack>
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
                    onClick={() => navigate(ROUTES_URL.MENU_STOCK)}
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
  );
};

export default MenuForm;
