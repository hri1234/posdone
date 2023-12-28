import react from "react"
import { Link } from "react-router-dom"
import KitchenDinning from "./KitchenDinning"
import "./dinning.css"

const Dinnside =()=>{
    return(
    <>
     <div className="sidebar close" style={{overflow:"hidden"}}>
    <ul className="nav-links">
    <Link to="/Table">
      <li className="set_li">
        <a href="#">
          <i className="fa-solid fa-presentation-screen" />
          <span className="link_name">Reservation </span>
        </a>
      </li> 
      </Link>
      <Link to="/KitchenDinning">
      <li className="set_li">
        <a href="#">
          <i className="fa-solid fa-kitchen-set" />
          <span className="link_name"> Kitchen</span>
        </a>
      </li>
      </Link>
      <Link to="/table-booking">
      <li className="set_li">
        <a href="#">
          <i className="fa-solid fa-table" />
          <span className="link_name"> Tables</span>
        </a>
      </li>
      </Link>
      <Link to="/Bells">
      <li className="set_li">
        <a href="#">
          <i className="fa-solid fa-bell" />
          <span className="link_name">Bells</span>
        </a>
      </li>
      </Link>
      <li className="set_li">
        <a href="#">
          <i className="fa-solid fa-audio-description" />
          <span className="link_name"> Audit Logs </span>
        </a>
      </li>
    </ul>
  </div>
  {/* <section class="home-section">
    <div class="home-content">
        <KitchenDinning />
    </div>
  </section> */}

   </>
     )
}

export default Dinnside