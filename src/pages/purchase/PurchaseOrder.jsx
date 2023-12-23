// import { reduce } from "core-js/core/array"
import react from "react"
// import "./onlineorder.css"
import {useState, useEffect } from "react"

const PurchaseOrder = ()=>{

  
  const[users , setUsers] = useState([])
  const [product , setProduct] = useState()
  const [value, setValue] = useState('');
  const[updateproduct , setUpdatedProduct] = useState([])

 const handleChange = (event) => {
    setValue(event.target.value);
 };
  // const [data , dispatch] = useReducer(reduce , [])

  //Fetch Data through the api

  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://mohammad-backend.onrender.com/api/order`);
      const Data = await res.json()
       console.log(Data)
       setProduct(Data);
    };
    fetchUsers();
  }, []);
 

// Delete product through the api
  const handleDelete = async (id) => {
    alert("Order has been Cancelled !")
    try {
      const res = await fetch(
        `https://mohammad-backend.onrender.com/api/order`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedUsers = users.filter((user) => user._id !== id);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (updatedProduct) => {
    alert("Order has been updated !")
    try {
       const res = await fetch(
         `https://mohammad-backend.onrender.com/api/order`,
         {
           method: "PUT",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(updatedProduct),
         }
       );
       if (res.ok) {
         const data = await res.json();
         setUpdatedProduct(data);
         alert("Product Updated Successfully!");
       }
    } catch (error) {
       console.log(error);
    }
   };


return(
<>
  
  <div className="main-content w-full" style={{margin:"auto" , width:"100%"}}>
    <div className="container mt-5">
      {/* Table */}
      {/* <h2 className="mb-5">Tables Example</h2> */}
      <div className="row">
        <div className="col">
          <div className="card shadow">
          <select value={value} onChange={handleChange} style={{backgroundColor:"black" , color:"white" , borderRadius:"12px" , padding:"3px" , float:"right" , width:"10%"}} >
        <option value="" style={{textAlign:"center"}}>Filter</option>
        <option value="apple" onClick={() => handleDelete(product._id)}>Delete</option>
        <option value="banana" onClick={handleUpdate}>Update</option>
        <option value="orange">Read</option>
      </select>
            <div className="card-header border-0">
              <h3 className="mb-0"style={{fontWeight:"900" , fontStyle:"italic"}}>PurchaseOrder Report</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">PartyAccount</th>
                    <th scope="col">OrderDate</th>
                    <th scope="col">PurchaseSalesLedger</th>
                    <th scope="col">Notes</th>
                    <th scope="col">OrderNo</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Status</th>
                    <th scope="col" >Action</th>
                  </tr>
                </thead>


                <tbody>
                  {product?.map((product,key)=>{
                    return(

                    
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center" key={product._id}>
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            {product.PartyAccount}
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>{product.OrderDate}</td>
                    <td>
                      <span className="media-body">
                         {product.PurchaseSalesLedger}
                      </span>
                    </td>
                    <td>
                    <span className="media-body">
                         {product.Notes}
                      </span>
                      {/* <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle"
                          />
                         
                        </a>
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Romina Hadid"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle"
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Alexander Smith"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle"
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Jessica Doe"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle"
                          />
                        </a>
                      </div> */}
                    </td>
                    <td>
                      <span className="media-body">
                         {product.OrderNo}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                    <span className="media-body">
                         {product.Status}
                      </span>
                    </td>
                    {/* <td>
                    <span className="media-body">
                         {product.newProduct}
                      </span>
                    </td> */}
                    
                    <td className="text-right">
                      <div className="dropdown">
                      <div >
                      {/* <i className="fas fa-ellipsis-v" /> */}
      <select value={value} onChange={handleChange} style={{backgroundColor:"black" , color:"white" , borderRadius:"12px" , padding:"3px"}}>
        <option value="">CRUD</option>
        <option value="apple" onClick={() => handleDelete(product._id)}>Delete</option>
        <option value="banana" onClick={handleUpdate}>Update</option>
        <option value="orange">Read</option>
      </select>
    </div>
                       
                      </div>
                    </td>
                  </tr>
                  )
                  })}
                  
                  
                </tbody>
              </table>
            </div>
            <div className="card-footer py-4">
              <nav aria-label="...">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </div>
</div>
     

 
</>

)


}
export default PurchaseOrder

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function UpdateData() {
//  const [data, setData] = useState({ id: '', name: '' });
//  const [id, setId] = useState('');

//  useEffect(() => {
//     fetchData();
//  }, []);

//  const fetchData = async () => {
//     const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//     setData(result.data);
//  };

//  const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setData({ ...data, [name]: value });
//  };

//  const handleSubmit = async (event) => {
//     event.preventDefault();
//     await axios.put(`https://jsonplaceholder.typicode.com/users/${data.id}`, data);
//     alert('Data updated successfully');
//  };

//  return (
//     <div>
//       <input type="text" placeholder="Enter id" value={id} onChange={(e) => setId(e.target.value)} />
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={data.name} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//  );
// }

// export default UpdateData;