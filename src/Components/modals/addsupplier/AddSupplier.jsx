import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import {addSupplier} from "src/store/slices/addsupplier.slice"
import { useState } from 'react';


const AddSupplier = ({ modalShow, onCloseModal}) => {

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
dispatch(addSupplier(formState))

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





                           
                                        
                                        <div class="modal-body modal-lg">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <form onSubmit={handleSubmit} >

                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">  <span className='text-danger'> * </span>  Name  </label>
                                                        <input type="text" class="form-control"  onChange={handlechange}
                                                        value={formState?.name || ""}   placeholder="name" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">  <span className='text-danger'> * </span> Phone  </label>
                                                        <input type="text" class="form-control" placeholder="Phone" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlInput1" class="form-label">   <span className='text-danger'> * </span> Address  </label>
                                                        <input type="text" class="form-control" placeholder="Address" />
                                                    </div>
                                                    <div className='text-center mb-3'>
                                                        <button type="button" class="btn   " style={{ backgroundColor: "#90ca4b" }} >   Add Supplier </button>

                                                    </div>
                                                    <div className='d-flex justify-content-between  mb-3'>
                                                        <h6 className='mt-1'>  Import From CSV  </h6>
                                                        <div>
                                                            <button type="button" class="btn  bg-dark text-light" style={{ fontSize: "15px" }} >
                                                                Download CSV
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='text-center mb-3'>
                                                        <p className='text-danger '>Please select a CSV file for uploading</p>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <div class="mb-3  container ">
                                                            <input class="form-control p-2 " type="file" id="formFile" />
                                                        </div>
                                                    </div>
                                                    <div className='text-center mb-3'>
                                                        <button type="button" class="btn  text-light opacity-25 " style={{ backgroundColor: "#90ca4b" }} >   Import From CSV  </button>

                                                    </div>
                                                    </form>
                                                   
                                                </div>

                                            </div>
                                        </div>
                                        {/* <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div> */}
                                    </div>
                                </div>
                           




                        
                  








                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddSupplier
