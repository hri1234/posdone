import React, { useState, useEffect } from "react";
// npm
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import MUIDataTable from "mui-datatables";
import { Card, Stack, Button, Container, Typography } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
// constants
import {
  TABLE_COLUMN_OPTIONS,
  TABLE_OPTIONS,
  ID_KEY,
  API_STATUS_CODE,
  MESSAGE,
} from "src/constants/content.constant";
import { API_URL, ROUTES_URL } from "src/constants/url.constant";
// components
import { Modal, ConfirmationModal } from "src/Components/modals";
import { CustomBackdrop } from "src/Components";
// redux
import {
  actionProducts,
  actionSelectedProduct,
} from "src/store/slices/product.slice";
// utils
import { deleteMethod, fDate, getMethod } from "src/utils";

const tableOptions = { ...TABLE_OPTIONS };

const COLUMNS = [
  {
    name: "image",
    label: "Image",
    options: {
      filter: false,
      sort: false,
      empty: true,
    },
  },
  {
    name: "title",
    label: "Name",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "category",
    label: "Category",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "description",
    label: "Description",
    options: {
      ...TABLE_COLUMN_OPTIONS,
      setCellProps: () => ({
        style: {
          whiteSpace: "normal",
          wordWrap: "break-word",
        },
      }),
    },
  },
  {
    name: "price",
    label: "Price",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "discount",
    label: "Discount",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "tax",
    label: "Tax",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "updatedAt",
    label: "Updated At",
    options: TABLE_COLUMN_OPTIONS,
  },

  {
    name: "action",
    label: "Action",
    options: {
      filter: false,
      sort: false,
      empty: true,
    },
  },
];

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const createTableRows = (data) => {
    let ROWS;
    if (Array.isArray(data) && data?.length > 0) {
      ROWS = data?.map((x) => {
        return {
          image:
            Array.isArray(x?.images) && x?.images?.length > 0 ? (
              <a
                href={x?.images[0]?.url}
                target="_blank"
                className="thumbImage"
                rel="noreferrer"
                style={{ display: "flex" }}
              >
                <img src={x?.images[0]?.url} alt="" />
              </a>
            ) : null,
          title: x.title,
          category: x?.category,
          description: x?.description,
          price: x?.price,
          discount: x?.discount,
          tax: x?.tax,
          updatedAt: x.updatedAt ? fDate(x.updatedAt) : null,
          action: (
            <>
              <span
                className="text-edit pointer"
                onClick={() => handleEditItem(x)}
                title="Edit"
              >
                <Edit />
              </span>{" "}
              <span
                style={{ marginLeft: "5px" }}
                className="text-danger pointer"
                onClick={() => handleConfirmItemDelete(x)}
                title="Delete"
              >
                <Delete />
              </span>
            </>
          ),
        };
      });
    } else {
      ROWS = [];
    }
    setTableRows(ROWS);
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await getMethod(API_URL.GET_ALL_PRODUCTS, false, true);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        setLoading(false);

        if (Array.isArray(response?.data)) {
          createTableRows(response?.data);
          dispatch(actionProducts(response?.data));
        }
      } else {
        setLoading(false);
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
    navigate(ROUTES_URL.ADD_PRODUCT);
  };
  console.log("tableRows", tableRows);
  const handleDeleteItem = async () => {
    try {
      setLoading(true);
      setShowDeleteModal(false);
      const response = await deleteMethod(
        API_URL.DELETE_PRODUCT + `/${selectedItem[ID_KEY]}`,
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
    navigate(ROUTES_URL.ADD_PRODUCT, {
      state: { id: row[ID_KEY] },
    });
    if (row) {
      dispatch(actionSelectedProduct(row));
    }
  };

  return (
    <>
      <CustomBackdrop loading={loading}>
        <Container maxWidth={false}>
          <Stack mb={2}>
            <Typography variant="h4" gutterBottom>
              Products
            </Typography>
          </Stack>

          <Card>
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
            <MUIDataTable
              data={tableRows}
              columns={COLUMNS}
              options={tableOptions}
            />
          </Card>
        </Container>
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
    </>
  );
};

export default Products;
