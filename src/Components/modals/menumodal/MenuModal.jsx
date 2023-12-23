import React from 'react'
import { Modal, Button } from "react-bootstrap";
import "./menumodal.scss"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMenu } from 'src/store/slices/menu.slice';
const MenuModal = ({ modalShow, onCloseModal }) => {
    const dispatch = useDispatch();
const [formState,setFormstate]=useState({
    category:'pizza'


})
const  handlechange=(e)=>{
    setFormstate({...formState,[e.target.name]:e.target.value})

}
console.log('setFormstate',formState)

    const handleCloseModal = () => {
        onCloseModal(false);
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
console.log("handleSubmit")
dispatch(addMenu(formState))


    }
    
    return (
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
                            <form onSubmit={handleSubmit} className="menu-form">
                                <label htmlFor="category" >Category:</label>
                                 <select   id='category' name='category'onChange={handlechange} value={formState?.category || ''} >
                                    <option value="pizza">Pizza</option>
                                    <option value="burger">Burger</option>
                                    <option value="pasta">Pasta</option>
                                    <option value="chicken">Chicken</option>
                                    <option value="meat">Meat</option>
                                    <option value="green-leafy">green leafy</option>
                                    <option value="juice">Juice</option>
                                 </select>




                                {/* <input  type="text" id="category" name="category" onChange={handlechange} value={formState?.category || ''} required="" /> */}
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" name="title" onChange={handlechange} value={formState?.title} required="" />
                                <label htmlFor="image">Image URL:</label>
                                <input type="url" id="image" name="image" onChange={handlechange} value={formState?.image} required="" />
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    onChange={handlechange} value={formState?.description}
                                    rows={4}
                                    required=""
                                    defaultValue={""}
                                />
                                <button  type="submit">Add Menu Item</button>
                            </form>
                        </div>


                    </div>
                </div>



            </Modal.Body>
        </Modal>


    )
}

export default MenuModal
