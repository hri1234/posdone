import React from 'react'
import './Customer.css'
import { Link } from 'react-router-dom'
import {useState , useEffect} from "react"
// name , email , address , phone , ordertype , cratedat , update, 
const Customer = () => {

const [customer , setCustomer] = useState([])

const CustomerFetch = async() =>{
    const response  = await fetch("https://mohammad-backend.onrender.com/api/custumer");
    const parseData=await response.json();
    console.log(parseData)
    setCustomer(parseData)
}
useEffect(()=>{
    CustomerFetch()
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
      <a className="navbar-brand ms-2" style={{ color: "#00003E" }} href="#">
        <i className="fa-solid fa-bars-sort set_icon_nav_first " />
      </a>
      <a className="" href="#">
        <i className="ri-team-fill set_icon_nav_first" />
      </a>
      <a
        className="navbar-brand ms-3 mb-2"
        href="#"
        style={{ color: "#091b4d" }}
      >
        {" "}
        <Link to="/" style={{textDecoration:"none" , color:"black"}}>
        <span className="set_name">Customers</span>{" "}
        </Link>
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
          {/* <input type="text" className="form-control" placeholder="Search..." /> */}
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
  <div className="container-fluid ">
    <div className="row">
      <div className="col-sm-12 col-md-6 my-3">
        <h3 className="d-inline" style={{fontWeight:"900" , fontStyle:"italic"}}>
          {/* <img
            src="image/PurchasePendingReport.png"
            alt="image"
            className="salesicon"
            style={{ width: "3vw" }}
          /> */}
            CUSTOMERS
        </h3>
        {/* <button class="btn btn-primary d-inline float-end" type="button">Back</button> */}
      </div>
    </div>
  </div>
  <div
    className="container-fluid c1 my-2"
    style={{ marginBottom: "3rem", paddingBottom: "2rem" }}
  >
    <div style={{ overflow: "auto" }}>
      <table className="table table-hover">
        <thead>
    
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              ORDER<span style={{ color: "white" }}>_</span>NO.
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              NAME
            </th>
            <th scope="col " style={{ textAlign: "center" }}>
              EMAIL
            </th>
            <th scope="col " style={{ textAlign: "center" }}>
              ADDRESH
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              PHONE
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              ORDERTYPE
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              BILLING
            </th>
            
            <th scope="col" style={{ textAlign: "center" }}>
              ORDER DATE
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              DEBITORS<span style={{ color: "white" }}>_</span>ACCOUNT
            </th>
          </tr>
          
        </thead>
        <tbody>
        {customer?.map((item,i)=>{
        return(

          <tr key={item._id+i}>
            {/* <td> <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"></td> */}
            <td>
              <span className="card text-center">{item._id}</span>
            </td>
            <td>
              <span className="card text-center">{item.CustomerName}</span>
            </td>
            <td>
              <span className="card text-center">{item.CustomerEmail}</span>
            </td>
            <td>
              <span className="card text-center">{item.CustomerTaxNumber}</span>
            </td>
            <td>
              <span className="card text-center">{item.CustomerContactNo}</span>
            </td>
            <td>
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {item.BillingZipCode}
              </span>
            </td>
            <td>
              <span className="card text-center p-2">{item.createdAt}</span>
            </td>
            <td>
              <span className="card text-center p-2">{item.updatedAt}</span>
            </td>
            <td>
              {" "}
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                2012456587
              </span>
            </td>
          </tr>
          
        )
    })}
          <tr>
            {/* <td> <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"></td> */}
            <td>
              <span className="card text-center">#7678</span>
            </td>
            <td>
              <span className="card text-center">Apple</span>
            </td>
            <td>
              <span className="card text-center">10kg</span>
            </td>
            <td>
              <span className="card text-center">5kg</span>
            </td>
            <td>
              <span className="card text-center">20 $</span>
            </td>
            <td>
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                22.00 $
              </span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              {" "}
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                2012456587
              </span>
            </td>
          </tr>
          <tr>
            {/* <td> <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"></td> */}
            <td>
              <span className="card text-center">#7678</span>
            </td>
            <td>
              <span className="card text-center">Apple</span>
            </td>
            <td>
              <span className="card text-center">10kg</span>
            </td>
            <td>
              <span className="card text-center">5kg</span>
            </td>
            <td>
              <span className="card text-center">20 $</span>
            </td>
            <td>
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                22.00 $
              </span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              {" "}
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                2012456587
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>

</>

  )
}

export default Customer
