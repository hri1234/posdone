import React, { useEffect, useState } from "react";
// npm
// import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import { Box, Container, Button } from "@mui/material";
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
  clearCart,
  decrementQuantity,
  incrementQuantity,
} from "src/store/slices/cart.slice";
// utils
import { getMethod, productPriceFormatter } from "src/utils";

const CustomerOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemsRedux = useSelector(({ cart }) => cart?.items);
  const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
  const menuRedux = useSelector(({ menu }) => menu?.items);

  const [selectedDish, setSelectedDish] = useState("all");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [productSelected, setProductSelected] = useState({});
  const [productModal, setProductModal] = useState(false);
  const [billModal, setBillModal] = useState(false);
  const [productRemoveModal, setProductRemoveModal] = useState(false);
  const [loading, setLoading] = useState(false);

  //  const [billTime, setBillTime] = useStat("");

  console.log("cartItemsRedux", cartItemsRedux);
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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // const totalPriceGenerate = Number(cartTotalPriceRedux) + 2.12;

  const totalAmount = Number(cartTotalPriceRedux);

  const tax = (totalAmount / 1.12) * 0.12;
  const subtotal = totalAmount - tax;
  // const hashId = `${uuid()}`.replace(/\-/g,"").replace(/\D+/g, '');
  // const order_id = hashId.substring(0, 5)
  // console.log("allProducts", allProducts);
  // console.log("menuRedux", menuRedux);

  // console.log("selectedDish", selectedDish);
  const handleTakeAway = () => {
    navigate(ROUTES_URL.ADD_ADD_CUSTOMER, {
      state: 2,
    });
  };

  return (
    <>
      <CustomBackdrop loading={loading}>
        <Container maxWidth={false}>
          {/* RESTAURANT  SECTION START  */}
          {Array.isArray(menuRedux) && menuRedux?.length > 0 ? (
            <div
              className="pos-menu"
              id="myScrollspy"
              style={{ maxWidth: "67%" }}
            >
              <div className="nav-container scroll ex1">
                <div
                  style={{ overflow: "auto", overflowY: "hidden" }}
                  data-scrollbar="true"
                  data-height="100%"
                  data-skip-mobile="true"
                >
                  <ul
                    className="nav nav-tabs    center-block fix-width scroll-inner"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      margin: "12px",
                      width: "auto",
                    }}
                  >
                    <li className="nav-item">
                      <div
                        style={{
                          padding: "4px  30px",
                          borderRadius: "20px",
                        }}
                        className={`nav-link pointer ${
                          "all" === selectedDish ? "active" : null
                        }`}
                        onClick={() => handleSelectDishes({ title: "all" })}
                      >
                        <div className="nav-icon text-light">
                          <div className="text-center">
                            <i className="fa-solid fa-utensils" />
                          </div>
                        </div>
                        <div className="nav-text  text-light">
                          <h6 className="w-100 ">All</h6>
                        </div>
                      </div>
                    </li>
                    {Array.isArray(menuRedux)
                      ? menuRedux.map((x) => {
                          const activeCategory =
                            x?.title === selectedDish ? "active" : null;
                          return (
                            <li className="nav-item" key={x[ID_KEY]}>
                              <div
                                style={{
                                  padding: "4px  30px",
                                  borderRadius: "20px",
                                }}
                                className={`nav-link pointer ${activeCategory}`}
                                onClick={() => handleSelectDishes(x)}
                              >
                                <div className="nav-icon text-light">
                                  <div className="text-center">
                                    <i className={x.icon} />
                                  </div>
                                </div>
                                <div className="nav-text  text-light">
                                  <h6 className="w-100 "> {x.title} </h6>{" "}
                                </div>
                              </div>
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
          {/* RESTAURANT  SECTION END   */}

          <div className="pos pos-with-menu pos-with-sidebar " id="pos">
            {/* CARS SECTION START */}

            <div className="pos-content ">
              <div className="pos-content-container h-100">
                <div className="product-row">
                  {Array.isArray(products) && products?.length > 0 ? (
                    products?.map((product) => {
                      const discount =
                        product?.discount && Number(product?.discount) > 0
                          ? product?.discount
                          : false;
                      const prodImage =
                        Array.isArray(product?.images) &&
                        product?.images?.length > 0
                          ? product?.images[0]?.url
                          : "/images/placeholder/product.svg";
                      return (
                        <div
                          className="product-container"
                          key={product[ID_KEY]}
                          onClick={() => openProductModal(product)}
                          onKeyDown={() => openProductModal(product)}
                          // style={{ border: "1px solid #adb5bd", padding: "0px" }}
                        >
                          <div
                            className={`product ${
                              product?.outOfStock ? "not-available" : null
                            }`}
                            style={{ border: "1px solid #adb5bd" }}
                          >
                            <div
                              className="img strip"
                              style={{ backgroundImage: `url(${prodImage})` }}
                            ></div>
                            {discount ? (
                              <div className="ribbon ">
                                {discount}+%
                                <br />
                                off
                              </div>
                            ) : null}
                            <div className="text">
                              <div className="title">{product?.title}</div>
                              <div className="desc">{product?.description}</div>
                              <div className="price">${product?.price}</div>
                            </div>
                            {product?.outOfStock ? (
                              <div className="not-available-text">
                                <div>Not Available</div>
                              </div>
                            ) : null}
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
            </div>

            {/* CARDS SECTION END  */}

            <Box sx={{ top: "50px" }} className="pos-sidebar  mt-5">
              <div
                className="h-100 d-flex  flex-column"
                style={{ border: "1px solid #adb5bd" }}
              >
                <div className="pos-sidebar-header">
                  <div className="back-btn">
                    <button
                      type="button"
                      data-target="#pos"
                      className="btn border-0"
                    >
                      <i className="fa fa-chevron-left" />
                    </button>
                  </div>
                  <div className="icon">
                    <i className="fa fa-plate-wheat" />
                  </div>
                  <div className="title">Table 01</div>
                  <div className="me-2">
                    <Button
                      variant="contained"
                      onClick={() => handleTakeAway()}
                    >
                      Take Away
                    </Button>
                  </div>
                  {/* <div className="order btn btn-Warning">
                  Order: <b>#0056</b>
                </div> */}
                </div>

                <div
                  className="pos-sidebar-body tab-content"
                  data-scrollbar="true"
                  data-height="100%"
                >
                  <div
                    className="tab-pane fade h-100 show active "
                    id="newOrderTab"
                  >
                    <div className="pos-table">
                      {cartItemsRedux?.length > 0 ? (
                        <div className="row pos-table-row">
                          <div className="col-12">
                            <Button
                              variant="dark"
                              size="sm"
                              onClick={() => handleClearCart()}
                            >
                              Clear Cart
                            </Button>
                          </div>
                        </div>
                      ) : null}
                      {cartItemsRedux?.map((cart) => {
                        const prodImage =
                          Array.isArray(cart?.images) &&
                          cart?.images?.length > 0
                            ? cart?.images[0]?.url
                            : "/images/placeholder/product.svg";
                        return (
                          <div
                            className="row pos-table-row"
                            key={
                              cart[ID_KEY] +
                              cart?.size?.label +
                              cart?.addOnLength
                            }
                          >
                            <div className="col-9">
                              <div className="pos-product-thumb">
                                <div
                                  className="img"
                                  style={{
                                    backgroundImage: `url(${prodImage})`,
                                  }}
                                ></div>
                                <div className="info">
                                  <div className="title">{cart?.title}</div>
                                  <div className="single-price">
                                    ${cart?.price}
                                  </div>
                                  {/* <div className="desc">{cart?.size?.label}</div>
                                <div className="desc">
                                  {Array.isArray(cart?.addOns)
                                    ? cart?.addOns?.toString()
                                    : null}
                                </div> */}
                                  <div className="input-group qty">
                                    <div className="input-group-append">
                                      <Button
                                        variant="outline-secondary"
                                        onClick={() => handleDecrement(cart)}
                                      >
                                        <i className="fa fa-minus" />
                                      </Button>
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={cart?.quantity}
                                      readOnly
                                    />
                                    <div className="input-group-prepend">
                                      <Button
                                        variant="outline-secondary"
                                        // className="d-flex align-items-center"
                                        onClick={() =>
                                          handleIncrement(cart[ID_KEY])
                                        }
                                      >
                                        <i className="fa fa-plus" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-3 total-price">
                              ${cart?.totalPrice}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="tab-pane fade h-100" id="orderHistoryTab">
                    <div className="h-100 d-flex align-items-center justify-content-center text-center p-20">
                      <div>
                        <div className="mb-3 mt-n5">
                          <svg
                            width="6em"
                            height="6em"
                            viewBox="0 0 16 16"
                            className="text-gray-300"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14 5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5zM1 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1z"
                            />
                            <path d="M8 1.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
                          </svg>
                        </div>
                        <h4>No order history found</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {cartItemsRedux?.length > 0 ? (
                  <div className="pos-sidebar-footer">
                    <div className="d-flex align-items-center mb-2">
                      <div>Subtotal</div>
                      <div className="flex-1 text-end h6 mb-0">
                        {productPriceFormatter(subtotal + "")}
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>Tax</div>
                      <div className="flex-1 text-end h6 mb-0">
                        {productPriceFormatter(tax + "")}
                      </div>
                    </div>
                    {/* <div className="d-flex align-items-center">
                    <div>Discount </div>
                    <div className="flex-1 text-end h6 mb-0">$20.20</div>
                  </div> */}

                    <hr className="opacity-1 my-10px" />
                    <div className="d-flex align-items-center mb-2">
                      <div>Total</div>
                      <div className="flex-1 text-end h4 mb-0">
                        {productPriceFormatter(totalAmount + "")}
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      {/* <a
                    href="#"
                    className="btn btn-default rounded-3 text-center me-10px w-70px"
                  >
                    <i className="fa fa-bell d-block fs-18px my-1" /> Service
                  </a> */}
                      <a
                        onClick={() => setBillModal(true)}
                        href="#"
                        className="btn btn-default    rounded-3 text-center me-10px w-70px"
                      >
                        <i className="fa fa-receipt d-block fs-18px my-1" />
                        Bill
                      </a>

                      <a
                        href="#"
                        className="btn btn-theme rounded-3 text-center btn-warning text-dark flex-1"
                      >
                        <i className="fa fa-shopping-cart d-block fs-18px my-1" />{" "}
                        Submit Order
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </Box>
          </div>
        </Container>
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

        <BillModal
          modalShow={billModal}
          onCloseModal={() => closeBillModal()}
          data={cartTotalPriceRedux}
          total={totalAmount}
        />
      </CustomBackdrop>
    </>
  );
};

export default CustomerOrder;
