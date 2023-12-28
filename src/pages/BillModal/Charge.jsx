import React from 'react'
import './PaymentSystem.css'
import pic1 from '../../Assets/PNG/Asset 6@4x.png'
import { useSelector } from "react-redux";
import { productPriceFormatter } from "src/utils";
import { Link } from 'react-router-dom';
const Charge = () => {
    const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
    const LonexPayment = cartTotalPriceRedux
    const Number = parseFloat(LonexPayment)
    const Hritik = parseFloat(27.3)
    const newVal = (Number) + (Hritik)

    const onHandelChanges=()=>{
        alert("Your Payment is UnSuccessful!")
    }

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
      <span className="fs-5" style={{ fontWeight: 600 }}>
        Payment System
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
  <div className="container-fluid ">
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
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
  <div className="col-md-4 offset-md-4 py-4  px-5">
    <div className="card mb-4 px-3 py-1 rounded-4 shadow border-0">
      <div className="card-body" style={{ width: "100%", height: "100%" }}>
        <h4 style={{ color: "#0D536D", fontWeight: 600 }} className="mt-1">
          
          ${newVal}
        </h4>
        <h5 style={{ color: "#0D536D", fontWeight: 600 }}>Sale</h5>
        <div className="mt-3  mb-3 set_img mx-auto">
          <img
            src={pic1}
            className="img-fluid"
            style={{ width: "100%" }}
            alt=""
          />
        </div>
        <div className="p-0">
          <span style={{ color: "#0D536D", fontWeight: 500, fontSize: 18 }}>
            Customer is choosing <br /> payment methode
          </span>
        </div>
        <button
          type="button"
          className="w-100 btn btn-lg btn-outline mt-5"
          style={{ borderRadius: 11, backgroundColor: "#ed3746" }}
          onClick={onHandelChanges}
        >
          <span style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
          <Link to="/BillModal"  style={{ borderRadius: 11, backgroundColor: "#ed3746" ,color:"black" , textDecoration:"none" }}> Cancel Process</Link>
            
          </span>
        </button>
      </div>
    </div>
  </div>
</div>



  </div>
   </>
  )
}

export default Charge
