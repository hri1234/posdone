import React from 'react'
import './MoreOption.css'
import pic1 from '../../Assets/card-icons/Asset 2@4x.png'
import pic2 from '../../Assets/card-icons/Asset 1@4x.png'
import pic3 from '../../Assets/card-icons/Asset 3@4x.png'
import pic4 from '../../Assets/card-icons/Asset 4@4x.png'
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { productPriceFormatter } from "src/utils";
const Done
 = () => {
  return (

    <>
  {/* nav-start */}
  <nav>
    <div className="start">
      <a href="">
        <i
          className="fa fa-chevron-left"
          style={{
            color: "#0D536D",
            fontSize: 20,
            boxSizing: "content-box",
            lineHeight: 2,
            textAlign: "center",
            width: 35,
            height: 35,
            display: "inline-block",
            overflow: "hidden",
            borderRadius: "50%",
            backgroundColor: "#79A3B1"
          }}
        />
      </a>
    </div>
    <div className="middle">
      <span className="fs-5" style={{ fontWeight: 600 }}>
        Split Custom Amount
      </span>
    </div>
    <div className="end">
      <a className="nav-link" href="#">
        <i
          className="fa fa-repeat"
          style={{
            color: "#0D536D",
            fontSize: 20,
            boxSizing: "content-box",
            lineHeight: 2,
            textAlign: "center",
            width: 35,
            height: 35,
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
  <div className="container-fluid " style={{marginBottom:"80px"}}>
    <div className="row">
      <div className="col-md-3" />
      <div className="col-md-3" />
      <div className="col-md-3" />
      <div className="col-md-3 p-0 ">
        <ul className="list-group border-top-0">
          <li
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-2"
            aria-current="true"
          >
            <i
              className="fa-regular fa-user mt-2"
              style={{
                color: "white",
                fontSize: 16,
                boxSizing: "content-box",
                lineHeight: 2,
                textAlign: "center",
                width: 30,
                height: 30,
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "50%",
                backgroundColor: "#0D536D"
              }}
            />
            <div>
              <h6 className="mb-0 set_icon1" style={{ fontWeight: 600 }}>
                Sam Curran{" "}
              </h6>
              <p className="mb-0 opacity-75 set_icon1">0725854423</p>
            </div>
            <div>
              <p className="mb-0 opacity-75 set_icon1 ms-5">
                <span>
                  <i className="fa-regular fa-clock" />
                </span>
                <span style={{ fontSize: 12 }}> 6Visit Times</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div
              className="card p-4 border-0 set_bg set_card"
              style={{ backgroundColor: "#3ab54a", color: "white" }}
            >
              <div className="card-body  text-center">
                <div className="set_img_bg mx-auto">
                  <div className="mt-3 mb-3 set_img ">
                    <img
                      src={pic1}
                      className="set_images"
                      alt=""
                    />
                  </div>
                </div>
                <h5 className="card-title mt-4">Print Gift Receipt</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card p-4 border-0 set_bg set_card">
              <div className="card-body text-center">
                <div className="set_img_bg1 mx-auto">
                  <div className="mt-3 mb-3 set_img ">
                    <img
                      src={pic2}
                      className="set_images"
                      alt=""
                    />
                  </div>
                </div>
                <h5 className="card-title mt-4">Email Receipt</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card p-4 border-0 set_bg set_card">
              <div className="card-body text-center">
                <div className="set_img_bg1 mx-auto">
                  <div className="mt-3 mb-3 set_img ">
                    <img
                      src={pic3}
                      className="set_images"
                      alt=""
                    />
                  </div>
                </div>
                <h5 className="card-title mt-4">Print Order Receipt</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="card p-4 border-0 set_bg set_card">
              <div className="card-body text-center">
                <div className="set_img_bg1 mx-auto">
                  <div className="mt-3 mb-3 set_img ">
                    <img
                      src=
                      {pic4}
                      className="set_images"
                      alt=""
                    />
                  </div>
                </div>
                <h5 className="card-title mt-4">Text Receipt</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    
 
  )
}

export default Done

