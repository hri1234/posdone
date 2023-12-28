import React from 'react'
import './Order.css'
import {useState , useEffect} from "react"
import {axios} from "react"

const Order = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const [orderno, setOrderno] = useState('');
    const [orderdate, setOrderdate] = useState('');
    const [note, setNote] = useState('');
    const [partyaccount, setPartyaccount] = useState('');
    const [purchasesalesledger, setPurchasesalesledger] = useState('');
    const [status , setStatus] = useState('')
   const [done , setDone] = useState([])
   
    const handleSubmit = async (e) => {
       e.preventDefault();
   
       const newEntry = {
         orderno,
         orderdate,
         partyaccount,
         purchasesalesledger,
         note,
         status,
       };
   
       try {
         await axios.post('https://mohammad-backend.onrender.com/api/order', newEntry);
         alert('Data submitted successfully');
       } catch (error) {
         console.error('Error submitting data:', error);
         alert('Error submitting data. Please try again.');
       }
    };

const FetchFunction = async()=>{
    const response = await fetch("https://mohammad-backend.onrender.com/api/order")
    const newValue = await response.json()
    console.log(newValue)
    setDone(newValue)
}
useEffect(()=>{
    FetchFunction()
},[])





  return (
<>
<>
  {/* wrapper_start */}
  <div
    className="wrapper"
    style={{
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      background: "rgba(255, 255, 255, 0.37)",
      borderRadius: 16,
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)"
    }}
  >
    <a href="./index.html" className="px-2 py-2">
      {" "}
      <i
        className="fa-duotone fa-house"
        style={{
          color: "white",
          fontSize: 15,
          lineHeight: 2,
          textAlign: "center",
          width: 30,
          height: 30,
          borderRadius: "40%",
          backgroundColor: "rgb(60, 136, 179)"
        }}
      />
    </a>
    <a href="./register.html" className="social">
      <i
        className="fas fa-registered"
        style={{
          color: "white",
          fontSize: 15,
          lineHeight: 2,
          textAlign: "center",
          width: 30,
          height: 30,
          borderRadius: "40%",
          backgroundColor: "rgb(9, 44, 64)"
        }}
      />
    </a>
    <a className="social mt-2" href="./support.html">
      {" "}
      <i
        className="fa-solid fa-square-phone"
        style={{
          color: "white",
          fontSize: 15,
          lineHeight: 2,
          textAlign: "center",
          width: 30,
          height: 30,
          borderRadius: "40%",
          backgroundColor: "rgb(39, 142, 7)"
        }}
      />
    </a>
    <a
      className="social py-2"
      href="./setting.html
  "
    >
      <i
        className="fa-duotone fa-gear-complex"
        style={{
          color: "white",
          fontSize: 15,
          lineHeight: 2,
          textAlign: "center",
          width: 30,
          height: 30,
          borderRadius: "40%",
          backgroundColor: "#0e284d"
        }}
      />
    </a>
  </div>
  {/* wrapper_end */}
  {/* nav-start */}
  <nav>
    <div className="start">
      <a className="navbar-brand " style={{ color: "#00003E" }} href="#">
        <i className="fa-solid fa-bars-sort set_icon_nav_first" />
      </a>
      <a className="" href="#">
        <i className="fa-solid fa-bags-shopping set_icon_nav_first" />
      </a>
      <a
        className="navbar-brand ms-2 mb-2"
        href="#"
        style={{ color: "#091b4d" }}
      >
        {" "}
        <span className="set_name">Orders</span>{" "}
      </a>
    </div>
    <div className="d-flex">
      <div className="middile">
        <div className="input-group mt-2 ms-5">
          <button className="btn btn-light " type="button">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ fontSize: 20 }}
            />
          </button>
          <input type="text" className="form-control" placeholder="Search..." />
          <div className="input-group-append">
            <button
              className="btn btn-secondary border-start-0"
              type="button"
              style={{
                backgroundColor: "white",
                border: "1px solid rgb(204, 203, 203)"
              }}
            >
              <i
                className="fa-duotone fa-barcode-read"
                style={{ fontSize: 25, color: "#00003E" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="end">
        <i className="fa-solid fa-notes-medical set_icon_nav mt-1" />
        <i className="fa-solid fa-rotate set_icon_nav mt-1" />
        {/* <i class="fa-solid fa-grid set_icon_nav"></i> */}
      </div>
      <div className="end dropdown  ms-2">
        <p
          className=" border-0 "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-grid set_icon_nav mt-1" />
        </p>
        <ul
          className="dropdown-menu mt-2"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a className="dropdown-item" href="#">
              <i className="fa-solid fa-square-phone me-2" /> Support{" "}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {" "}
              <i className="fa-duotone fa-gear-complex me-2" />
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    className="middile-hide"
    style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
  >
    <div className="input-group mt-2 ms-5">
      <button className="btn btn-light " type="button">
        <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 20 }} />
      </button>
      <input type="text" className="form-control" placeholder="Search..." />
      <div className="input-group-append">
        <button
          className="btn btn-secondary border-start-0"
          type="button"
          style={{
            backgroundColor: "white",
            border: "1px solid rgb(204, 203, 203)"
          }}
        >
          <i
            className="fa-duotone fa-barcode-read"
            style={{ fontSize: 25, color: "#00003E" }}
          />
        </button>
      </div>
    </div>
  </div>
  <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 col-md-6 my-3">
        <h3 className="d-inline">
          <img
            src="image/login.png"
            alt="image"
            className="salesicon"
            style={{ width: "3vw" }}
          />
          Journal Entry{" "}
        </h3>
      </div>
    </div>
  </div>
  <div className="formback my-3 mx-3">
    <div
      className="container-fluid c1 "
      style={{ marginBottom: "3rem", paddingBottom: "2rem" }}
    >
      <form
        className="row gy-2 gx-4 align-items-center "
        style={{ paddingBottom: "3rem" }}
        id="form1"
      >
        <div className=" col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
          <label className="" htmlFor="specificSizeSelect">
            ORDER NO:
          </label>
          <br />
          <input
             defaultValue={orderno}
            type="text"
            className="form-control "
            id="inputPassword "
            placeholder="Order no"
            onClick={(e)=>setOrderno(e.target.value)}
          />
        </div>
        <div className="col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
          <label className="" htmlFor="specificSizeSelect">
           ORDER DATE:{" "}
          </label>
          <br />
          <input  
          type="text"
           className="form-control" 
          id="Test_DatetimeLocal"
          defaultValue={orderdate} 
          onClick={(e)=>setOrderdate(e.target.value)}
          />
        </div>
        <div className=" col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
        <label className="" htmlFor="specificSizeSelect">
            PARTY ACCOUNT:
          </label>
          <br />
          <input
            type="text"
            defaultValue ={partyaccount}
            className="form-control "
            id="inputPassword "
            placeholder="#INVO00035"
            onClick={(e)=>setPartyaccount(e.target.value)}
          />
        </div>
        <div className="col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
          <label className="" htmlFor="specificSizeSelect">
            PURCHASE SALES ACCOUNT:
          </label>
          <input
            type="text"
            defaultValue={purchasesalesledger}
            className="form-control "
            id="inputPassword "
            placeholder="Enter Crebit Amount"
            onClick={(e)=>setPurchasesalesledger(e.target.value)}
          />
        </div>
        <div className=" col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
        <label className="" htmlFor="specificSizeSelect">
            NOTES:
          </label>
          <input
          defaultValue={note}
            type="text"
            className="form-control "
            id="inputPassword "
            placeholder="Enter NOTES"
            onClick={(e)=>setNote(e.target.value)}
          />
        </div>
        {/* <div className="col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
          <label className="" htmlFor="specificSizeSelect">
            DEBIT:
          </label>
          <input
            type="password"
            className="form-control "
            id="inputPassword "
            placeholder="Enter debit Amount"
          />
        </div> */}
        <div className=" col-sm-12 col-md-6 " style={{ lineHeight: "2rem" }}>
        <label className="" htmlFor="specificSizeSelect">
            STATUS:
          </label>
          <input
          defaultValue={status}
            type="text"
            className="form-control "
            id="inputPassword "
            placeholder="Enter NOTES"
            onClick={(e)=>setStatus(e.target.value)}
          />
        </div>
        {/* <div className="col-sm-12 col-md-6">
          <label className="" htmlFor="autoSizingInputGroup">
            NOTES:
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword "
            placeholder="Enter Notes"
          />
        </div> */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button" onClick={handleSubmit}>
            Add Partner
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="container-fluid c1  my-4 py-2">
    <div style={{ overflow: "auto" }}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefault"
              />
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              {" "}
              ORDER NO.
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              ORDER DATE
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              PARTYACCOUNT
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              PURCHASESALES 
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              NOTES
            </th>
            <th scope="col" style={{ paddingLeft: "3rem" }}>
              STATUS
            </th>
            <th scope="col" style={{ paddingLeft: "4rem" }}>
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>

            {done?.map(()=>{
                return
            })}
          <tr>
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
              <span className="card text-center"> #231212432323226</span>
            </td>
            <td>
              <span className="card text-center">
                AppleAppleAppleAppleApple
              </span>
            </td>
            <td>
              <span className="card text-center">1200.00 $</span>
            </td>
            <td>
              <span className="card text-center">1500.00 $</span>
            </td>
            <td>
              <span className="card text-center">02-08-2022</span>
            </td>
            <td>
              <input
                id="s2"
                type="checkbox"
                className="switch mx-2 mt-2 ms-5"
                defaultChecked=""
              />{" "}
            </td>
            <td>
              <div className="parent_div ">
                <div
                  style={{ cursor: "pointer" }}
                  className="view_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-eye-line" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="add_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-file-text-fill" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="print_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-printer-fill" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="edit_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-pencil-line" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="delete_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-delete-bin-6-line " />
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
                  <ul className="dropdown-menu" style={{ width: "16vw" }}>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-eye-fill" /> View Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-download-fill" /> Download PDF
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
                        <i className="ri-shopping-cart-fill" /> Create Sale
                        Return
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-pencil-fill" /> Edit Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-delete-bin-5-fill" /> Delete Sale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>


          <tr>
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
              <span className="card text-center"> #231212432323226</span>
            </td>
            <td>
              <span className="card text-center">
                AppleAppleAppleAppleApple
              </span>
            </td>
            <td>
              <span className="card text-center">1200.00 $</span>
            </td>
            <td>
              <span className="card text-center">1500.00 $</span>
            </td>
            <td>
              <span className="card text-center">02-08-2022</span>
            </td>
            <td>
              <input
                id="s2"
                type="checkbox"
                className="switch mx-2 mt-2 ms-5"
                defaultChecked=""
              />{" "}
            </td>
            <td>
              <div className="parent_div ">
                <div
                  style={{ cursor: "pointer" }}
                  className="view_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-eye-line" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="add_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-file-text-fill" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="print_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-printer-fill" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="edit_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-pencil-line" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="delete_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-delete-bin-6-line " />
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
                  <ul className="dropdown-menu" style={{ width: "16vw" }}>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-eye-fill" /> View Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-download-fill" /> Download PDF
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
                        <i className="ri-shopping-cart-fill" /> Create Sale
                        Return
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-pencil-fill" /> Edit Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-delete-bin-5-fill" /> Delete Sale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          <tr>
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
              <span className="card text-center"> #231212432323226</span>
            </td>
            <td>
              <span className="card text-center">
                AppleAppleAppleAppleApple
              </span>
            </td>
            <td>
              <span className="card text-center">1200.00 $</span>
            </td>
            <td>
              <span className="card text-center">1500.00 $</span>
            </td>
            <td>
              <span className="card text-center">02-08-2022</span>
            </td>
            <td>
              <input
                id="s2"
                type="checkbox"
                className="switch mx-2 mt-2 ms-5 "
                defaultChecked=""
              />{" "}
            </td>
            <td>
              <div className="parent_div ">
                <div
                  style={{ cursor: "pointer" }}
                  className="view_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-eye-line" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="add_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-file-text-fill" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="print_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-printer-fill" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="edit_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-pencil-line" />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="delete_icon"
                  aria-label="Example icon button with a menu icon"
                >
                  <i className="ri-delete-bin-6-line " />
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
                  <ul className="dropdown-menu" style={{ width: "16vw" }}>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-eye-fill" /> View Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-download-fill" /> Download PDF
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
                        <i className="ri-shopping-cart-fill" /> Create Sale
                        Return
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-pencil-fill" /> Edit Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-PRODUCT" href="#">
                        <i className="ri-delete-bin-5-fill" /> Delete Sale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>TOTAL</td>
            <td />
            <td>
              <span className="card text-center">4800.00 $ </span>
            </td>
            <td>
              <span className="card text-center">6000.00 $</span>
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end me-4 mt-3">
      <button className="btn btn-primary me-md-2" type="button">
        Save
      </button>
      <button className="btn btn-primary" type="button">
        Cancel
      </button>
    </div>
  </div>
</>
  {/* nav-end */}
</>

</>
  )
}

export default Order
