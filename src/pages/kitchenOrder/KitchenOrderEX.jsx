import React from "react";
// css
// import "./kichenOrderEx.css";
// npm
import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
//  import "./kichenOrderEx.css";
const KitchenOrderEx = () => {
  const cartSavedRedux = useSelector(({ cart }) => cart?.saveItems);
  console.log("cartSavedRedux", cartSavedRedux);
  return (
    <Container maxWidth={false} className="kichenOrder">
      <Box
        sx={{ display: "flex", flexDirection: "column", position: "relative" }}
        className="pos pos-with-header"
        id="pos"
      >
        <Box
          sx={{
            position: "fixed",
            zIndex: "999",
            top: "90px",
            border: "1px solid #cccccc",
          }}
          className="pos-header"
        >
          <div className="logo">
            <div>
              <div className="logo-img">
                <i className="fa fa-bowl-rice fs-2" />
              </div>
              <div className="logo-text">Pine &amp; Dine</div>
            </div>
          </div>
          <div className="time" id="time">
            00:00
          </div>
          <div className="nav">
            <div className="nav-item">
              <a href="pos_kitchen_order.html" className="nav-link">
                <i className="far fa-clock nav-icon" />
              </a>
            </div>
            <div className="nav-item">
              <a href="pos_table_booking.html" className="nav-link">
                <i className="far fa-calendar-check nav-icon" />
              </a>
            </div>
            <div className="nav-item">
              <a href="pos_menu_stock.html" className="nav-link">
                <i className="fa fa-chart-pie nav-icon" />
              </a>
            </div>
          </div>
        </Box>

        <div className="pos-content">
          <div className="pos-task-row">
            <div className="pos-task">
              <div className="pos-task-info">
                <div className="table-no">
                  Table <b>01</b>
                </div>
                <div className="order-no">Order No: #9049</div>
                <div className="order-type">
                  <span className="badge bg-success">Dine-in</span>
                </div>
                <div className="time-pass" data-start-time={3}>
                  07:13 time
                </div>
              </div>
              <div className="pos-task-body">
                <div className="pos-task-completed">
                  Completed: <b>(1/3)</b>
                </div>{" "}
                <div className="pos-task-product-row">
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
                        return (
                          <div
                            className={`pos-task-product ${isCompleted}`}
                            key={cart?._id}
                          >
                            <div className="pos-task-product-img">
                              <div
                                className="cover"
                                style={{
                                  backgroundImage: `url(${cartImage})`,
                                  backgroundSize: "contain",
                                }}
                              />
                              {isCompleted ? (
                                <div className="caption">
                                  <div>Completed</div>
                                </div>
                              ) : null}
                            </div>

                            <div className="pos-task-product-info">
                              <div className="info">
                                <div className="title">{cart?.title}</div>
                                <div className="desc">{cart?.description}</div>
                              </div>
                              <div className="qty">{cart?.quantity}</div>
                            </div>
                            <div className="pos-task-product-action">
                              <a href="#" className="btn btn-success disabled">
                                Complete
                              </a>
                              <a
                                href="#"
                                className="btn btn-outline-inverse disabled"
                              >
                                Cancel
                              </a>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default KitchenOrderEx;