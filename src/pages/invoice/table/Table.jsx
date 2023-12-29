import React, { useEffect, useState } from "react";
import "./Table.scss";
import { useDispatch } from "react-redux";
import { deleteInvoice, getInvoice } from "src/store/slices/invoice.slice";
// import pic1 from '../assets/ama5.jpg'
const Table = ({ handleInvoiceSubmit, handleInvoiceUpdate, invoices }) => {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [date, setDate] = useState("");
  const [partyAccount, setPartyAccount] = useState("");
  const [salesLedger, setSalesLedger] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [edit, setEdit] = useState(null);
  const [curInvoice, setCurInvoice] = useState(null);

  const dispatch = useDispatch();

  //   const [select, setSelect] = useState("confirmed");

  const handleFormSubmit = () => {
    const data = {
      invoiceNo,
      DueDate: date,
      OrderDate: date,
      PartyAccount: partyAccount,
      PurchaseSalesLedger: salesLedger,
      Price: price,
      ProductName: name,
      discount,
      Quantity: quantity,
      Amount: amount,
      Notes: notes,
    };
    console.log(data);
    if (edit) {
      handleInvoiceUpdate(data, edit);
    } else {
      handleInvoiceSubmit(data);
    }
  };

  useEffect(() => {
    if (edit && invoices) {
      const {
        OrderNo,
        PartyAccount,
        PurchaseSalesLedger,
        ProductName,
        DueDate,
        Quantity,
        Price,
        Amount,
        Notes,
      } = invoices.find((el) => el._id === edit);
      setInvoiceNo(OrderNo);
      setDate(DueDate);
      setQuantity(Quantity);
      setPrice(Price);
      setAmount(Amount);
      setNotes(Notes);
      setName(ProductName);
      setPartyAccount(PartyAccount);
      setSalesLedger(PurchaseSalesLedger);
    }
  }, [edit, invoices]);

  const handleItemDelete = (id) => {
    dispatch(
      deleteInvoice({
        id,
        callback: () => {
          console.log("success");
          dispatch(getInvoice());
        },
      })
    );
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog  modal-lg"
          style={{
            backgroundColor: "aliceblue !important",
            borderRadius: "7%",
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-sm-6 col-md-6 my-3">
                <h4 className="d-inline">
                  {/* <img
                  src={pic1}
                  alt="image"
                  className="salesicon"
                  style={{ width: "2vw" }}
                /> */}
                  <b>{edit ? "Edit" : "Add New"} Invoice</b>
                </h4>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid c1 py-3">
                <div className="row">
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      {" "}
                      Invoice No. :
                    </label>
                    <br />
                    <input
                      type="text"
                      value={invoiceNo}
                      onChange={(e) => {
                        setInvoiceNo(e.target.value);
                      }}
                      className="form-control "
                      id="inputPassword "
                      placeholder="  Enter Invoice No."
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      {" "}
                      Date :
                    </label>
                    <br />
                    <input
                      type="date"
                      className="form-control "
                      id="inputPassword "
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      //   placeholder=" Last Name"
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      {" "}
                      Party Account:
                    </label>
                    <br />
                    <input
                      type="text"
                      value={partyAccount}
                      onChange={(e) => {
                        setPartyAccount(e.target.value);
                      }}
                      className="form-control "
                      id="inputPassword "
                      placeholder=" Enter party account"
                    />
                  </div>
                  <div
                    className=" col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Purchase sales ledger:
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="inputPassword "
                      value={salesLedger}
                      onChange={(e) => {
                        setSalesLedger(e.target.value);
                      }}
                      placeholder=" Enter purchase sales ledger"
                    />
                  </div>
                  <div
                    className=" col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Price:
                    </label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      className="form-control "
                      id="inputPassword "
                      placeholder=" Enter Price"
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Product Name :
                    </label>
                    <br />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="form-control "
                      id="inputPassword "
                      placeholder=" Enter name"
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Discount :
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-control "
                      id="inputPassword "
                      value={discount}
                      onChange={(e) => {
                        setDiscount(e.target.value);
                      }}
                      placeholder=" Enter discount"
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Quantity :
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-control "
                      id="inputPassword "
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      placeholder=" Enter quantity"
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Amount :
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-control "
                      id="inputPassword "
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      placeholder=" Enter amount"
                    />
                  </div>
                  <div
                    className="col-sm-12 col-md-6"
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Notes :
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-control "
                      id="inputPassword "
                      value={notes}
                      onChange={(e) => {
                        setNotes(e.target.value);
                      }}
                      placeholder=" Enter notes"
                    />
                  </div>
                  {/* <div
                    className=" col-sm-12 col-md-6 "
                    style={{ lineHeight: "2rem" }}
                  >
                    <label className="" htmlFor="specificSizeSelect">
                      Status:
                    </label>
                    <select
                      className="form-select "
                      id="specificSizeSelect"
                      value={select}
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setSelect(e.target.value);
                      }}
                      style={{ width: 230 }}
                    >
                      <option value="confirmed">Confirmed</option>
                      <option value={"pending"}>Pending</option>
                    </select>
                  </div> */}
                </div>
              </div>
              <hr />
              <div className=" float-end d-flex">
                <button
                  className="btn-primary Btn_Save mx-2"
                  onClick={handleFormSubmit}
                >
                  {" "}
                  Save{" "}
                </button>
                <button
                  className="btn-primary Btn_Close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container c1 my-4 py-2"
        style={{ marginTop: "15px !important" }}
      >
        <div style={{ overflow: "auto" }}>
          <table className="table table-hover">
            <thead style={{ whiteSpace: "nowrap" }}>
              <tr>
                <th scope="col">
                  {/* <input class="form-check-" type="checkbox" value="" id="flexCheckDefault"> */}
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  {" "}
                  Order No.
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Order date
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  {" "}
                  Party Account
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Purchase Ledger
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Product Name
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Due Date
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Quantity
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Price
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Amount
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  Notes
                </th>
                <th scope="col" style={{ paddingLeft: "5rem" }}>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody style={{ whiteSpace: "nowrap" }}>
              {invoices &&
                invoices.map((el, i) => (
                  <tr key={i}>
                    <td>
                      {" "}
                      <input
                        className="form-check-input mt-2"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                    </td>
                    <td>
                      <span className="card text-center">{el.OrderNo}</span>
                    </td>
                    <td>
                      <span className="card text-center">{el.OrderDate}</span>
                    </td>
                    <td>
                      <span className="card text-center">
                        {el.PartyAccount}
                      </span>
                    </td>
                    <td>
                      <span className="card text-center">
                        {el.PurchaseSalesLedger}
                      </span>
                    </td>
                    <td>
                      <span className="card text-center">{el.ProductName}</span>
                    </td>
                    <td>
                      <span className="card text-center">{el.DueDate}</span>
                    </td>
                    <td>
                      <span className="card text-center">{el.Quantity}</span>
                    </td>
                    <td>
                      <span className="card text-center">{el.Price}</span>
                    </td>
                    <td>
                      <span className="card text-center">{el.Amount}</span>
                    </td>
                    <td>
                      <span className="card text-center">{el.Notes}</span>
                    </td>

                    <td>
                      <div className="parent_div ms-3">
                        <div
                          style={{ cursor: "pointer" }}
                          className="add_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <i className="ri-file-add-line" />
                        </div>
                        <div
                          style={{ cursor: "pointer" }}
                          className="view_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <i className="ri-eye-line" />
                        </div>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                          onClick={() => {
                            setEdit(el._id);
                            console.log(el._id);
                          }}
                        >
                          <i className="ri-pencil-line" />
                        </button>
                        <button
                          style={{ cursor: "pointer" }}
                          className="delete_icon"
                          aria-label="Example icon button with a menu icon"
                          onClick={() => {
                            handleItemDelete(el._id);
                          }}
                        >
                          <i className="ri-delete-bin-6-line " />
                        </button>
                        <div
                          style={{ cursor: "pointer" }}
                          className="print_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <i className="ri-printer-fill" />
                        </div>
                        <div className="btn-group dropstart">
                          <button
                            type="button"
                            className="btn  "
                            data-bs-toggle="dropdown"
                            aria-expanded="fals"
                          >
                            <i className="ri-more-2-fill" />
                          </button>
                          <ul
                            className="dropdown-menu"
                            style={{ width: "16vw" }}
                          >
                            <li>
                              <a className="dropdown-PRODUCT" href="#">
                                <i className="ri-eye-fill" /> View Sale
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-PRODUCT" href="#">
                                <i className="ri-download-fill" />
                                Download PDF
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-PRODUCT" href="#">
                                <i className="ri-money-dollar-circle-fill" />
                                Show Payments
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-PRODUCT" href="#">
                                <i className="ri-shopping-cart-fill" />
                                Add Sale Return
                              </a>
                            </li>
                            <li>
                              <button
                                className="dropdown-PRODUCT"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="ri-pencil-fill" /> Edit Sale
                              </button>
                            </li>
                            <li>
                              <a className="dropdown-PRODUCT" href="#">
                                <i className="ri-delete-bin-5-fill" />
                                Delete Sale
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary me-md-2 mb-5 mt-3  float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
        >
          Add Invoice
        </button>
      </div>
    </>
  );
};

export default Table;
