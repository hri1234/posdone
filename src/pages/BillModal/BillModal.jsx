
import React, { useEffect ,useState} from 'react'
import './PayFullAmount.css'
import pic1 from '../../Assets/PNG/Asset 5@4x.png'
import pic2 from '../../Assets/PNG/Asset 7@4x.png'
// import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { productPriceFormatter } from "src/utils";
import Calculater from './Calculater';
// import { parseFloat } from 'core-js/core/number';


const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "40%",
  bgcolor: 'background.paper',
  boxShadow: "0 12px 19px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  height:'400px',
  borderRadius:"20px"
};


const BillModal = ( {modalShow,
    onCloseModal,
    
    total,
    subtotal,
    tax,
    orderId,}) => {
       const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
         const handleClose = () => setOpen(false);
        const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
        console.log("cartTotalPriceRedux", cartTotalPriceRedux)
        const menuRedux = useSelector(({ menu }) => menu?.items);
        const cartItemsRedux = useSelector(({ cart }) => cart?.items);
        console.log("cartItemsRedux", cartItemsRedux);
        const printerRedux = useSelector(({ printing }) => printing?.items);
        const printerActive = printerRedux?.filter((f) => f?.status)[0];
        console.log("printerActive", printerActive);
        const HritikNumberTotalPrice = cartTotalPriceRedux
        const [customer , setCustomer] = useState([])
        const [ visible , setVisible] = useState(true)
        const [show , setShow] = useState(false)
        const [price , setPrice] = useState(HritikNumberTotalPrice)

        const priceHandelChanges = () =>{
          const newElement = parseFloat(HritikNumberTotalPrice) - 60
          setPrice(newElement)
        }

        const priceHandelChangesOn = ()=>{
          const newValue = parseFloat(HritikNumberTotalPrice) - 40
          setPrice(newValue)
        }

        const DuplicatePriceHandelChanges =()=>{
          const newValue = parseFloat(HritikNumberTotalPrice) - 20
          setPrice(newValue)
        }


        const HideData =()=>{
          setShow(false)
        }

        const HandelClick =()=>{
          setVisible(false)
        }


        const SingleCustomer = async()=>{
            const response = await fetch("https://pos-api-3v8o.onrender.com/api/customer/")
            const Data = await response.json()
            console.log(Data)
            setCustomer(Data)
        }
        useEffect(()=>{
            SingleCustomer()
        },[])

           
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
            Pay Full Amount $({price})
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
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                          style={{ color: "#00555c", fontWeight: 600 }}
                        >
                          {" "}
                          Pay Full Amount
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link "
                          href="#"
                          style={{ color: "#0D536D" }}
                        >
                            <Link to="/SplitCustom" style={{color:"#0D536D" , textDecoration:"none"}}>Split Custom Amount</Link>
                          
                        </a>
                      </li>
                    </ul>
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
                            <div className="col-md-12">
                              <button
                                type="button"
                                className="btn set_btn w-100 p-2 mt-2"
                              >
                                {" "}
                                <Link to="/Charge" style={{color:"black" , textDecoration:"none"}}>Charge $ 27.22 on  Connected Device{" "}</Link>
                                
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span style={{marginBottom:"10px" , marginLeft:"20px"}}>
                      {/* <i className="fas fa-ellipsis-v" /> */}
      <select value="More" style={{backgroundColor:"white" , color:"#A3A3A3" , borderRadius:"12px" , padding:"3px", transition:"0.5s" , border:"none" , float:"right" , width:"90px" , marginRight:"40px" , fontWeight:"500"}} onChange={HandelClick} >
        {/* <p value="" style={{textAlign:"center"}}>More</p> */}
        <option value="Add Tax"  style={{textAlign:"left"}} >{visible} more</option>
        <option value="Add Tax"  style={{textAlign:"left"}}>Add Tax</option>
        <option value="remove"  style={{textAlign:"left"}}>Remove Tax</option>
        <option value="remove"  style={{textAlign:"left"}}>Add Service Fees</option>
        <option value="remove"  style={{textAlign:"left"}}>Remove Service Fees</option>
      </select>
    </span>
    
                      {/* <div className="card-body p-0">
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

                          <span style={{ fontSize: "12px !important" }}>Add Services Fees</span>
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
                            Remove
                          </span>
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="card mb-3 set_card">
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
                          <div className="col-md-2">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                                onClick={DuplicatePriceHandelChanges}
                              >
                                {" "}
                                $20.00{" "}
                              </button>
                            </div>
                            <div className="col-md-2">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                              onClick={ priceHandelChangesOn }
                              >
                                {" "}
                                $40.00{" "}
                              </button>
                            </div>
                            <div className="col-md-2">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                                onClick={priceHandelChanges}
                              >
                                {" "}
                                $60.00{" "}
                              </button>
                            </div>
                            <div className="col-md-2">
                              <button
                              style={{paddingTop:"-10px" ,}}
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                              >
                                <Button onClick={handleOpen} style={{height:'10px' ,paddingTop:"-10px" , color:"#79B5D4"}}>Custom</Button>
      <Modal {...show}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       onClick={HandelClick}  >
        <Box sx={style}>
         
       <Calculater />
         
        </Box>
      </Modal>
                          
                              </button>
                            </div>
                            <div className="col-md-3">
                              <button
                                type="button"
                                className="btn  w-100 p-2 mt-2"
                                style={{ backgroundColor: "#3ab54a", color: "white" }}
                              >
                                {" "}
                                <Link to="/Payment" style={{color:"black" , textDecoration:"none" , backgroundColor: "#3ab54a", color: "white" }}>Cash{" "}</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <span style={{marginBottom:"10px" , marginLeft:"20px"}}>
                      <i className="fas fa-ellipsis-v" />
      <select value="More" style={{backgroundColor:"white" , color:"#A3A3A3" , borderRadius:"12px" , padding:"3px", transition:"0.5s" , border:"none" , float:"right" , width:"90px" , marginRight:"40px" , fontWeight:"500"}} onChange={HandelClick} >
        {/* <p value="" style={{textAlign:"center"}}>More</p> */}
        {/* <option value="Add Tax"  style={{textAlign:"left"}} >{visible} more</option>
        <option value="Add Tax"  style={{textAlign:"left"}}>Add Tax</option>
        <option value="remove"  style={{textAlign:"left"}}>Remove Tax</option> */}
        {/* <option value="remove"  style={{textAlign:"left"}}>Add Service Fees</option>
        <option value="remove"  style={{textAlign:"left"}}>Remove Service Fees</option> */}
      {/* </select>
    </span> */} 
                      {/* <div className="card-body p-0">
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
                      </div> */}
                    </div>
                  </div>
                  <div className="card mb-1 set_card">
                    <div className="row g-0">
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title fs-5">
                            <i className="fa-sharp fa-regular fa-circle-dot set_icon" />
                            <span className="ms-2 fs-4">Other</span>
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
                          <div className="col-md-4">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                              >
                                {" "}
                                Payment Manually{" "}
                              </button>
                            </div>
                            <div className="col-md-4">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                              >
                                {" "}
                            Select Customer{" "}
                              </button>
                            </div>
                            <div className="col-md-4">
                              <button
                                type="button"
                                className="btn set_btn1 w-100 p-2 mt-2"
                              >
                                {" "}
                                RewardUp Gift Card{" "}
                              </button>
                            </div>
                         
                          </div>
                        </div>
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
               
                {cartItemsRedux?.map((cartProduct, i) => {
                  return(
                <li
                  className="list-group-item d-flex justify-content-between align-items-center rounded-0 border-top border-bottom border-0 p-2" key={cartProduct?._id + i}
                  style={{ backgroundColor: "#f7f7f7" }}
                >
                   
                  <div>
                    <span style={{ marginRight: 8 }}>{cartProduct.quantity}</span>
                    <span>{cartProduct.title}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>{cartProduct.price}</span>
                  <span>
                         {productPriceFormatter(
                            cartProduct.price * cartProduct.quantity + ""
                          )}
                        </span>
                </li>
                  )
                })}
               
                <hr style={{ height: 2, color: "#00555C" }} />
            
                {/* { cartTotalPriceRedux?.map((done,l)=>{
                    return( */}
                <li
                  className="list-group-item d-flex justify-content-between
                   align-items-center border-bottom border-0 p-2" 
                >
                    {/* <span key={done._id + l}></span> */}
                  <span> Order- Subtotal</span>
                  <span>{HritikNumberTotalPrice}</span>
                </li>
                    {/* )
            })} */}
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

export default BillModal
