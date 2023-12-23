import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlinePaid } from "react-icons/md";
import { BiLayer } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";




const Purchase = () => {
    return (
        <div className="container-fluid " style={{ backgroundColor: "#fff" }}    >
            <div className='row mt-4'>
                <div className="col-md-3 mb-3">
                    <input type="date" class="form-control mt-2 " aria-describedby="emailHelp" />
                </div>
            </div>
            <div className="row mt-2">

                <div className="col-md-3 col-sm-12 ">
                    <div class="card rounded-4  mb-3 " style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}    >
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-start mb-0">
                                <div class="fs-4 ">
                                    <FiFileText className='p' />
                                </div>
                                <div class="mt-2 ms-4">
                                    <h5 class="mb-0 ">0</h5>
                                    <p class="mb-0 ">Total Invoices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                    <div class="card rounded-4   mb-3 " style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}    >
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-start mb-0">
                                <div class="fs-4 ">
                                    <BiLayer />
                                </div>
                                <div class="mt-2 ms-4">
                                    <h5 class="mb-0 "> 0</h5>
                                    <p class="mb-0 ">Total Amount</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                    <div class="card rounded-4    mb-3 " style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}    >
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-start mb-0">
                                <div class="fs-4 ">
                                    <AiOutlineStock />
                                </div>
                                <div class="mt-2 ms-4">
                                    <h5 class="mb-0 ">0</h5>
                                    <p class="mb-0 ">Due Amount</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 ">
                    <div class="card rounded-4   mb-3 " style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}    >
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-start mb-0">
                                <div class="fs-4 border ">
                                    <MdOutlinePaid />
                                </div>
                                <div class="mt-2 ms-4">
                                    <h5 class="mb-0 ">0</h5>
                                    <p class="mb-0 ">Total Paid Amount</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row  rounded  mt-3 ">
                <div className='mt-3'>
                    <div className='d-flex justify-content-between '>
                        <h4 > Purchase list</h4>
                        <div className='d-flex justify-content-between'>
                            <div className='ms-2'>
                                <button type="button" class="btn text-light" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#2d353c" }} >
                                    <FaPlus className='me-1' />
                                    Add Supplier </button>
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class=" modal-dialog modal-xl">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Purchase
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body ">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='table-responsive'>
                                                            <table className="table  "   >
                                                                <thead className=' ' >
                                                                    <tr style={{ fontSize: "14px" }}  >
                                                                        <th scope="col" className='text-center '  >  SL  </th>
                                                                        <th scope="col" className='text-center' >   Product   </th>
                                                                        <th scope="col" className='text-center'> Quantity</th>
                                                                        <th scope="col" className='text-center'>  Unit Price </th>
                                                                        <th scope="col" className='text-center'>  Sale Price </th>
                                                                        <th scope="col" className='text-center '  >  Total  </th>
                                                                        <th scope="col" className='text-center '  >  Delete  </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody className='text-center'>
                                                                    <tr>
                                                                        <th scope="row">1</th>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>

                                                                        <td>
                                                                            <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                                                                <FaEye />
                                                                            </button>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">2</th>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>
                                                                            <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                                                                <FaEye />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">3</th>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>--</td>
                                                                        <td>
                                                                            <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                                                                <FaEye />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className='row'>
                                                            <div className="col-sm-6">
                                                                <div class="mb-3">
                                                                    <label class="form-label">  <span className='text-danger' >*</span>  Supplier  </label>
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div class="mb-3">
                                                                    <label class="form-label">  <span className='text-danger  ' >*</span> Date </label>
                                                                    <input type="date" class="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className="col-sm-6">
                                                                <div class="mb-3">
                                                                    <label class="form-label">  <span className='text-danger' >*</span>  Supplier Memo  </label>
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div class="mb-3">
                                                                    <label class="form-label">  <span className='text-danger  ' >*</span> Purchase Note </label>
                                                                    <input type="text" class="form-control" />
                                                                </div>
                                                            </div>


                                                        </div>
                                                        <div className='text-center'>
                                                            <button type="button" class="    btn " style={{ backgroundColor: "#90ca4b" }} > <FiPlus />
                                                                Supplier</button>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 ">
                                                        <div className="row   " >
                                                            <div className="col-sm-12 ">
                                                                <div className='d-flex justify-content-between'>
                                                                    <h6> Total </h6>
                                                                    <h6 className=''>0.00</h6>
                                                                </div>

                                                                <div className='d-flex  justify-content-between'>
                                                                    <h6 className='mt-1'>Discount:</h6>
                                                                    <div>
                                                                        <input type="text" class="form-control " placeholder="0" />

                                                                    </div>
                                                                </div>
                                                                <div className='d-flex mt-2 justify-content-between'>
                                                                    <h6 className=''>After Discount:</h6>
                                                                    <div>
                                                                        <h6 className=''>0.00</h6>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex mt-2 justify-content-between'>
                                                                    <h6 className='mt-1'>Paid Amount:</h6>
                                                                    <div>
                                                                        <input type="text" class="form-control " placeholder="0" />
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex mt-1 justify-content-between'>
                                                                    <h6 className=''>Due Amount:</h6>
                                                                    <div>
                                                                        <h6 className=''>0.00</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn " style={{ backgroundColor: "#90ca4b" }}>Purchase Order</button>


                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between  '>
                        <div className='mt-2 '>
                            <button type="button" class="btn py-1 bg-dark text-light">
                                <i className="fa-solid fa-cloud-arrow-down"></i>
                                Download CSV
                            </button>
                            <select className='ms-3 px-2 py-1'>
                                <option value="Option 1">Column Select </option>
                                <option value="Option 2"> Id   </option>
                                <option value="Option 3">  Name </option>
                                <option value="Option 4"> Phone  </option>
                                <option value="Option 5"> Address </option>
                                <option value="Option 6"> Action  </option>

                            </select>
                        </div>

                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className='table-responsive'>
                        <table className="table  "   >
                            <thead className='  ' style={{ backgroundColor: "#90ca4b", borderBottom: "2px solid #90ca4b" }} >
                                <tr style={{ fontSize: "14px" }}  >
                                    <th scope="col" className='text-center '  >  Id  </th>
                                    <th scope="col" className='text-center' >   Date    </th>
                                    <th scope="col" className='text-center'> Supplier Name</th>
                                    <th scope="col" className='text-center'>  Total Amount </th>
                                    <th scope="col" className='text-center'>  Discount </th>
                                    <th scope="col" className='text-center'>  Due Amount </th>
                                    <th scope="col" className='text-center'>  Paid Amount	 </th>
                                    <th scope="col" className='text-center'>  Paid Amount	 </th>

                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>


                                    <td>
                                        <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                            <FaEye />
                                        </button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>
                                        <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>--</td>
                                    <td>
                                        <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className='mt-2'>
                    <button type="button" class="btn py-1 bg-dark text-light">
                        <i className="fa-solid fa-cloud-arrow-down"></i>
                        Download CSV
                    </button>
                    <select className='ms-3 px-2 py-1'>
                        <option value="Option 1">Column Select </option>
                        <option value="Option 2"> Date  </option>
                        <option value="Option 3">  Create Date </option>
                        <option value="Option 4"> Purchase invoice Id </option>
                        <option value="Option 5"> Notes  </option>
                        <option value="Option 6"> Action  </option>

                    </select>

                </div>
            </div> */}
            {/* <div className="col-md-12 mt-3">
                <div>
                    <table className="table  "   >
                        <thead className='table-dark rounded-pill   ' >
                            <tr style={{ fontSize: "14px" }}  >
                                <th scope="col" className='text-center '  >  Id  </th>
                                <th scope="col" className='text-center' >   Date  </th>
                                <th scope="col" className='text-center'>  Purchase Invoice id  </th>
                                <th scope="col" className='text-center'> Notes </th>
                                <th scope="col" className='text-center'>  Action </th>

                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <th scope="row">3</th>
                                <td>Nov 24, 2023</td>
                                <td>14</td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                        <FaEye />
                                    </button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Nov 24, 2023</td>
                                <td>14</td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Nov 24, 2023</td>
                                <td>14</td>
                                <td></td>
                                <td>
                                    <button type="button" class="btn  px-3  p-0 m-0 pb-1 text-light " style={{ backgroundColor: "#90ca4b" }}>
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>

          
  );
};

export default Purchase;
