import React from 'react'
import { Modal, Button } from "react-bootstrap";
import "./tble.scss";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tableorder } from 'src/store/slices/table.slice';


const TbleModal = ({ modalShow, onCloseModal }) => {
    const dispatch = useDispatch();
    const [formState,setFormstate]=useState({})




    const  handlechange=(e)=>{
        setFormstate({...formState,[e.target.name]:e.target.value})
    
    }
    console.log('setFormstate',formState)




    const handleCloseModal = () => {
        onCloseModal(false);
    }
     
    const handleSubmit =(e)=>{
        e.preventDefault()
console.log("handleSubmit",formState)
dispatch(tableorder(formState))

    }
    

    return (
        <div>
            <Modal
                show={modalShow}
                onHide={() => handleCloseModal()}
                aria-labelledby="single-product-modal"
                className="modal-pos fade"
                size="md"
            >
                <Modal.Body className="p-0">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <span
                                className="btn-close position-absolute top-0 end-0 m-4"
                                onClick={() => handleCloseModal()}
                            />


                            <div className="container">
                                <h2>Table Booking Form</h2>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" onChange={handlechange}   name="name" value={formState?.name} required="" />
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" onChange={handlechange}   required="" />
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input type="tel" id="phone" name="phone" onChange={handlechange}  required="" />
                                    <label htmlFor="date">Date:</label>
                                    <input type="date" id="date" name="date" onChange={handlechange} required="" />
                                    <label htmlFor="time">Time:</label>
                                    <input type="time" id="time" name="time" onChange={handlechange} required="" />
                                    <label htmlFor="guests">Number of Guests:</label>
                                    <input type="number" id="guests" name="guests"  onChange={handlechange} min={1} required="" />
                                    <label htmlFor="specialRequests">Special Requests:</label>
                                    <textarea
                                        id="specialRequests"
                                        name="specialRequests"
                                        rows={4}
                                        defaultValue={""}
                                    />
                                    <input type="submit" defaultValue="Book Table" />
                                </form>
                            </div>



                        </div>
                    </div>



                </Modal.Body>
            </Modal>

        </div>
    )
}

export default TbleModal
