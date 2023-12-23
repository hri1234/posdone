import React, { useState, useEffect } from "react";
// npm
import { useNavigate } from "react-router-dom";
// import toastr from "toastr";
import MUIDataTable from "mui-datatables";
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  Switch,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";

import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
// constants
import {
  TABLE_COLUMN_OPTIONS,
  TABLE_OPTIONS,
  ID_KEY,
} from "src/constants/content.constant";
// components
import { Modal, ConfirmationModal } from "src/Components/modals";
import { ROUTES_URL } from "src/constants/url.constant";
// redux
import {
  actionPrinting,
  actionSelectedPrinting,
} from "src/store/slices/printing.slice";

const tableOptions = { ...TABLE_OPTIONS };

const COLUMNS = [
  {
    name: "title",
    label: "Title",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "ipAddress",
    label: "IP Address",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "printerPort",
    label: "Printer Port",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "printerType",
    label: "Printer Type",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "printerInterface",
    label: "Printer Interface",
    options: TABLE_COLUMN_OPTIONS,
  },
  {
    name: "status",
    label: "Status",
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

const Printing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const reduxData = useSelector(({ printing }) => printing?.items);
  console.log("reduxData", reduxData);

  const handleChangeStatus = (e, dataIndex) => {
    try {
      e?.preventDefault();
      const tempData = [...reduxData];

      let tempDataUpdated = tempData.map((x) => {
        return {
          ...x,
          status: false,
        };
      });

      tempDataUpdated[dataIndex].status = true;

      setTableData(tempDataUpdated);
      createTableRows(tempDataUpdated);
      dispatch(actionPrinting(tempDataUpdated));
    } catch (error) {
      console.error(error);
    }
  };
  const createTableRows = (data) => {
    let ROWS;
    if (Array.isArray(data) && data?.length > 0) {
      ROWS = data?.map((x, i) => {
        return {
          title: x.title,
          ipAddress: x?.ipAddress,
          printerType: x?.printerType,
          printerInterface: x?.printerInterface,
          printerPort: x?.printerPort,
          status: (
            <>
              <Switch
                inputProps={{ "aria-label": "Status" }}
                onChange={(e) => handleChangeStatus(e, i)}
                checked={x?.status}
              />
            </>
          ),
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
    setTableData(reduxData);
  };

  useEffect(() => {
    createTableRows(reduxData);
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
    navigate(ROUTES_URL.ADD_PRINTING);
  };
  console.log("tableData", tableData);
  const handleDeleteItem = () => {
    const tempData = [...tableData];
    const dataIndex = tempData?.findIndex(
      (y) => y[ID_KEY] === selectedItem[ID_KEY].toString()
    );
    const filteredItems = tempData?.splice(0, dataIndex);
    setTableData(filteredItems);
    createTableRows(filteredItems);
    setShowDeleteModal(false);
    dispatch(actionPrinting(filteredItems));
  };

  const handleEditItem = (row) => {
    navigate(ROUTES_URL.ADD_PRINTING, {
      state: { id: row[ID_KEY] },
    });
    if (row) {
      dispatch(actionSelectedPrinting(row));
    }
  };

  return (
    <>
      <Container maxWidth={false}>
        <Stack mb={2}>
          <Typography variant="h4" gutterBottom>
            Printers
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
              <div className="d-flex">
                {/* <div class="btn-container">
                  <label class="switch btn-color-mode-switch">
                    <input
                      value="1"
                      id="color_mode"
                      name="color_mode"
                      type="checkbox"
                    />
                    <label
                      class="btn-color-mode-switch-inner"
                      data-off="Active"
                      data-on="  Inactive"
                      for="color_mode"
                    ></label>
                  </label>
                </div> */}
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => handleAddItem()}
                >
                  Add
                </Button>
              </div>
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
    </>
  );
};

export default Printing;
