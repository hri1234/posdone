import react from "react"
import "./Table.css"
import Dinnheader from "./Dinnheader";
import Dinnside from "./Dinnside"
import reservation from "../../Assets/card-icons/reservation.png"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import {useState , useEffect} from "react";
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "69%",
  bgcolor: 'background.paper',
  height:"400px",
  border: 'none',
  boxShadow: 24,
  p: 4,
};


const Table =()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [reservationcause, setReservationcause] = useState('');
    const [gender, setGender] = useState('');
    const [reservation , setReservation] = useState([])
   
    const handleSubmit = async (e) => {
       e.preventDefault();
   
       const newEntry = {
         name,
         phonenumber,
         email,
         reservationcause,
         gender,
       };
   
       try {
         await axios.post('https://api-oaw2.onrender.com/reservation', newEntry);
         alert('Data submitted successfully');
       } catch (error) {
         console.error('Error submitting data:', error);
         alert('Error submitting data. Please try again.');
       }
    };

const FetchFunction = async()=>{
    const response = await fetch("https://api-oaw2.onrender.com/reservation")
    const newValue = await response.json()
    console.log(newValue)
    setReservation(newValue)
}
useEffect(()=>{
    FetchFunction()
},[])


    return(
        <>
         <Dinnheader />
        <div className="container mt-3">
    <div className="row">
      <div className="col-sm-12 col-md-6 my-3"> 
        <h3 className="d-inline">
          {/* <img
            src={reservation}
            alt="image"
            className="salesicon"
            style={{ width: "40px" , height:"40px" }}
            
          /> */}
          Reservation
        </h3>
       
        {/* <button class="btn btn-primary d-inline float-end" type="button">Back</button> */} 
      </div>
    </div>
  </div>
  <div className="float-end" style={{position:"relative" , bottom:"40px" , right:"150px"}}>
          {/* <button style={{borderRadius:"10px" , width:"110px" , height:"40px" , backgroundColor:"white" , border:"none"}}>
     Reservation
          </button> */}
           <Button onClick={handleOpen} style={{fontSize:"20px" , fontStyle:"italic"}}>Reservation</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="container">
    <div className="row ">
      <div className="col-sm-4 col-md-4 ">
        <h4 className="d-inline">
          <img
            src="image/receipt.png"
            alt="image"
            className="salesicon"
            style={{ width: "3vw" }}
          />
          Receipt Entry
        </h4>
        {/* <button class="btn btn-primary d-inline float-end" type="button">Back</button> */}
      </div>
    </div>
  </div>
  <div className="container c1 py-3">
    <div className="row">
      <div className=" col-sm-12 col-md-4" style={{ lineHeight: "3rem" }}>
        <label className="" htmlFor="specificSizeSelect">
          NAME:
        </label>
        <br />
        <input
         value={name}
          type="text"
          className="form-control "
          id="inputPassword "
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="  col-md-4 col-sm-12" style={{ lineHeight: "3rem" }}>
        <label className="" htmlFor="specificSizeSelect">
          PHONENUMBER:
        </label>
        <input
        value={phonenumber}
          type="text"
          className="form-control"
          placeholder="Enter your Phone number "
          style={{ width: "27.5vw" }}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </div>
      <div className=" col-sm-12 col-md-4" style={{ lineHeight: "3rem" }}>
        <label className="" htmlFor="specificSizeSelect">
          GMAIL:
        </label>
        <input
        value ={email}
          type="text"
          className="form-control"
          placeholder="Enter your Gmail "
          style={{ width: "27.5vw" }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-sm-4 col-md-4" style={{ lineHeight: "3rem" }}>
        <label className="" htmlFor="specificSizeSelect">
          RESERVATIONCAUSE:
        </label>
        <input
        value={reservationcause}
          type="text"
          className="form-control"
          placeholder="Enter your Reservation "
          style={{ width: "27.5vw" }}
          onChange={(e) => setReservationcause(e.target.value)}

        />
      </div>
      <div className=" col-sm-12 col-md-4" style={{ lineHeight: "3rem" }}>
        <label className="" htmlFor="autoSizingInputGroup">
          GENDER:
        </label>
        <input
        value={gender}
          type="text"
          className="form-control"
          id="inputPassword "
          placeholder="Enter your Gender"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      {/* <div className="col-md-4 col-sm-12 " style={{ lineHeight: "3rem" }}>
        <label className="" htmlFor="autoSizingInputGroup">
          NOTES:
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword "
          placeholder="Enter Notes"
        />
      </div> */}
    </div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
      <button className="btn btn-primary me-md-2 Btn_Save" type="button"  onClick={handleSubmit}>
        Save
      </button>
      <button className="btn btn-primary Btn_Close" type="button">
        Cancel
      </button>
    </div>
  </div>
          </Typography>
        </Box>
      </Modal>
        </div>
  <div
    className="container c1 my-2"
    style={{ marginBottom: "3rem", paddingBottom: "2rem" }}
  >
    <div style={{ overflow: "auto" }}>
      <table className="table table-hover">
        <thead>
          {/* <th> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th> */}
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              ORDER<span style={{ color: "white" }}>_</span>NO.
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              NAME
            </th>
            <th scope="col " style={{ textAlign: "center" }}>
              EMAIL
            </th>
            <th scope="col " style={{ textAlign: "center" }}>
              PHONENUMBER
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              GENDER
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              RESERVATION
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              DUE ON
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              ORDER DATE
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              DEBITORS<span style={{ color: "white" }}>_</span>ACCOUNT
            </th>
          </tr>
        </thead>
        <tbody>
        {reservation?.map((value,i)=>{
            return(
          <tr>
            {/* <td> <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"></td> */}
            <td key={value._id=i}>
              <span className="card text-center" >{value._id}</span>
            </td>
            <td>
              <span className="card text-center">{value.name}</span>
            </td>
            <td>
              <span className="card text-center">{value.email}</span>
            </td>
            <td>
              <span className="card text-center">{value.phonenumber}</span>
            </td>
            <td>
              <span className="card text-center">{value.gender}</span>
            </td>
            <td>
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {value.reservationcause}
              </span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              {" "}
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                2012456587
              </span>
            </td>
          </tr>
      
            )
        })}
          <tr>
            {/* <td> <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"></td> */}
            <td>
              <span className="card text-center">#7678</span>
            </td>
            <td>
              <span className="card text-center">Apple</span>
            </td>
            <td>
              <span className="card text-center">10kg</span>
            </td>
            <td>
              <span className="card text-center">5kg</span>
            </td>
            <td>
              <span className="card text-center">20 $</span>
            </td>
            <td>
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                22.00 $
              </span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              {" "}
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                2012456587
              </span>
            </td>
          </tr>
          <tr>
            {/* <td> <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"></td> */}
            <td>
              <span className="card text-center">#7678</span>
            </td>
            <td>
              <span className="card text-center">Apple</span>
            </td>
            <td>
              <span className="card text-center">10kg</span>
            </td>
            <td>
              <span className="card text-center">5kg</span>
            </td>
            <td>
              <span className="card text-center">20 $</span>
            </td>
            <td>
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                22.00 $
              </span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              <span className="card text-center p-2">02-08-2022</span>
            </td>
            <td>
              {" "}
              <span
                className="card text-center"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                2012456587
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Dinnside />
  </div>
</>
    )
}

export default Table

