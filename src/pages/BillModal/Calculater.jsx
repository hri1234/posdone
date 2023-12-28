import React from 'react'
import './Calculater.css'
import {useState} from "react"
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'

const Calculater = () => {
    const [amount, setAmount] = useState('');

 const handleInputChange = (e) => {
    const value = e.target.value;
    setAmount(value);
 };

 const handleClear = () => {
    setAmount('');
 };

 const handleBackspace = () => {
    setAmount(amount.slice(0, -1));
 };

 const handleButtonClick = (buttonValue) => {
    if (buttonValue === 'clear') {
      handleClear();
    } else if (buttonValue === 'backspace') {
      handleBackspace();
    } else {
      setAmount(amount + buttonValue);
    }
 };

 const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
 return (
   <>
   <div className="container" style={{position:"relative" ,left:"-160px" , bottom:"85px"}}>
 <div className="row">
    <div className="col-md-12 offset-md-3 mt-5">
      <div className="card mb-3 set_card px-5">
        <div className="card-body row">
          <div className="col-md-6">
            <div
              className="btn-group-vertical ml-4 mt-4"
              role="group"
              aria-label="Basic example"
              style={{ width: "100%" }}
            >
              {/* <div class="btn-group" style="width: 100%;">
                           <input class="text-center form-control-lg mb-2" id="code" style="width: 100%; border: 2px solid #cfd3d4;">
                       </div> */}
              <div className="btn-group gap-2 mb-2" style={{ width: "100%" }}>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(1)}
                >
                 <p className="mb-0">1</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(2)}
                >
                 <p className="mb-0">2</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(3)}
                >
                 <p className="mb-0">3</p>
                </button>
              </div>
              <div className="btn-group gap-2 mb-2" style={{ width: "100%" }}>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(4)}
                >
                 <p className="mb-0">4</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(5)}
                >
                 <p className="mb-0">5</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(6)}
                >
                 <p className="mb-0">6</p>
                </button>
              </div>
              <div className="btn-group gap-2 mb-2" style={{ width: "100%" }}>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(7)}
                >
                 <p className="mb-0">7</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(8)}
                >
                 <p className="mb-0">8</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(9)}
                >
                 <p className="mb-0">9</p>
                </button>
              </div>
              <div className="btn-group gap-2 mb-2" style={{ width: "100%" }}>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(0)}
                >
                 <p className="mb-0">00</p>
                </button>
                <button
                 type="button"
                 className="btn btn-outline-secondary set_btn"
                 style={{ width: "33.33%" }}
                 onClick={() => handleButtonClick(0)}
                >
                 <p className="mb-0">0</p>
                </button>
                <button
                 type="button"
                 className="btn"
                 onClick={() => handleButtonClick('backspace')}
                 style={{
                    width: "33.33%",
                    backgroundColor: "#0d536d",
                    borderRadius: 9
                 }}
                >
                 <i
                    className="fa-thin fa-delete-left fs-3 mt-1"
                    style={{ color: "#fff" }}
                 />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <div className="ml-4 mt-2">
              <div style={{ marginBottom: 5 }}>
                <h6
                 className="text-center "
                 style={{ color: "#0d536d", fontWeight: 600 }}
                >
                 Split custom Amount
                </h6>
                <button type="button" className="btn" style={{ width: "100%" }} onChange={handleInputChange}>
                 <span
                  type="text"
                  
                  onChange={handleInputChange}
                //   style={{ width: '100%' }}
                    className="fs-3"
                    style={{
                      color: "#0d536d",
                      borderBottomStyle: "dotted",
                      borderColor: "#cfd3d4",
                      fontWeight: 600,
                      width: '100%' 
                      
                    }}
                 >
                    {amount}
                 </span>
                </button>
              </div>
              <div>
                <button
                 type="button"
                 className="btn mb-3 py-3 mt-4"
                 style={{
                    width: "100%",
                    backgroundColor: "#3ab54a",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: 9
                 }}
                 disabled={
                    cartTotalPriceRedux?.totalprice === 0 &&
                    cartTotalPriceRedux?.totalprice === ""
                 }
                >
                 <Link to="/Payment" style={{color:"white" , textDecoration:"none"}}  disabled={
                    cartTotalPriceRedux?.totalprice === 0 &&
                    cartTotalPriceRedux?.totalprice === ""
                 }>Pay{" "}</Link>
                </button>
                <button
                 onClick={() => handleButtonClick('clear')}
                 type="button"
                 className="btn py-3"
                 style={{
                    width: "100%",
                    backgroundColor: "#ed3746",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: 9
                 }}
                >
                 Cancel
                </button>
              </div>
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

export default Calculater