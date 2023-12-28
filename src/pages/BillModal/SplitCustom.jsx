import React  from 'react'
// import {useState} from "react"
import './SplitCustom.css'
import pic1 from '../../Assets/PNG/Asset 5@4x.png'
import pic2 from '../../Assets/PNG/Asset 7@4x.png'
import pic3 from '../../Assets/PNG/Asset 17@4x.png'
import pic4 from '../../Assets/PNG/Asset 18@4x.png'
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { productPriceFormatter } from "src/utils";
import { useReducer, useState } from 'react'

const SplitCustom = () => {

    const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
   // console.log("cartTotalPriceRedux", cartTotalPriceRedux)
    const menuRedux = useSelector(({ menu }) => menu?.items);
    const cartItemsRedux = useSelector(({ cart }) => cart?.items);
    console.log("cartItemsRedux", cartItemsRedux);
    const printerRedux = useSelector(({ printing }) => printing?.items);
    const printerActive = printerRedux?.filter((f) => f?.status)[0];
    console.log("printerActive", printerActive);
    const HritikNumberTotalPrice = cartTotalPriceRedux
    // const [customer , setCustomer] = useState([])

        const [value, setValue] = useState(cartTotalPriceRedux); 
        const[number , setNumber] = useState(1)
        const[count , setCount] = useState(value)
        const[data , setData] = useState(number)

        const ModelHalfValue = () => {
            setValue(value / 2);
            setNumber(number + 1);
         };

         const ModelMultipleValue =() =>{
            setCount(count*2);
            setData(data-1)

         }
        //  const TotalCount =()=>{
        //     setNumber(number + 1)
        //  }

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
                  fontSize: 15,
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
            <h4 className="fs-5">
              Split Custom Amount
            </h4>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 py-2">
                    <ul className="nav nav-underline underline-nav d-flex justify-content-around">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          aria-current="page"
                          href="#"
                          style={{ color: "#00555c", fontWeight: 600 }}
                        >
                            <Link to="/BillModal" style={{color:"#0D536D" , textDecoration:"none"}}>Pay Full Amount</Link>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          href="#"
                          style={{ color: "#0D536D" }}
                        >
                          Split Custom Amount
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2 text-center">
                  <span className="fs-5">Full Amount $ {value}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="d-flex justify-content-evenly">
                    <div className="mt-2">
                      <div className="set_img">
                        {/* <button onClick={ModelHalfValue}> */}
                        <img
                          src={pic3}
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                          onClick={ModelMultipleValue}
                        />
                        {/* </button> */}
                      </div>
                    </div>
                    <div className="">
                      <span className="display-5">{number}</span>
                    </div>
                    <div className="mt-2">
                      <div className="set_img">
                        <img
                          src={pic4}
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                          onClick={ModelHalfValue}
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="row mt-3" style={{ backgroundColor: "white !important" }}>
                <div className="col-md-10 offset-md-1 set_card1 py-4 px-4">
                  <div className="card mb-3 set_card">
                    <div className="row g-0">
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title fs-5">
                            <i className="fa-sharp fa-regular fa-circle-dot set_icon" />
                            <span className="ms-2 fs-4">Card</span>
                            <div className="set_img float-end">
                              <img src={pic1} className='img-fluid' alt="" />
                            </div>
                          </h5>
                          <h6
                            className="ms-4"
                            style={{ color: "rgb(163, 163, 163)" }}
                          >
                            provide Cash While receiving the order
                          </h6>
                        </div>
                      </div>
                      <div className="card-body">
                        <hr className="new2 p-0 m-0" />
                      </div>
                      <div className="card-body">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <button
                                type="button"
                                className="btn set_btn w-100 p-2 mt-2"
                              >
                                {" "}
                                {value}
                              </button>
                            </div>
                            <div className="col-md-6">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2  mt-2"
                               
                              >
                                {" "}
                                Pay{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <p>
                          {" "}
                          <i
                            className="fa fa-plus ms-3 me-2"
                            style={{
                              color: "rgb(13, 83, 109)",
                              fontSize: 11,
                              boxSizing: "content-box",
                              lineHeight: 1.5,
                              textAlign: "center",
                              width: 17,
                              height: 17,
                              display: "inline-block",
                              borderRadius: "50%",
                              borderColor: "rgb(13, 83, 109)",
                              borderStyle: "solid",
                              borderWidth: 1
                            }}
                          />
                          <span style={{ fontSize: "12px !important" }}>Add Tax</span>
                          <i
                            className="fa-light fa-xmark ms-5"
                            style={{
                              color: "rgb(13, 83, 109)",
                              fontSize: 11,
                              boxSizing: "content-box",
                              lineHeight: 1.5,
                              textAlign: "center",
                              width: 17,
                              height: 17,
                              display: "inline-block",
                              borderRadius: "50%",
                              borderColor: "rgb(13, 83, 109)",
                              borderStyle: "solid",
                              borderWidth: 1
                            }}
                          />
                          <span
                            style={{ fontSize: "12px !important" }}
                            className="ms-3"
                          >
                            Remove Tax
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-1 set_card">
                    <div className="row g-0">
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title fs-5">
                            <i className="fa-sharp fa-regular fa-circle-dot set_icon" />
                            <span className="ms-2 fs-4">Cash</span>
                            <div className="set_img float-end">
                              <img src={pic2} className='img-fluid' alt="" />
                            </div>
                          </h5>
                          <h6
                            className="ms-4"
                            style={{ color: "rgb(163, 163, 163)" }}
                          >
                            provide Cash While receiving the order
                          </h6>
                        </div>
                      </div>
                      <div className="card-body">
                        <hr className="new2 p-0 m-0" />
                      </div>
                      <div className="card-body">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <button
                                type="button"
                                className="btn set_btn w-100 p-2 mt-2"
                              >
                               
                            {value}
                              </button>
                            </div>
                            <div className="col-md-6">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                                
                              >
                                {" "}
                                Pay{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <p>
                          {" "}
                          <i
                            className="fa fa-plus ms-3 me-2"
                            style={{
                              color: "rgb(13, 83, 109)",
                              fontSize: 11,
                              boxSizing: "content-box",
                              lineHeight: 1.5,
                              textAlign: "center",
                              width: 17,
                              height: 17,
                              display: "inline-block",
                              borderRadius: "50%",
                              borderColor: "rgb(13, 83, 109)",
                              borderStyle: "solid",
                              borderWidth: 1
                            }}
                          />
                          <span style={{ fontSize: "12px !important" }}>Add Tax</span>
                          <i
                            className="fa-light fa-xmark ms-5"
                            style={{
                              color: "rgb(13, 83, 109)",
                              fontSize: 11,
                              boxSizing: "content-box",
                              lineHeight: 1.5,
                              textAlign: "center",
                              width: 17,
                              height: 17,
                              display: "inline-block",
                              borderRadius: "50%",
                              borderColor: "rgb(13, 83, 109)",
                              borderStyle: "solid",
                              borderWidth: 1
                            }}
                          />
                          <span
                            style={{ fontSize: "12px !important" }}
                            className="ms-3"
                          >
                            Remove Tax
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 mt-2"
              style={{ backgroundColor: "white !important" }}
            >
              <ul className="list-group border-top-0">
                <li
                  href="#"
                  className="list-group-item list-group-item-action d-flex gap-3 py-2"
                  aria-current="true"
                >
                  <i
                    className="fa-regular fa-user"
                    style={{
                      color: "white",
                      fontSize: 20,
                      boxSizing: "content-box",
                      lineHeight: 2,
                      textAlign: "center",
                      width: 35,
                      height: 35,
                      display: "inline-block",
                      overflow: "hidden",
                      borderRadius: "50%",
                      backgroundColor: "#0D536D"
                    }}
                  />
                  <div>
                    <h6 className="mb-0 set_icon">Sam Curran </h6>
                    <p className="mb-0 opacity-75 set_icon">0725854423</p>
                  </div>
                  <div>
                    <p className="mb-0 opacity-75 set_icon" style={{ fontSize: 14 }}>
                      {" "}
                      <span>
                        <i className="fa-regular fa-clock" />
                      </span>{" "}
                      <span> #9Visit Times</span>
                    </p>
                  </div>
                </li>
                {cartItemsRedux?.map((item,i)=>{
                    return(

                <li
                  className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-top border-bottom border-0 p-2" key={item._id + i}
                  style={{ backgroundColor: "#f7f7f7" }}
                >
                  <div>
                    <span style={{ marginRight: 8 }}>{item.quantity}</span>
                    <span>{item.title}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>{item.price}</span>
                </li>
                )
                })}
               
                <hr style={{ height: 2, color: "#00555C" }} />
                <li
                  className="list-group-item d-flex justify-content-between
                   align-items-center border-bottom border-0 p-2"
                >
                  <span> Order- Subtotal</span>
                  <span>${cartTotalPriceRedux}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-0 p-2">
                  <span>Tax(%)</span>
                  <span>$2.12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-0 p-2">
                  <span> Total</span>
                  <span>$2.12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-0 p-2">
                  <span style={{ fontWeight: 600 }}>Amount Remaining</span>
                  <span style={{ fontWeight: 600 }}>$2.12</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>

    </>
  )
}

export default SplitCustom
