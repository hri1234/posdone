import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DigitalWatch from "./DigitalWatch";
import kitchenorder from "../../constants/kitchenorder.constant"
import "./kichenOrder.scss"
import Dinnheader from "../diningmanagement/Dinnheader"
import  Dinnside from "../diningmanagement/Dinnside"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const KitchenOrder = () => {
  const [users, setUsers] = useState([
    {startTime: null, elapsedTime: 0}
  ]);
  const[time , setTime] = useState()
  const[massage , setMassage] = useState([])
  const [date, setDate] = useState(new Date());
  const [ data , setData] = useState(kitchenorder);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');


useEffect(() => {
  fetch(`${process.env.REACT_APP_SERVER_URL}/user`)
    .then((response) => response.json())
    .then((data) => {
      const filteredItems = data.filter((user) => user.quantity > 5);
      setUsers(filteredItems);
    });
}, []);

const handleChangeDone = (e) => {
  setSelectedItem(e.target.value);
};



  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user`);
      const data = await res.json();
      setUsers(data);
    };
    const timer = setInterval(() => {
      setDate(new Date());
   }, 1000);

    fetchUsers();

    return () => {
      clearInterval(timer);
   };

  }, []);





  
  useEffect(() => {
    const timer = setInterval(() => {
        setDate(new Date());
    }, 1000);

    return () => {
        clearInterval(timer);
    };
}, []);


const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;


const handleEdit = async(id)=>{
  try {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/user/${id}`,
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
  const timer = setInterval(() => {
    setDate(new Date());
 }, 1000);
  clearInterval(timer);
  alert("Completed Order!")
  massage.push({name : users?.username , message : `Hello ${users?.username} your order is ready.`})
}




  const handleDelete = async (id) => {
    alert("Order has been Cancelled !")
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/${id}`,
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


// Timer hass been started 
const startTimer = (id) => {
  setUsers((data) =>
    data.map((user) =>
      user.id === id ? { ...user, startTime: Date.now(), elapsedTime: 0 } : user
    )
  );
};

const updateElapsedTime = () => {
  setUsers((data) =>
    data.map((user) =>
      user.startTime ? { ...user, elapsedTime: Date.now() - user.startTime } : user
    )
  );
};

useEffect(() => {
  const timer = setInterval(updateElapsedTime, 1000);
  return () => clearInterval(timer);
}, []);

const filteredProducts = users.filter((user) => user.elapsedTime > 30000);






  return (
    <>
    <Dinnheader />
   
    {/* <h3 style={{color:"black" , fontWeight:"900" , fontStyle:"italic"}}>KitchenOrder</h3> */}
    <div className="container-fluid">
    <div className="row center" style={{width:"full"}}>
      <span style={{display:"inline"}}>
      <DigitalWatch />
      <h3 style={{color:"black" , fontWeight:"900" , fontStyle:"italic" , position:"relative", left:"117px"}}>Online KitchenOrder</h3>

{/* code starts herse */}

<select value={selectedItem} onChange={handleChangeDone} style={{backgroundColor:"black" , color:"white" , borderRadius:"12px" , padding:"3px" , float:"right" , position:'relative', right:'140px'}}>
        <option value="">CRUD</option>
        {/* <option value="apple" onClick={()=>filterQuantityResult("under40")}>under 40</option> */}
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} - {user.quantity}
          </option>
        ))}
        {/* <option value="banana" >under 60</option>
        <option value="orange">under 70</option> */}
      </select>



{/* codews */}

      </span>
      {users?.map((user) => (
        <div className="card me-3 mt-2 p-0" key={user._id}>
          <img src={user.avatar} alt="" width={"100%"} height={200} />
          <div className="p-4">
          <button onClick={() => startTimer(user.id)} style={{borderRadius:"50px" ,padding:"4px",float:"right" ,backgroundColor:"#0D6EFD" , color:"#fff" }}>Tik</button>
            <h4 className="text-center">{user.name}</h4>
            <h4 style={{textAlign:"center"}}>{user.quantity}</h4>
            <p>Elapsed Time: {user.elapsedTime / 1000} seconds</p>
            {/* <button onClick={() => startTimer(user.id)} style={{borderRadius:"50px" ,padding:"4px",float:"right" }}>tik</button> */}
              {/* <h5 style={{textAlign:"center"}}>{formattedTime}</h5> */}
            <div className="d-flex justify-content-between align-items-center">
              <button 
                // onClick={HandelMassage}
                // // to={`/edit/${user._id}`}
                // style={{ textDecoration: "none", backgroundColor:"green" }}
                // className="edit-button"
                onClick={() => handleEdit(user._id)}
                // to={`/edit/${user._id}`}
                style={{ textDecoration: "none", backgroundColor:"#000" , borderRadius:"10px" }}
                className="edit-button"
              >
                Done
              </button>
              <button
                className="edit-button"
                onClick={() => handleDelete(user._id)}
                style={{ textDecoration: "none", backgroundColor:"transparent" , borderRadius:"10px", color:"black" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <h2 style={{fontWeight:"900" , fontStyle:"italic" , textAlign:"center"}}>---Filtered Products:---</h2>
    <div className="row center">
      {filteredProducts.map((user) => (
        <div className="card me-3 mt-2 p-0" key={user._id}>
        <img src={user.avatar} alt="" width={"100%"} height={200} />
        <div className="p-4">
        <button onClick={() => startTimer(user.id)} style={{borderRadius:"50px" ,padding:"4px",float:"right" ,backgroundColor:"#0D6EFD" , color:"#fff" }}>tik</button>
          <h4 className="text-center">{user.name}</h4>
          <h4 style={{textAlign:"center"}}>{user.quantity}</h4>
          <p>Elapsed Time: {user.elapsedTime / 1000} seconds</p>
          {/* <button onClick={() => startTimer(user.id)} style={{borderRadius:"50px" ,padding:"4px",float:"right" }}>tik</button> */}
            {/* <h5 style={{textAlign:"center"}}>{formattedTime}</h5> */}
          <div className="d-flex justify-content-between align-items-center">
          </div>
        </div>
</div>
      ))}
      </div>
    </div>
    </>
  );
}
export default KitchenOrder;



// import React, { useState, useEffect } from 'react';

// const App = () => {
//  const [products, setProducts] = useState([]);

//  // Add your own data
//  const data = [
//     { name: 'Product 1', time: 50 },
//     { name: 'Product 2', time: 20 },
//     { name: 'Product 3', time: 10 },
//  ];

//  useEffect(() => {
//     // Initialize the products with the given data
//     setProducts(data);

//     // Set up an interval to periodically update the products
//     const interval = setInterval(() => {
//       const updatedProducts = products.map(product => {
//         const updatedTime = product.time - 1;
//         return updatedTime > 0 ? { ...product, time: updatedTime } : product;
//       });
//       setProducts(updatedProducts);
//     }, 1000);

//     // Clean up the interval on unmount
//     return () => clearInterval(interval);
//  }, []);

//  const filterProducts = () => {
//     return products.filter(product => product.time > 0).map(product => (
//       <div key={product.name}>
//         {product.name} - {product.time} seconds remaining
//       </div>
//     ));
//  };

//  return (
//     <div>
//       <h1>Products</h1>
//       {filterProducts()}
//     </div>
//  );
// };

// export default App;