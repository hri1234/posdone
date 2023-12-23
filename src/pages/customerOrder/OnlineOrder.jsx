// import { reduce } from "core-js/core/array"
import react from "react"
// import "./onlineorder.css"
import {useState, useEffect } from "react"

const OnlineOrder = ()=>{
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
      const res = await fetch(`https://mohammad-backend.onrender.com/api/products`);
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
        `https://mohammad-backend.onrender.com/api/products/_id`,
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
         `https://mohammad-backend.onrender.com/api/products/_id`,
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
            <div className="card-header border-0">
              <h3 className="mb-0"style={{fontWeight:"900" , fontStyle:"italic"}}>Online Order</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Images</th>
                    <th scope="col">Stocks</th>
                    <th scope="col">Completion</th>
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
                            {product.ProductName}
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>{product.ProdcutPrice}</td>
                    <td>
                      <span className="media-body">
                         {product.Category}
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
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
                      </div>
                    </td>
                    <td>
                      <span className="media-body">
                         {product.OpeningBalance}
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
                        {/* <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a> */}
                        {/* <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div> */}
                          {/* <div >
      <select value={value} onChange={handleChange}  >
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </div> */}
                      </div>
                    </td>
                  </tr>
                  )
                  })}

                  {/* <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/angular.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$1,800 USD</td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-success" /> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/sketch.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </div>
                      </div>
                    </th>
                    <td>$3,150 USD</td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-danger" /> delayed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              aria-valuenow={72}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "72%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/react.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$4,400 USD</td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-info" /> on schedule
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/vue.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$2,200 USD</td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-success" /> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr> */}
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
      {/* Dark table */}
      {/* <div className="row mt-5">
        <div className="col">
          <div className="card bg-default shadow">
            <div className="card-header bg-transparent border-0">
              <h3 className="text-white mb-0">Card tables</h3>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-dark table-flush">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning" /> pending
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
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
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/angular.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$1,800 USD</td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-success" /> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/sketch.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </div>
                      </div>
                    </th>
                    <td>$3,150 USD</td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-danger" /> delayed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              aria-valuenow={72}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "72%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/react.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$4,400 USD</td>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-info" /> on schedule
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "90%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/vue.jpg"
                          />
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>$2,200 USD</td>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-success" /> completed
                      </span>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          href="#"
                          className="avatar avatar-sm"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-1-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-2-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-3-800x800.jpg"
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
                            src="https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/team-4-800x800.jpg"
                            className="rounded-circle"
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="dropdown">
                        <a
                          className="btn btn-sm btn-icon-only text-light"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  {/* <footer className="footer">
    <div className="row align-items-center justify-content-xl-between">
      <div className="col-xl-6 m-auto text-center">
        <div className="copyright">
          <p>
            Made with{" "}
            <a
              href="https://www.creative-tim.com/product/argon-dashboard"
              target="_blank"
            >
              Argon Dashboard
            </a>{" "}
            by Creative Tim
          </p>
        </div>
      </div>
    </div>
  </footer> */}
</>

)


}
export default OnlineOrder

