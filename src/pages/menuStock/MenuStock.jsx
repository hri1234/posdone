import React, { useEffect, useState } from "react";
// css
import "./menuStock.scss";
// npm
import toastr from "toastr";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Stack, Button, Container } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
// constants
import {
  ID_KEY,
  API_STATUS_CODE,
  MESSAGE,
} from "src/constants/content.constant";
import { API_URL, ROUTES_URL } from "src/constants/url.constant";
// components
import { CustomBackdrop } from "src/Components";
import { Modal, ConfirmationModal } from "src/Components/modals";
// redux
import { actionMenu, actionSelectedMenu } from "src/store/slices/menu.slice";
// utils
import { deleteMethod, getMethod } from "src/utils";

const MenuStock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await getMethod(API_URL.GET_ALL_CATEGORY, false, true);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        setLoading(false);

        if (Array.isArray(response?.data))
         {
          console.log(response?.data)
          setTableData(response?.data);
          dispatch(actionMenu(response?.data));
        }
      } else {
        setLoading(false);
        console.log("else", response?.data);
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = (action) => {
    if (action === "DELETE") {
      setShowDeleteModal(false);
    }
  };

  const handleConfirmItemDelete = (row) => {
    setShowDeleteModal(true);
    setSelectedItem(row);
  };

  const handleAddItem = () => {
    navigate(ROUTES_URL.ADD_MENU);
  };
  // console.log("tableData", tableData);
  const handleDeleteItem = async () => {
    try {
      setLoading(true);
      setShowDeleteModal(false);
      const response = await deleteMethod(
        API_URL.DELETE_CATEGORY + `/${selectedItem[ID_KEY]}`,
        {},
        true
      );
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        setLoading(false);
        toastr.success(MESSAGE.DELETE_SUCCESS);
        fetchData();
      } else {
        setLoading(false);
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleEditItem = (row) => {
    navigate(ROUTES_URL.ADD_MENU, {
      state: { id: row[ID_KEY] },
    });
    if (row) {
      dispatch(actionSelectedMenu(row));
    }
  };
  return (
    <>
      <Container maxWidth={false}>
        <CustomBackdrop loading={loading}>
          <div className="pos pos-with-header menuStock" id="pos">
            <div className="pos-content">
              <div className="pos-content-container">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={3}
                >
                  <Stack padding={1}>
                    <Button
                      variant="contained"
                      startIcon={<Add />}
                      onClick={() => handleAddItem()}
                    >
                      Add
                    </Button>
                  </Stack>
                </Stack>

                <div className="row gx-0 d-flex gap-1">
                  {Array.isArray(tableData) && tableData?.length > 0 ? (
                    tableData?.map((menu) => {
                      const menuImage =
                        Array.isArray(menu?.images) && menu?.images?.length > 0
                          ? menu?.images[0]?.url
                          : "/images/placeholder/product.svg";
                      return (
                        <div
                          key={menu?._id}
                          className="col-lg-2 col-md-4 col-sm-6"
                        >
                          <div className="card set_dinner">
                            <div className="pos-stock-product-container">
                              <div className="menu">
                                <div className="menu-img">
                                  <div
                                    className="img"
                                    style={{
                                      backgroundImage: `url(${menuImage})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="menu-info">
                                  <div className="title">{menu?.title}</div>
                                  <div className="desc">
                                    {menu?.description}
                                  </div>
                                  {/* <div className="product-option">
                                  <div className="option">
                                    <div className="option-label">Stock:</div>
                                    <div className="option-input">
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={20}
                                      />
                                    </div>
                                  </div>
                                  <div className="option">
                                    <div className="option-label">
                                      Availability:
                                    </div>
                                    <div className="option-input">
                                      <div className="form-check form-switch">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name=""
                                          id="product1"
                                          defaultChecked=""
                                          defaultValue={1}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="product1"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                </div>
                                <div className="menu-action">
                                  <span
                                    className="text-edit pointer"
                                    onClick={() => handleEditItem(menu)}
                                    title="Edit"
                                  >
                                    <Edit />
                                  </span>{" "}
                                  <span
                                    style={{ marginLeft: "5px" }}
                                    className="text-danger pointer"
                                    onClick={() =>
                                      handleConfirmItemDelete(menu)
                                    }
                                    title="Delete"
                                  >
                                    <Delete />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center">
                      <strong>No Records Found</strong>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={showDeleteModal}
            closeModal={() => handleCloseModal("DELETE")}
            title="Are You Sure Want To Delete?"
            content={<ConfirmationModal />}
            dialogProps={{ fullWidth: true }}
            titleStyle={{ textAlign: "center", marginTop: 2 }}
            aStyle={{ justifyContent: "center", marginBottom: 2 }}
            action={
              <>
                <Button
                  onClick={() => handleCloseModal("DELETE")}
                  disabled={loading}
                >
                  Cancel
                </Button>

                <LoadingButton
                  size="large"
                  type="button"
                  loading={loading}
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteItem()}
                >
                  Delete
                </LoadingButton>
              </>
            }
          />
        </CustomBackdrop>
      </Container>
    </>
  );
};

export default MenuStock;
