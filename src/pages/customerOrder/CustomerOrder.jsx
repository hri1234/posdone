import React, { useEffect, useState } from "react";
// css
import "./customerOrder.scss";
// npm
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import { v4 as uuid } from "uuid";
// Components
import { ProductModal, ProductRemoveModal } from "src/Components/modals";
import BillModal from "src/Components/modals/billmodal/BillModal";
import { CustomBackdrop } from "src/Components";
// constants
import {
  ID_KEY,
  API_STATUS_CODE,
  MESSAGE,
} from "src/constants/content.constant";
import { API_URL, ROUTES_URL } from "src/constants/url.constant";
// redux
import {
  addItem,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  saveCart,
} from "src/store/slices/cart.slice";
// utils
import { getMethod, productPriceFormatter } from "src/utils";
import { actionMenu } from "src/store/slices/menu.slice";
import { Box } from "@mui/material";
// import { PRODUCTS } from "src/constants/products.constant";

const CustomerOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemsRedux = useSelector(({ cart }) => cart?.items);
  const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
  const menuRedux = useSelector(({ menu }) => menu?.items);

  const [selectedDish, setSelectedDish] = useState("all");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [menu, setMenu] = useState([]);

  const [productSelected, setProductSelected] = useState({});
  const [productModal, setProductModal] = useState(false);
  const [billModal, setBillModal] = useState(false);
  const [productRemoveModal, setProductRemoveModal] = useState(false);
  const [loading, setLoading] = useState(false);

  //  const [billTime, setBillTime] = useStat("");

  console.log("cartItemsRedux", cartItemsRedux);
  const fetchMenu = async () => {
    try {
      setLoading(true);

      const response = await getMethod(API_URL.GET_ALL_CATEGORY, false, true);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        setLoading(false);

        if (Array.isArray(response?.data)) {
          setMenu(response?.data);
          dispatch(actionMenu(response?.data));
        }
      } else {
        setLoading(false);
        console.log("else", response?.data);
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getMethod(API_URL.GET_ALL_PRODUCTS, false, true);
      if (response?.status === API_STATUS_CODE.SUCCESS) {
        setLoading(false);

        if (Array.isArray(response?.data)) {
          setProducts(response?.data);
          setAllProducts(response?.data);
        }
      } else {
        setLoading(false);
        if (!response?.data?.error) toastr.error(MESSAGE.SOMETHING_WENT_WRONG);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectDishes = (x) => {
    setSelectedDish(x?.title);
    handleFilterProducts(x?.title);
  };

  const handleFilterProducts = (id) => {
    if (id === "all") {
      setProducts(allProducts);
    } else {
      const filterByType = allProducts?.filter((f) => f.category === id);
      setProducts(filterByType);
    }
  };

  const openProductModal = (product) => {
    if (!product?.outOfStock) {
      setProductModal(true);
      setProductSelected(product);
    }
  };

  const closeProductModal = () => {
    setProductModal(false);
    setProductSelected({});
  };

  const closeBillModal = () => {
    setBillModal(false);
    // setProductSelected({});
  };
  const handleAddCartData = (data) => {
    console.log("handleAddCartData", data);
    // let totalPrice = data?.price;
    // const newData = { ...data, totalPrice: totalPrice };
    const newCartItems = []; //addToCart(data); // cartItems?.concat(newData);
    console.log("newCartItems", newCartItems);
    // setCartItems(newCartItems);
  };

  const handleAddCart = (prod) => {
    let newData = {
      ...prod,
      quantity: 1,
      totalPrice: 1,
    };

    dispatch(addItem(newData));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (prod) => {
    if (prod?.quantity === 1) {
      setProductRemoveModal(true);
      setProductSelected(prod);
    } else {
      dispatch(decrementQuantity(prod[ID_KEY]));
    }
  };
  const handleDeleteSingleCart = (prod) => {
    setProductRemoveModal(true);
    setProductSelected(prod);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSaveCart = () => {
    dispatch(saveCart(cartItemsRedux));
    navigate(ROUTES_URL.KITCHEN_ORDER);
  };

  const totalAmount = Number(cartTotalPriceRedux);

  const tax = (totalAmount / 1.12) * 0.12;
  const subtotal = totalAmount - tax;
  const hashId = `${uuid()}`.replace(/\-/g, "").replace(/\D+/g, "");
  const order_id = "#" + hashId.substring(0, 5);
  // console.log("allProducts", allProducts);
  console.log("menuRedux", menuRedux);
  console.log("selectedDish", selectedDish);
  // console.log("cartItemsRedux", cartItemsRedux);

  return (
    <CustomBackdrop loading={loading}>
      <div className="customerOrderPage row">
        <div className="col-md-11 col-lg-9 col-sm-10 mt-2 col-10">
          {/* top 6 card section start */}
          <hr
            className
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#000000",
            }}
          />
          <div className="row">
            <div className="col-6 col-md-3 col-lg-2 col-sm-4 pb-1">
              <div className="card  Card_inner">
                <div className="card-body  gap-2 akash">
                  <div className="d-flex justify-content-evenly mt-3">
                    <span className="mt-1">
                      <i className="fa-duotone fa-user-plus" />
                    </span>
                    <div className>
                      <p
                        className="card-text mb-1 "
                        style={{ fontSize: "0.6rem" }}
                      >
                        {" "}
                        Add Customer
                      </p>
                      <h6
                        className="card-subtitle mb-2"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {" "}
                        Mike Orian
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 col-sm-4 pb-1">
              <div className="card  Card_inner">
                <div className="card-body  gap-2 akash ">
                  <div className="d-flex  justify-content-evenly  mt-3">
                    <span className>
                      <i className="fa-duotone fa-car-building" />
                    </span>
                    <div className=" ">
                      <p
                        className="card-text mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Ship customer
                      </p>
                      <h6
                        className="card-subtitle mb-2"
                        style={{ fontSize: "0.6rem" }}
                      >
                        1501 Foster Ave
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 col-sm-4 pb-1">
              <div className="card Card_inner ">
                <div className="card-body  gap-2   akash ">
                  <div className="d-flex  justify-content-evenly  mt-3">
                    <span className=" ">
                      <i className="fa-duotone fa-treasure-chest    " />
                    </span>
                    <div className>
                      <p
                        className="card-text mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        Rewards
                      </p>
                      <h6
                        className="card-subtitle mb-2"
                        style={{ fontSize: "0.6rem" }}
                      >
                        10,000 Points
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 col-sm-4 pb-1">
              <div className="card  Card_inner">
                <div className="card-body  gap-2 akash">
                  <div className="d-flex  justify-content-evenly  mt-3">
                    <span className>
                      <i className="fa-duotone fa-gift-card" />
                    </span>
                    <div className>
                      <p
                        className="card-text mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {" "}
                        Add Gift Card{" "}
                      </p>
                      <h6
                        className="card-subtitle mb-2"
                        style={{ fontSize: "0.6rem" }}
                      >
                        10,000$
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 col-sm-4 pb-1">
              <div className="card Card_inner ">
                <div className="card-body  gap-2   akash ">
                  <div className="d-flex  justify-content-evenly  mt-3">
                    <span className="  ">
                      <i className="fa-duotone fa-badge-dollar" />
                    </span>
                    <div className>
                      <p
                        className="card-text mb-1"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {" "}
                        Add Discount{" "}
                      </p>
                      <h6
                        className="card-subtitle mb-2"
                        style={{ fontSize: "0.6rem" }}
                      >
                        10,000 $
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 col-sm-4 pb-1">
              <div className="card Card_inner">
                <div className="card-body gap-2  akash">
                  <div className="d-flex  justify-content-evenly  mt-3">
                    <span className=" ">
                      <i className="fa-duotone fa-cowbell-circle-plus " />
                    </span>
                    <div className>
                      <div className="dropdown">
                        <p
                          className="card-text mb-1 dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Add more
                        </p>
                        <ul
                          className="dropdown-menu  Add_more_menu "
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Location Transfers
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              New Order{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Add Tax{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Order History{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Return Item{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Exchange Item{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Saved Orders{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              style={{ fontSize: "14px" }}
                            >
                              Add Note{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            className=" my-2"
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "#000000 !important",
            }}
          />
          {/* top 6 card section end  */}

          <div className="row">
            {/* food option section start */}

            <div className="col-md-2">
              <div className="row ">
                <div className="set_scroller">
                  <div className="col-md-12 col-6 col-sm-4 p-2">
                    <div
                      className={`card  set_card  dish_section ${
                        "all" === selectedDish ? "activa" : null
                      }`}
                      onClick={() => handleSelectDishes({ title: "all" })}
                    >
                      <div className="card-body text-center p-3">
                        <h5 style={{ fontSize: "14px" }}>
                          <i className="fa-solid fa-utensils" />
                        </h5>
                        <h5 style={{ fontSize: "14px" }}>ALL</h5>
                      </div>
                    </div>
                  </div>
                  {Array.isArray(menuRedux)
                    ? menuRedux.map((x) => {
                        const activeCategory =
                          x?.title === selectedDish ? "activa" : null;
                        const menuIcon = x?.icon ? (
                          <i className={x?.icon} />
                        ) : (
                          <i className="fas fa-hamburger" />
                        );
                        return (
                          <div
                            className="col-md-12 col-6  col-sm-4 p-2"
                            key={x[ID_KEY] + x?.id}
                          >
                            <div
                              className={`card  set_card  dish_section ${activeCategory}`}
                              onClick={() => handleSelectDishes(x)}
                            >
                              <div className="card-body text-center p-3">
                                <h5 style={{ fontSize: "14px" }}>{menuIcon}</h5>
                                <h5
                                  style={{
                                    fontSize: "14px",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {x?.title}
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>

            {/* food option section end */}

            {/*  12   card  section end */}
            <div className="col-md-10 mt-2  set_scroller1">
              <div className="row">
                {Array.isArray(products) && products?.length > 0 ? (
                  products.map((prod, i) => {
                    // const discount =
                    //   prod?.discount && Number(prod?.discount) > 0
                    //     ? prod?.discount
                    //     : false;
                    const prodImage =
                      Array.isArray(prod?.images) && prod?.images?.length > 0
                        ? prod?.images[0]?.url
                        : "/images/placeholder/product.svg";
                    return (
                      <div
                        className="col-md-6 col-lg-3 col-sm-6 col-xs-12 mb-3"
                        key={prod[ID_KEY] + i}
                      >
                        <div className="card  set_dinner">
                          <i
                            className="fa-solid fa-circle-plus text-end me-2 mt-2 pointer"
                            style={{ color: "#1adb40" }}
                            onClick={() => handleAddCart(prod)}
                          />
                          <div className="set_image  mx-auto ">
                            <img src={prodImage} alt="" className="img-fluid" />
                          </div>
                          <div className="ms-3 ">
                            <h6
                              className="text-start p-0 m-0 my-1 mx-2"
                              style={{
                                fontSize: "14px",
                                textTransform: "capitalize",
                              }}
                            >
                              {prod?.title}
                            </h6>
                            <hr className="p-0 m-0 me-3" />
                            <p
                              style={{ fontSize: "14px" }}
                              className=" fw-light my-1 me-3  p-0 m-0"
                            >
                              <b>${prod?.price}</b>
                              <b className="float-end">
                                {prod?.quantity || ""}
                              </b>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Box
                    component="div"
                    className="text-center"
                    sx={{ color: "#000000" }}
                  >
                    No Products Found
                  </Box>
                )}
              </div>
            </div>
            {/*  12   card  section end */}
          </div>
        </div>
        {/* table start  */}
        <div
          className="col-md-12 col-lg-3 col-sm-12 py-2 "
          style={{
            borderRadius: "20px",
            marginTop: "6px",
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px  3px 8px",
          }}
        >
          <div
            className="row mt-1 rounded-3"
            style={{ backgroundColor: "white", color: "white" }}
          >
            <div className="col-md-12">
              <div className="d-flex  justify-content-between ">
                <div>
                  <button type="button" className="btn position-relative">
                    <i
                      className="fa-solid fa-cart-minus fs-5 float-start"
                      style={{ color: "rgb(63, 60, 60)" }}
                    />
                    <span
                      style={{ fontSize: "11px" }}
                      className="   position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
                    >
                      {cartItemsRedux?.length}
                    </span>
                  </button>
                </div>
                <div>
                  <span>
                    <i
                      className="fa-solid fa-trash-can fs-5 pointer"
                      style={{ color: "rgb(63, 60, 60)" }}
                      onClick={() => handleClearCart()}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12 " style={{ backgroundColor: "#0D536D" }}>
              <div className="d-flex  justify-content-between ">
                <div>
                  <h6 className="mt-2" style={{ color: "white" }}>
                    Order {order_id}
                  </h6>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn "
                    style={{ color: "white" }}
                  >
                    <i className="fa-solid fa-eye" />
                    Visits #9
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div class="row"> */}
            <div
              className="col-md-12"
              style={{ backgroundColor: "#eaeeef", color: "#00003E" }}
            >
              <div className="d-flex  justify-content-between ">
                <div className=" ">
                  <div className="mt-2">
                    <span className="border border-2  user_icon   ">
                      <i className="fa-solid fa-user" />
                    </span>
                  </div>
                </div>
                <div>
                  <h6 className="mt-2 float-end">
                    <span>50 points</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row  border mt-1  tableScroller ">
            {/* Scroller in table Start   */}
            <div
              className="row g-0 mb-1"
              style={{ backgroundColor: "#eaeeef" }}
            >
              {cartItemsRedux?.map((cart, i) => {
                const prodImage =
                  Array.isArray(cart?.images) && cart?.images?.length > 0
                    ? cart?.images[0]?.url
                    : "/images/placeholder/product.svg";
                return (
                  <div
                    className="col-md-12 mt-2"
                    key={
                      i + cart[ID_KEY] + cart?.size?.label + cart?.addOnLength
                    }
                  >
                    <div className="d-flex  justify-content-between ">
                      <div>
                        <div className=" ms-2" style={{ width: "3.125rem" }}>
                          <img
                            src={prodImage}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className=" ">
                        <p style={{ fontSize: "15px" }}>
                          {cart?.title}
                          <br />${cart?.price}
                        </p>
                      </div>
                      <div>
                        <div
                          className="btn-group mb-3"
                          role="group"
                          aria-label="First group"
                        >
                          <button
                            className="btn  rounded-3 shadow rounded mx-1 set_btn"
                            onClick={() => handleIncrement(cart[ID_KEY])}
                          >
                            +
                          </button>
                          <button className="btn btn-light shadow rounded-3">
                            {cart?.quantity || 0}
                          </button>
                          <button
                            className="btn  rounded-3 shadow  rounded mx-1 set_btn"
                            onClick={() => handleDecrement(cart)}
                          >
                            -
                          </button>
                          <button className=" border-0 ">
                            <span className="badge text-dark">
                              <i
                                className="fa-duotone fa-trash pointer"
                                style={{ fontSize: "22px" }}
                                onClick={() => handleDeleteSingleCart(cart)}
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Scroller in table Start   */}
          </div>
          <div
            className="row border"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <div className="col-md-12">
              <div
                className="row  mt-1 mx-1 rounded-5"
                style={{ borderRadius: "12px !important" }}
              >
                <div className="col-md-12">
                  <div className="d-flex  justify-content-between ">
                    <div>
                      <p style={{ fontSize: "15px" }} className="p-  m-1 ">
                        Subtotal
                      </p>
                      <p style={{ fontSize: "15px" }} className="p-0  m-1 ">
                        Tax
                      </p>
                      <p style={{ fontSize: "15px" }} className="p-0  m-1 ">
                        Total
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "15px" }} className="p-0  m-1 ">
                        {productPriceFormatter(subtotal + "")}
                      </p>
                      <p style={{ fontSize: "15px" }} className="p-0  m-1 ">
                        {productPriceFormatter(tax + "")}
                      </p>
                      <p style={{ fontSize: "15px" }} className="p-0  m-1 ">
                        {productPriceFormatter(totalAmount + "")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row mt-2 mx-1"
              style={{
                backgroundColor: "#eaeeef",
                borderRadius: "12px !important",
              }}
            >
              <p
                className="mt-2"
                style={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Fast Pay With Cash
              </p>
              <div className="col-md-12 mb-2 ">
                <div className="d-flex  justify-content-between ">
                  <button
                    type="button"
                    className="rounded-5  border-0 px-2  py-1 btn-light "
                  >
                    25$
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    className="rounded-5  border-0 px-2 py-1  btn-light"
                  >
                    50$
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    className="rounded-5  border-0 px-2 py-1  btn-light"
                  >
                    100$
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    className="rounded-5 border-0 px-2 py-1  btn-light"
                  >
                    custom
                  </button>
                  &nbsp;&nbsp;
                </div>
              </div>
            </div>
            <div className="row  mt-2">
              <div className="col-sm-12">
                <div className="d-flex  justify-content-between ">
                  <button
                    type="button"
                    className="rounded-5   btn btn-light"
                    style={{ color: "#0e284d", fontWeight: 600 }}
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    className="rounded-5   btn btn-light"
                    style={{ color: "#0e284d", fontWeight: 600 }}
                  >
                    $.1000
                  </button>
                </div>
              </div>
            </div>
            <div className="  row  mx-1 mt-2">
              <div className="col-md-12 ">
                <div className="d-flex  justify-content-between ">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      background: "white",
                      color: "black",
                      border: "1px solid rgb(30, 32, 30)",
                      width: "120px",
                    }}
                    disabled={cartItemsRedux?.length === 0}
                    onClick={() => handleSaveCart()}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className=" btn btn-light   "
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: "120px",
                    }}
                    disabled={cartItemsRedux?.length === 0}
                    onClick={() => setBillModal(true)}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table end  */}
      </div>
      {/* modals starts */}
      <ProductModal
        modalShow={productModal}
        onCloseModal={() => closeProductModal()}
        data={productSelected}
        handleAddCartData={(data) => handleAddCartData(data)}
      />
      <ProductRemoveModal
        modalShow={productRemoveModal}
        onCloseModal={() => setProductRemoveModal(false)}
        data={productSelected}
      />

      {billModal ? (
        <BillModal
          modalShow={billModal}
          onCloseModal={() => closeBillModal()}
          cartProducts={cartItemsRedux}
          total={totalAmount}
          orderId={order_id}
          subtotal={subtotal}
          tax={tax}
        />
      ) : null}
    </CustomBackdrop>
  );
};

export default CustomerOrder;