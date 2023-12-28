import react from 'react'
import { Link } from 'react-router-dom'
import "./dinning.css"

const Dinnheader =()=>{

return(
<>
<nav>
    <div className="start">
      <a
        className="navbar-brand  mt-2 fs-3 "
        style={{ color: "#00003E" }}
        href="#"
      >
        <i className="fa-solid fa-bars-sort set_icon_nav_first " />
      </a>
      <a className="" href="#">
        <i className="fa-solid fa-utensils set_icon_nav_first" />
      </a>
      <a
        className="navbar-brand ms-3 mb-2"
        href="#"
        style={{ color: "#091b4d" }}
      >
        {" "}
        <span className="set_name"> Dining Management</span>{" "}
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
          <input type="text" className="form-control h-75" placeholder="Search..." />
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
  </>
)
  
    }

    export default Dinnheader