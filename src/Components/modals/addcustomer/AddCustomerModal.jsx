import React from 'react'
import { Modal, Button } from "react-bootstrap";
 import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { customer } from 'src/store/slices/customer.slice';


const AddCustomerModal = ({ modalShow, onCloseModal }) => {
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
dispatch(customer(formState))

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


                            <div className="container d-flex justify-content-between mb-3">
                                <div className="col d-flex flex-row justify-content-center p-0">
                                    <i className="bi bi-1-circle-fill" />
                                    <p className="ms-2 mb-0">CUSTOMER INFO</p>
                                </div>


                            </div>
                            <div className="continer">
                                <div className="col">
                                    <div className="row  mb-3">
                                        <div className="col-sm-6 ">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">
                                                        Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        onChange={handlechange}
                                                        value={formState?.name}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">
                                                        Contact no:
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="name"
                                                        onChange={handlechange}
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-sm-6 ">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="name"
                                                        onChange={handlechange}
                                                    />
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="float-end">
                                        <button className="btn btn-primary">Cancel</button>
                                        <button className="btn btn-primary"> Next </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

        </div>
    )
}

export default AddCustomerModal
