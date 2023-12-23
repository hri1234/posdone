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
  actionCustomer,
  actionSelectedCustomer,
} from "src/store/slices/customer.slice";
// utils
import { deleteMethod, fDate, getMethod } from "src/utils";

const tableOptions = { ...TABLE_OPTIONS };

const COLUMNS = [
  {
    name: "generalName",
    label: "Name",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "generalEmail",
    label: "Email",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "generalAddress",
    label: "Address",
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
    name: "generalPhone",
    label: "Phone",
    options: TABLE_COLUMN_OPTIONS,
  },

  {
    name: "orderType",
    label: "Order Type",
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

const AddCustomer = () => {
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
          generalName: x.generalName,
          generalEmail: x?.generalEmail,
          generalPhone: x?.generalPhone,
          generalAddress: x?.generalAddress,
          orderType: x?.orderType,
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

      const response = await getMethod(API_URL.GET_ALL_CUSTOMER, false, true);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        console.log("customer-response?.data", response?.data);
        setLoading(false);

        // if (Array.isArray(response?.data)) {
        createTableRows(response?.data?.result);
        dispatch(actionCustomer(response?.data?.result));
        // }
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
    navigate(ROUTES_URL.ADD_ADD_CUSTOMER);
  };
  console.log("tableRows", tableRows);
  const handleDeleteItem = async () => {
    try {
      setLoading(true);
      setShowDeleteModal(false);
      const response = await deleteMethod(
        API_URL.DELETE_CUSTOMER + `/${selectedItem[ID_KEY]}`,
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
    navigate(ROUTES_URL.ADD_ADD_CUSTOMER, {
      state: { id: row[ID_KEY] },
    });
    if (row) {
      dispatch(actionSelectedCustomer(row));
    }
  };

  return (
    <>
      <CustomBackdrop loading={loading}>
        <Container maxWidth={false}>
          <Stack mb={2}>
            <Typography variant="h4" gutterBottom>
              Customer
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

export default AddCustomer;
