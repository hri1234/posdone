import React, { useEffect, useState } from "react";

// npm
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// Components
import { ProductModal, ProductRemoveModal } from "src/Components/modals";
import BillModal from "src/Components/modals/billmodal/BillModal";
// constants
import { PRODUCTS } from "src/constants/products.constant";
import { ROUTES_URL } from "src/constants/url.constant";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
} from "src/store/slices/cart.slice";
import { useNavigate } from "react-router-dom";
import { ID_KEY } from "src/constants/content.constant";
const CustomerOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemsRedux = useSelector(({ cart }) => cart?.items);
  const cartTotalPriceRedux = useSelector(({ cart }) => cart?.totalPrice);
  const menuRedux = useSelector(({ menu }) => menu?.items);

  const [selectedDish, setSelectedDish] = useState("all");
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});
  const [productModal, setProductModal] = useState(false);
  const [billModal, setBillModal] = useState(false);
  const [productRemoveModal, setProductRemoveModal] = useState(false);

  //  const [billTime, setBillTime] = useStat("");

  console.log("cartItemsRedux", cartItemsRedux);

  useEffect(() => {
    setProducts(PRODUCTS);
    // setCartItems(cartItemsRedux);
  }, []);

  const handleSelectDishes = (x) => {
    setSelectedDish(x[ID_KEY]);
    handleFilterProducts(x[ID_KEY]);
  };

  const handleFilterProducts = (id) => {
    if (id === "all") {
      setProducts(PRODUCTS);
    } else {
      const filterByType = PRODUCTS.filter((f) => f.type === id);
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
      dispatch(decrementQuantity(prod?.id));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPriceGenerate = Number(cartTotalPriceRedux) + 2.12;
  // console.log("cartItems", cartItems);

  //   const handleEmptyTicket = () => {
  //     empty();
  // }

  // const handlePrint = () => {
  //     window.print();
  // }

  const renderHandle = () => {
    navigate(ROUTES_URL.ADD_ADD_CUSTOMER, {
      state: 2,
    });
  };

  return (
    <>
      {/* RESTAURANT  SECTION START  */}
      <div className="pos-menu" id="myScrollspy" style={{ maxWidth: "67%" }}>
        {/* <div className="logo">
          <div>
            <div className="logo-img">
              <img src="images/restaurant.png" alt="" className="" />
            </div>
            <div className="logo-text">
              <b>RESTAURANT</b>{" "}
            </div>
          </div>
          scrollbar-width: thin;
        </div> */}
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
                  onClick={() => handleSelectDishes({ [ID_KEY]: "all" })}
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
                    return (
                      <li className="nav-item" key={x[ID_KEY]}>
                        <div
                          style={{
                            padding: "4px  30px",
                            borderRadius: "20px",
                          }}
                          className={`nav-link pointer ${
                            x[ID_KEY] === selectedDish ? "active" : null
                          }`}
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
      {/* RESTAURANT  SECTION END   */}

      <div className="pos pos-with-menu pos-with-sidebar " id="pos">
        {/* CARS SECTION START */}

        <div className="pos-content ">
          <div className="pos-content-container h-100">
            <div className="product-row">
              {products?.map((product) => (
                <div
                  className="product-container"
                  key={product.id}
                  onClick={() => openProductModal(product)}
                  onKeyDown={() => openProductModal(product)}
                >
                  <div
                    className={`product ${
                      product?.outOfStock ? "not-available" : null
                    }`}
                  >
                    <div
                      className="img strip"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div class="ribbon ">
                      10%
                      <br />
                      Rabatt
                    </div>
                    <div className="text">
                      <div className="title">{product.title}</div>
                      <div className="desc">{product.desc}</div>
                      <div className="price">${product.price}</div>
                    </div>
                    {product?.outOfStock ? (
                      <div className="not-available-text">
                        <div>Not Available</div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARDS SECTION END  */}

        <div className="pos-sidebar  mt-5">
          <div className="h-100 d-flex  flex-column  ">
            <div className="pos-sidebar-header">
              <div className="back-btn">
                <button
                  type="button"
                  data-dismiss-class="pos-sidebar-mobile-toggled"
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
                <button
                  onClick={renderHandle}
                  type="button"
                  class="btn btn-info"
                >
                  Take Away
                </button>
              </div>
              <div className="order btn btn-Warning">
                Order: <b>#0056</b>
              </div>
            </div>
            <div className="pos-sidebar-nav">
              <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#newOrderTab"
                  >
                    New Order ({cartItemsRedux?.length || 0})
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#orderHistoryTab"
                  >
                    Order History (0)
                  </a>
                </li> */}
              </ul>
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
                    return (
                      <div
                        className="row pos-table-row"
                        key={cart?.id + cart?.size?.label + cart?.addOnLength}
                      >
                        <div className="col-9">
                          <div className="pos-product-thumb">
                            <div
                              className="img"
                              style={{
                                backgroundImage: `url(${cart?.image})`,
                              }}
                            ></div>
                            <div className="info">
                              <div className="title">{cart?.title}</div>
                              <div className="single-price">${cart?.price}</div>
                              <div className="desc">{cart?.size?.label}</div>
                              <div className="desc">
                                {Array.isArray(cart?.addOns)
                                  ? cart?.addOns?.toString()
                                  : null}
                              </div>
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
                                    onClick={() => handleIncrement(cart?.id)}
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
                    ${cartTotalPriceRedux}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>Taxes (6%)</div>
                  <div className="flex-1 text-end h6 mb-0">$2.12</div>
                </div>
                <div className="d-flex align-items-center">
                  <div>Discount </div>
                  <div className="flex-1 text-end h6 mb-0">$20.20</div>
                </div>

                <hr className="opacity-1 my-10px" />
                <div className="d-flex align-items-center mb-2">
                  <div>Total</div>
                  <div className="flex-1 text-end h4 mb-0">
                    ${Number(totalPriceGenerate)?.toFixed(2)}
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
        </div>
      </div>
      {/* <a
        href="#"
        className="pos-mobile-sidebar-toggler"
        data-toggle-class="pos-sidebar-mobile-toggled"
        data-target="#pos"
      >
        <i
          className="iconify display-6"
          data-icon="solar:bag-smile-bold-duotone"
        />
        <span className="badge">5</span>
      </a> */}

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
        total={totalPriceGenerate}
      />
    </>
  );
};

export default CustomerOrder;
