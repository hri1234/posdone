import React, { useEffect, useState } from "react";
import "./OnlineOrderTable.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTable } from "src/store/slices/table.slice";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Menu,
  TableCell,
  TableContainer,
  TextField,
} from "@mui/material";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { IoTrash } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
// import pic1 from "../assets/round-table.png";
export const OnlineOrderTable = () => {
  const { items, error } = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const [view, setView] = useState(null);
  useEffect(() => {
    dispatch(getTable());
  }, [dispatch]);
  console.log(items);
  const openProductHandler = (_id) => {
    setView(_id);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="set">
              <i
                className="fa-solid fa-plus float-end px-3 py-2 mb-2 icon me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
              <i className="fa-solid fa-bars float-end me-2  px-3 icon py-2 icon" />
              <i className="fa-solid fa-print float-end me-2 px-3 icon py-2 icon " />
            </div>
          </div>
        </div>
      </div>

      {items.length !== 0 && (
        <div className="container c1 my-4 py-2">
          <div style={{ overflow: "auto" }}>
            <table className="table table-hover">
              <thead style={{ whiteSpace: "nowrap" }}>
                <tr>
                  <th scope="col" style={{ textAlign: "center" }}>
                    #Id
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Order No.
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Order date
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Party Account
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Purchase sales ledger
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Notes
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Products
                  </th>
                  <th scope="col" style={{ paddingLeft: "2rem" }}>
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody style={{ whiteSpace: "nowrap" }}>
                {items.map(
                  (
                    {
                      _id,
                      OrderNo,
                      OrderDate,
                      PartyAccount,
                      PurchaseSalesLedger,
                      Notes,
                    },
                    i
                  ) => (
                    <tr key={i}>
                      <td>
                        <span className="card text-center">{_id}</span>
                      </td>
                      <td>
                        <span className="card text-center">{OrderNo}</span>
                      </td>
                      <td>
                        {" "}
                        <span className="card text-center">{OrderDate}</span>
                      </td>
                      <td>
                        {" "}
                        <span className="card text-center">{PartyAccount}</span>
                      </td>
                      <td>
                        {" "}
                        <span className="card text-center">
                          {PurchaseSalesLedger}
                        </span>
                      </td>
                      <td>
                        {" "}
                        <span className="card text-center">{Notes}</span>
                      </td>
                      <td style={{ position: "relative" }}>
                        {" "}
                        <button
                          className="card text-center"
                          onClick={openProductHandler.bind(null, _id)}
                        >
                          View List
                        </button>
                        <Menu
                          id="fade-menu"
                          MenuListProps={{
                            "aria-labelledby": "fade-button",
                          }}
                          anchorEl={items.find((el) => el._id === view)}
                          open={Boolean(items.find((el) => el._id === view))}
                          onClose={() => {
                            setView(null);
                          }}
                          // Adjust the position of the menu below the button
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          getContentAnchorEl={null}
                        >
                          <TableContainer>
                            <Table
                              sx={{
                                minWidth: "100%",
                                width: "1400px",
                              }}
                              aria-label="simple table"
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell>Due Date</TableCell>
                                  <TableCell align="right">Name</TableCell>
                                  <TableCell align="right">Price</TableCell>
                                  <TableCell align="right">Quantity</TableCell>
                                  <TableCell align="right">Warehouse</TableCell>
                                  <TableCell align="right">Discount</TableCell>
                                  <TableCell align="right">Tax</TableCell>
                                  <TableCell align="right">Amount</TableCell>
                                </TableRow>
                              </TableHead>

                              {items
                                .find((el) => el._id === view)
                                ?.newProduct?.map((item, i) => (
                                  <TableBody key={i}>
                                    <TableCell>{item.duedate}</TableCell>
                                    <TableCell align="right">
                                      {item.productname}
                                    </TableCell>
                                    <TableCell align="right">
                                      {item.price}
                                    </TableCell>
                                    <TableCell align="right">
                                      {item.quantity}
                                    </TableCell>
                                    <TableCell align="right">
                                      {item.warehouse}
                                    </TableCell>
                                    <TableCell align="right">
                                      {item.discount}
                                    </TableCell>
                                    <TableCell align="right">
                                      {item.tax}
                                    </TableCell>
                                    <TableCell align="right">
                                      {item.amount}
                                    </TableCell>
                                  </TableBody>
                                ))}
                            </Table>
                          </TableContainer>
                        </Menu>
                      </td>
                      <td>
                        <div className="parent_div ms-3">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <i className="ri-pencil-line"></i>
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            className="delete_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <i className="ri-delete-bin-6-line "></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog  modal-lg"
          style={{ backgroundColor: "white" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-sm-6 col-md-6 my-3">
                <h3 className="d-inline">
                  {/* <img
                    src={pic1}
                    alt="image"
                    className="salesicon"
                    style={{ width: "3vw" }}
                  /> */}
                  <span className="ms-2" style={{ fontWeight: "bold" }}>
                    {" "}
                    Add Order
                  </span>
                </h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" style={{ backgroundColor: "white !" }}>
              <div className="container-fluid c1">
                <div className="row">
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="autoSizingInputGroup">
                      Order No.:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword "
                      placeholder="Enter Order number"
                    />
                  </div>
                  {/* <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="autoSizingInputGroup">
                      Gender:
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected> Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Other</option>
                    </select>
                  </div> */}
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="autoSizingInputGroup">
                      Order Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword "
                      placeholder=""
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="autoSizingInputGroup">
                      Party account
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword "
                      placeholder=""
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="autoSizingInputGroup">
                      Purchase Sales Ledger
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword "
                      placeholder=""
                    />
                  </div>

                  <div
                    className="col-sm-12 col-md-12"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="autoSizingInputGroup">
                      Notes
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword "
                      placeholder=""
                    />
                  </div>
                  {/* <Accordion style={{ marginTop: "3rem" }}>
                <AccordionSummary
                  expandIcon={<IoMdArrowDropdown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-lg font-semibold">Create Items List</h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="mt-1">
                    <div className="flex justify-start  flex-wrap gap-5 align-items-baseline mt-1">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        {itemList.length !== 0 &&
                          itemList.map((el, i) => (
                            <tbody key={i}>
                              <tr>
                                <td>{el.name}</td>
                                <td>{el.quantity}</td>
                                <td>Rs. {el.price}</td>
                                <td>
                                  <div>
                                    <IoTrash
                                      className="bg-red-500 p-1 text-white text-3xl cursor-pointer rounded-full hover:bg-red-700 shadow-md"
                                      onClick={handleRemoveItem.bind(null, i)}
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                      </table>
                    </div>

                    {!itemSubmitted && (
                      <div className="flex justify-start flex-wrap gap-3">
                        <div>
                          <TextField
                            id="standard-basic"
                            label="Items Name"
                            variant="standard"
                            className="w-100"
                            style={buttonStyle}
                            // value={item.name}
                            inputRef={itemName}
                          />
                        </div>
                        <div>
                          <TextField
                            id="standard-basic"
                            label="Item Quantity"
                            variant="standard"
                            className="w-56"
                            type="number"
                            style={buttonStyle}
                            // value={item.quantity}
                            inputRef={itemQty}
                          />
                        </div>
                        <div>
                          <TextField
                            id="standard-basic"
                            label="Item Price"
                            variant="standard"
                            className="w-56"
                            type="number"
                            style={buttonStyle}
                            // value={item.price}
                            inputRef={itemPrice}
                          />
                        </div>
                        <div className="flex gap-4 justify-end mt-2">
                          <FaPlus
                            className="bg-green-500 p-1 text-white text-3xl cursor-pointer rounded-full hover:bg-green-700 shadow-md"
                            onClick={handleSubmitItems}
                          />
                          <RxCross2
                            className="bg-red-500 p-1 text-white text-3xl cursor-pointer rounded-full hover:bg-red-700 shadow-md"
                            onClick={() => setItemSubmitted(true)}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {itemSubmitted && (
                    <div className="flex justify-end mt-2">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "green" }}
                        onClick={handleAddItem}
                      >
                        <FaPlus />
                        Add More Items
                      </Button>
                    </div>
                  )}
                </AccordionDetails>
              </Accordion> */}
                  <div>
                    <button
                      className="btn btn_Close me-md-2 mt-3 ms-3 px-4 float-end"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      {" "}
                      Cancle
                    </button>
                    <button
                      className="btn btn_save me-md-2 mt-3 px-4 float-end"
                      type="button"
                    >
                      {" "}
                      Save{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
