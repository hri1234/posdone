import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Dinnheader from "./Dinnheader";
import Dinnside from "./Dinnside"
import"./kichenOrderEx.css"

const KitchenDinning = () => {
    const cartSavedRedux = useSelector(({ cart }) => cart?.saveItems);
    console.log("cartSavedRedux", cartSavedRedux);
  const [cart, setCart] = useState();
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user`);
//       const data = await res.json();
//       setUsers(data);
//     };
//     fetchUsers();
//   }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://pos-api-3v8o.onrender.com/api/product/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedCart = cart.filter((cart) => cart._id !== id);
        setCart(updatedCart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
    <Dinnheader />
    
    <div className="container-fluid mt-4" style={{width:"105%"}}>
    <div className="row d-flex justify-content-center">
    {Array.isArray(cartSavedRedux)
     ? cartSavedRedux?.map((cart) => {
        const isCompleted = cart?.completed
          ? "completed"
          : null;
          const cartImage =
                          Array.isArray(cart?.images) &&
                          cart?.images?.length > 0
                            ? cart?.images[0]?.url
                            : "/images/placeholder/product.svg";
                            return(
        <div className={`card me-3 mt-2 ${isCompleted}`} key={cart._id}>
          <img src={cartImage} alt="" width={"100%"} height={200} />
          <div className="card-body">
            <h4 className="card-title text-center">{cart.title}</h4>
            <div className="d-flex justify-content-between align-items-center">
            {isCompleted ? (
                                <div className="caption">
                                  <div style={{color:"black"}}>Completed</div>
                                </div>
                              ) : null}
                  <a href="#" className="btn btn-success" style={{backgroundColor:"black" , paddingLeft:"-30px" , paddingBottom:"-30px"}} onClick={() => handleDelete(cart._id)}>
                                Complete
                              </a>
              
              <button
               className="btn btn-danger btn-sm"
               onClick={() => handleDelete(cart._id)}
              >
               X
              </button>
            </div>
          </div>
          
        </div>
 );
})
: null}
    </div>

  </div>
  <Dinnside />
  </>

  );
};

export default KitchenDinning;



