// // import MenuIcon from "@mui/icons-material/Menu";
// // import { alpha, styled } from "@mui/material/styles";
// // import { Box, Stack, AppBar, Toolbar } from "@mui/material";
// // components
// // import ProfilePopover from "src/Components/selection/ProfilePopover";
// // css
// // import "./dashboardNavbar.scss";

// import { Close } from "@mui/icons-material";

// // ----------------------------------------------------------------------

// import { Link } from "react-router-dom";
// import { ROUTES_URL } from "src/constants/url.constant";

// export default function DashboardNavbar({ toggleSidebar, isOpenSidebar }) {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light bg-light"
//       style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
//     >
//       <div className="container-fluid ms-2">
//         {isOpenSidebar ? (
//           <Close
//             onClick={() => toggleSidebar()}
//             htmlColor="#092c40"
//             fontSize="large"
//           />
//         ) : (
//           <a>
//             <i
//               className="fa-solid fa-bars-sort pointer"
//               style={{ fontSize: "25px", color: "rgb(9, 44, 64)" }}
//               onClick={() => toggleSidebar()}
//             />
//           </a>
//         )}
//         <a className="navbar-brand ms-3" href="#">
//           <i
//             className="fas fa-registered"
//             style={{
//               color: "white",
//               fontSize: "15px",
//               lineHeight: "30px",
//               textAlign: "center",
//               width: "30px",
//               height: "30px",
//               borderRadius: "40%",
//               backgroundColor: "rgb(9, 44, 64)",
//             }}
//           />
//         </a>

//         <Link className="navbar-brand fs-4" to={ROUTES_URL.HOME}>
//           <b> REGISTER </b>{" "}
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item ">
//               <div className="main">
//                 <div className="input-group mt-3">
//                   <button className="btn btn-light " type="button">
//                     <i
//                       className="fa-solid fa-magnifying-glass"
//                       style={{ fontSize: "20px" }}
//                     />
//                   </button>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Search..."
//                   />
//                   <div className="input-group-append">
//                     <button
//                       className="btn btn-secondary border-start-0"
//                       type="button"
//                       style={{
//                         backgroundColor: "white",
//                         border: "1px solid rgb(204, 203, 203)",
//                       }}
//                     >
//                       <i
//                         className="fa-duotone fa-barcode-read"
//                         style={{ fontSize: "25px", color: "#00003E" }}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li className="nav-item mt-2">
//               <a className="nav-link" href="#">
//                 <i
//                   className="fa fa-bell"
//                   style={{
//                     color: "#0A1E3C",
//                     fontSize: "26px",
//                     lineHeight: "45px",
//                     textAlign: "center",
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               </a>
//             </li>
//             <li className="nav-item mt-2">
//               <a className="nav-link " aria-current="page" href="#">
//                 <i
//                   className="fa fa-envelope"
//                   style={{
//                     color: "#0A1E3C",
//                     fontSize: "26px",
//                     lineHeight: "45px",
//                     textAlign: "center",
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               </a>
//             </li>
//             <li className="nav-item mt-2">
//               <a className="nav-link" href="#">
//                 <i
//                   className="fa fa-plus-circle"
//                   style={{
//                     color: "#0A1E3C",
//                     fontSize: "26px",
//                     lineHeight: "45px",
//                     textAlign: "center",
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               </a>
//             </li>
//             <li className="nav-item mt-2">
//               <a className="nav-link" href="#">
//                 <i
//                   className="fa-solid fa-arrows-rotate"
//                   style={{
//                     color: "#0A1E3C",
//                     fontSize: "26px",
//                     lineHeight: "45px",
//                     textAlign: "center",
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               </a>
//             </li>
//             <li className="nav-item mt-2">
//               <a className="nav-link" href="#">
//                 <div className="btn-group dropstart">
//                   <i
//                     className="fa-solid fa-grid"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     style={{
//                       color: "#0A1E3C",
//                       fontSize: "26px",
//                       lineHeight: "45px",
//                       textAlign: "center",
//                       width: "45px",
//                       height: "45px",
//                       borderRadius: "50%",
//                     }}
//                   ></i>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         {" "}
//                         <i className="fa-regular fa-id-card-clip me-2" />
//                         Merchant ID
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         <i className="fa-solid fa-notes me-2" />
//                         Add Note
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         {" "}
//                         <i className="fa-regular fa-cash-register me-2" />
//                         <Link to="/SplitCustom" style={{color:"#0D536D" , textDecoration:"none"}}>Open Register</Link>
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         {" "}
//                         <i className="fa-regular fa-language me-2" />
//                         Languages
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         {" "}
//                         <i className="fa-duotone fa-gear-complex me-2" />
//                         Support
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
