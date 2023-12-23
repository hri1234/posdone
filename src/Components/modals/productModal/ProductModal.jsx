import React, { useState, useEffect } from "react";
// npm
import { Modal } from "react-bootstrap";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
// redux
import { addItem } from "src/store/slices/cart.slice";

const ProductModal = (props) => {
  const dispatch = useDispatch();
  const { modalShow, onCloseModal, data } = props;

  const [totalPrice, setTotalPrice] = useState(0.0);
  const [sizePrice, setSizePrice] = useState(0.0);
  const [addOnPrice, setAddOnPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(1);

  const [size, setSize] = useState({ id: "small", label: "Small" });
  const [addOns, setAddOns] = useState([]);

  useEffect(() => {
    setTotalPrice(data?.price);
  }, [data]);

  const handleCloseModal = () => {
    onCloseModal(false);
    setSize({ id: "small", label: "Small" });
    setAddOns([]);
    setQuantity(1);
    setTotalPrice(0.0);
    setSizePrice(0.0);
    setAddOnPrice(0.0);
  };

  const calculateAddonsPrice = (val) => {
    if (Array.isArray(val) && val?.length > 0) {
      const addOnPriceNew = val.reduce(
        (sum, current) => Number(sum) + Number(current.price),
        0
      );

      return addOnPriceNew || 0;
    }
    return 0;
  };

  const calculatePrice = (
    qant = quantity,
    addOnPrc = addOnPrice,
    sizePrc = sizePrice
  ) => {
    const newPrice =
      Number(data?.price) * Number(qant) + Number(addOnPrc) + Number(sizePrc);
    setTotalPrice(newPrice?.toFixed(2));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    calculatePrice(Number(quantity) + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => prev - 1);
    calculatePrice(Number(quantity) - 1);
  };

  const handleAddCart = () => {
    let newData = {
      ...data,
      // price: totalPrice,
      size: size,
      addOn: addOns,
      addOnLength: addOns?.length,
      quantity: quantity,
      totalPrice: totalPrice,
    };
    console.log("newData", newData);

    dispatch(addItem(newData));
    handleCloseModal();
  };
  // let newDatas = {
  //   ...data,
  //   price: totalPrice,
  //   size: size,
  //   addOn: addOns,
  //   quantity: quantity,
  // };
  // console.log("newDatas", newDatas);

  // console.log("addOnPrice", addOnPrice);
  // console.log("sizePrice", sizePrice);
  // console.log("quantity", quantity);
  // console.log("totalPrice", totalPrice);
  const prodImage =
    Array.isArray(data?.images) && data?.images?.length > 0
      ? data?.images[0]?.url
      : "/images/placeholder/product.svg";
  return (
    <Modal
      show={modalShow}
      onHide={() => handleCloseModal()}
      aria-labelledby="single-product-modal"
      className="modal-pos fade"
      size="lg"
    >
      <Modal.Body className="p-0">
        <div className="modal-content">
          <div className="modal-body p-0">
            <span
              className="btn-close position-absolute top-0 end-0 m-4"
              onClick={() => handleCloseModal()}
            />
            <div className="modal-pos-product">
              <div className="modal-pos-product-img">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${prodImage})` }}
                />
              </div>
              <div className="modal-pos-product-info">
                <div className="fs-4 fw-bold">{data?.title}</div>
                <div className="fs-6 text-body text-opacity-50 mb-2">
                  {data?.desc}
                </div>
                <div className="fs-3 fw-bolder mb-3">${totalPrice}</div>
                <div className="option-row">
                  <div className="d-flex mb-3">
                    <Button
                      variant="outline-secondary"
                      className="d-flex align-items-center"
                      disabled={Number(quantity) === 1}
                      onClick={() => handleDecrement()}
                    >
                      <i className="fa fa-minus" />
                    </Button>

                    <input
                      type="text"
                      className="form-control w-30px fw-bold fs-5 px-0 mx-2 text-center border-0"
                      name="qty"
                      value={quantity}
                      readOnly
                    />
                    <Button
                      variant="outline-secondary"
                      className="d-flex align-items-center"
                      onClick={() => handleIncrement()}
                    >
                      <i className="fa fa-plus" />
                    </Button>
                  </div>
                </div>

                <hr />
                <div className="row gx-3">
                  <div className="col-4">
                    <Button
                      size="large"
                      type="button"
                      variant="outlined"
                      onClick={() => handleCloseModal()}
                      sx={{ marginRight: "5px" }}
                    >
                      Cancel
                    </Button>
                    {/* <button
                      className="btn btn-default fs-14px rounded-3 fw-bold mb-0 d-block py-3"
                      onClick={() => handleCloseModal()}
                    >
                      Cancel
                    </button> */}
                  </div>
                  <div className="col-8">
                    <Button
                      size="large"
                      type="button"
                      variant="contained"
                      onClick={() => handleAddCart()}
                      sx={{ display: "flex", alignItems: "center" }}
                      endIcon={<Add />}
                    >
                      Add to cart
                    </Button>
                    {/* <button
                      onClick={() => handleAddCart()}
                      className="btn btn-theme fs-14px rounded-3 fw-bold d-flex justify-content-center align-items-center py-3 m-0"
                    >
                      Add to cart <i className="fa fa-plus ms-3" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
