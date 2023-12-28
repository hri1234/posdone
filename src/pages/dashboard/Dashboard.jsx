import React from 'react'
import './Dashboard.css'
import pic1 from '../../Assets/logo/ankit-fotor-bg-remover-20231123135052.png'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
   <>

  {/* wrapper-start */}
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
    <a href="" className="px-3 py-2">
      {" "}
      <i
        className="fa-solid fa-universal-access"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(60, 136, 179)"
        }}
      />
    </a>
    <a href="" className="social">
      <i
        className="fas fa-registered"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(9, 44, 64)"
        }}
      />
    </a>
    <a className="social mt-3" href="#">
      <i
        className="fa-duotone fa-box-circle-check"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(218, 120, 28)"
        }}
      />
    </a>
    <a className="social mt-3" href="#">
      {" "}
      <i
        className="fa-solid fa-cart-shopping"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(110, 41, 200)"
        }}
      />
    </a>
    <a className="social mt-3" href="#">
      {" "}
      <i
        className="fa-duotone fa-gift display-5"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(110, 36, 36)"
        }}
      />
    </a>
    <a className="social mt-3" href="#">
      <i
        className="fa-duotone fa-typewriter"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(62, 144, 173)"
        }}
      />
    </a>
    <a className="social mt-3" href="#">
      <i
        className="fa-solid fa-chart-mixed-up-circle-dollar"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(145, 161, 38)"
        }}
      />
    </a>
    <a className="social mt-3" href="#">
      {" "}
      <i
        className="fa-solid fa-square-phone"
        style={{
          color: "white",
          fontSize: 25,
          lineHeight: 1.6,
          textAlign: "center",
          width: 47,
          height: 47,
          borderRadius: "40%",
          backgroundColor: "rgb(39, 142, 7)"
        }}
      />
    </a>
  </div>
  {/* wrapper-end */}

 
      {/* nav-start */}
      <nav className="navbar navbar-expand-lg p-0 m-0">
        <div className="container-fluid p-0 m-0">
          <a className="navbar-brand mb-3 ms-4 fs-3" style={{fontWeight: 600, color: '#00003E'}} href="#">
            <div className="my">
              <img src={pic1} className="set" alt="" />
            </div>
          </a>
          <a href style={{textDecoration: 'none', fontWeight: 600}} className="fs-5">
            <p className="mt-3 animate-charcter">MY APP</p>
          </a>
          <div className="search-container ms-3">
            <input type="text" name="search" placeholder="Search..." className="search-input" />
            <a href="#" className="search-btn">
              <i className="fas fa-search" />      
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto p-0 m-0">
              <li className="nav-item mt-2 fs-3 ms-5">
                <a className="navbar-brand mt-5 fs-4 mb-2" style={{fontWeight: 600, color: '#00003E'}} href="#">Michel</a>
              </li>
              <li className="nav-item mt-2 me-1">
                <a className="nav-link" href="#"><i className="fas fa-user" style={{color: '#00003E', fontSize: '22px', lineHeight: '35px', textAlign: 'center', width: '35px', height: '35px', borderRadius: '50%'}} /></a>
              </li>
              <li className="nav-item mt-2 me-1">
                <a className="nav-link " aria-current="page" href="#"><i className="fa-solid fa-notes-medical" style={{color: '#0A1E3C', fontSize: '22px', lineHeight: '35px', textAlign: 'center', width: '35px', height: '35px', borderRadius: '50%'}} /></a>
              </li>
              <li className="nav-item mt-2 me-1">
                <a className="nav-link " aria-current="page" href="#"><i className="fa-solid fa-grid-2" style={{color: '#00003E', fontSize: '22px', lineHeight: '35px', textAlign: 'center', width: '35px', height: '35px', borderRadius: '50%'}} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* nav-end */}


      {/* inventeroy-start */}
      <div className="man_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6  col-xs-12 mt-3">
              <div className="card l-bg-orange_red1 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-mail-line mt-3 mx-auto display-4"></i> */}
                      <i className="fas fa-registered display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">
                      <Link to="/Customer-Order" style={{color:"white" , textDecoration:"none"}}>Resgister</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 mt-3">
              
              <div className="card l-bg-sky border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-git-repository-fill mx-auto display-4"></i> */}
                      <i className="fa-solid fa-utensils display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">
                      <Link to="/Dinning" style={{color:"white" , textDecoration:"none"}}>Dinning Mangement</Link>
                    </h5>
                  </div>
                </div>
              </div>
              
            </div> 
            
            <div className="col-md-3 col-sm-6  col-xs-12 mt-3">
              <div className="card l-bg-orange_light border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-wallet-line mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-box-circle-check display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3"> 
                    <Link to="/Inventory"  style={{color:"white" , textDecoration:"none"}}>   Inventory   </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="col-md-3 col-sm-6 col-xs-12  mt-3">
              <div className="card l-bg-orange_green border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-shopping-bag-line mx-auto display-4"></i> */}
                      <i className="ri-team-fill p-3 mx-auto  display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center"> 
                    <Link to="/Customer" style={{color:"white" , textDecoration:"none" }}>Customer</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card  l-bg-orange_pink border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-bank-card-fill mx-auto display-4"></i> */}
                      <i className="fa-solid fa-bags-shopping display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3"> 
                   <Link to="Order" style={{color:"white" , textDecoration:"none"}}>Orders</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-pink1 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-school-fill mx-auto display-4"></i> */}
                      <i className="fa-solid fa-cart-shopping display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3"> Online Orders</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-light_green border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-honour-line mx-auto display-4"></i> */}
                      <i className="fa-sharp fa-solid fa-badge-dollar mx-auto display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Discounts</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-orange_red border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-clapperboard-line mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-gift display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Rewards </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-cherry border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className=" text-center">
                      {/* <i class="ri-shopping-cart-fill mx-auto  display-4"></i> */}
                      <i className="fa-duotone fa-file-invoice display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3"> Invoice</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-blue-dark border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-team-fill p-3 mx-auto  display-4"></i> */}
                      <i className="fa-duotone fa-typewriter display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3">Return</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-green-dark border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-shopping-bag-fill mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-nfc-pen display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3">Exchange</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-orange-dark border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-money-dollar-circle-fill mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-credit-card display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3">Refund</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-sky border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-git-repository-fill mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-landmark display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Transactions</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-red border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-swap-fill mx-auto display-4"></i> */}
                      <i className="fa-solid fa-display-chart-up-circle-dollar display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Cash Logs</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-pink2 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-slideshow-2-fill mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-lock display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Closeout</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-light_blue border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-store-line mx-auto display-4"></i> */}
                      <i className="fa-solid fa-alarm-plus display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3"> Shifts </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-orange_red1 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-mail-line mt-3 mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-wallet display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Tips &amp; Bonus</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-pink3 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-file-line mx-auto display-4"></i> */}
                      <i className="fa-duotone fa-globe-pointer display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Loenex Web</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-light_skyblue border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-map-fill mx-auto display-4"></i> */}
                      <i className="fa-solid fa-message-check display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3"> Feedback </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-light_skyblue1 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-lifebuoy-fill mx-auto display-4"></i> */}
                      <i className="fa-solid fa-id-card display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Employees </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-pink4 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-reserved-line mx-auto display-4"></i> */}
                      <i className="fa-solid fa-chart-mixed-up-circle-dollar display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3">Finance Reports</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-light_skyblue2 border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-basketball-line display-4 mx-auto"></i> */}
                      <i className="fa-duotone fa-mobile display-5" />
                    </div>
                    <h5 className="card-title mb-0 text-center mt-3"> My Apps </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6  col-xs-12">
              <div className="card l-bg-orange_light border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-wallet-line mx-auto display-4"></i> */}
                      <i className="fa-solid fa-circle-check display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3"> Privacy Policy</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card l-bg-blue-dark border-0">
                <div className="card-statistic-3 p-3">
                  <div className="mb-4">
                    <div className="text-center">
                      {/* <i class="ri-team-fill p-3 mx-auto  display-4"></i> */}
                      <i className="fa-solid fa-square-phone display-5" />
                    </div>
                    <h5 className="card-title text-center mb-0 mt-3">Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* inventeroy-end */}
   </>
  )
}

export default Dashboard
