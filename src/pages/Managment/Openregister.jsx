import React from 'react'
import './OpeningCash.css'
import pic1 from '../../Assets/PNG/Asset 11@4x.png'
import pic2 from '../../Assets/PNG/Layer 2@4x.png'
import pic3 from '../../Assets/PNG/Asset 13@4x.png'
import pic4 from '../../Assets/PNG/Asset 14@4x.png'
const Openregister = () => {
  return (
  <>
  <>
  {/* nav-start */}
  <nav>
    <div className="start">
      <a href="">
        <i
          className="fa fa-chevron-left"
          style={{
            color: "#0D536D",
            fontSize: 17,
            boxSizing: "content-box",
            lineHeight: 2,
            textAlign: "center",
            width: 30,
            height: 30,
            display: "inline-block",
            overflow: "hidden",
            borderRadius: "50%",
            backgroundColor: "#79A3B1"
          }}
        />
      </a>
    </div>
    <div className="middle">
      <span className="fs-5 ms-5" style={{ fontWeight: 600 }}>
        Opening Cash Drawer Management
      </span>
    </div>
    <div className="end">
      <a className="nav-link" href="#">
        <i
          className="fa fa-repeat"
          style={{
            color: "#0D536D",
            fontSize: 17,
            boxSizing: "content-box",
            lineHeight: 2,
            textAlign: "center",
            width: 30,
            height: 30,
            display: "inline-block",
            overflow: "hidden",
            borderRadius: "50%",
            backgroundColor: "#79A3B1"
          }}
        />
      </a>
    </div>
  </nav>
  {/* nav-end */}
  <div className="container-fluid">
    <div className="row">
      <div
        className="col-md-3 p-0 shadow "
        style={{ height: 600, backgroundColor: "white !important", width: 300 }}
      >
        <ul className="list-group border-0">
          <li
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-1"
            aria-current="true"
            style={{ borderBottom: "2px solid #6296a8" }}
          >
            <i
              className="fa-regular fa-user mt-2 ms-4"
              style={{
                color: "white",
                fontSize: 14,
                boxSizing: "content-box",
                lineHeight: 2,
                textAlign: "center",
                width: 28,
                height: 28,
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "50%",
                backgroundColor: "#0D536D"
              }}
            />
            <div>
              <h6
                className="mb-0 set_icon1 mt-2"
                style={{ fontWeight: 700, fontSize: 12 }}
              >
                Sam Curran{" "}
              </h6>
              <p
                className="mb-0 opacity-75 set_icon1 mb-1"
                style={{ fontSize: 13 }}
              >
                0725854423
              </p>
            </div>
            <div>
              <p className="mb-0 opacity-75 set_icon1 ms-2">
                <span>
                  <i className="fa-regular fa-clock mt-2" />
                </span>
                <span style={{ fontSize: 13 }}> 6 Visit Times</span>
              </p>
            </div>
          </li>
          <li
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-2"
            aria-current="true"
          >
            <div className="set_img ms-4">
              <img
                src={pic1}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <span className="fs-5" style={{ color: "#0D536D" }}>
              Cash Deposit
            </span>
          </li>
          <li
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-2"
            aria-current="true"
          >
            <div className="set_img ms-4">
              <img
                src={pic2}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <span className="fs-5" style={{ color: "#0D536D" }}>
              Cash Withdrawl
            </span>
          </li>
          <li
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-2"
            aria-current="true"
          >
            <div className="set_img ms-4">
              <img
                src={pic3}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <span className="fs-5" style={{ color: "#0D536D" }}>
              Add Expenses
            </span>
          </li>
          <li
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-2"
            aria-current="true"
            style={{ backgroundColor: "#c9eed5" }}
          >
            <div className="set_img ms-4">
              <img
                src={pic4}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <span className="fs-5" style={{ color: "#0D536D" }}>
              Change
            </span>
          </li>
        </ul>
      </div>
      <div className="col-md-1" />
    </div>
  </div>
</>


  </>
  )
}

export default Openregister
