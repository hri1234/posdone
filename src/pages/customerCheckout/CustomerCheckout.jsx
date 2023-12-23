import React, { useState } from "react";
// npm
import { useSelector } from "react-redux";
// Components
import TbleModal from "src/Components/modals/tablemodal/TbleModal";

const CustomerCheckout = () => {
  const [tableModal, setTableModal] = useState(false);
  const tableItemsRedux = useSelector(({ table }) => table?.items);

  const closeTableModal = () => {
    setTableModal(false);
    // setProductSelected({});
  };
  return (
    <>
      <div className="pos pos-with-sidebar" id="pos">
        <div className="pos-content">
          <div className="pos-content-container">
            <div className="d-md-flex align-items-center mb-4">
              <div className="pos-booking-title flex-1">
                <button
                  onClick={() => setTableModal(true)}
                  type="button"
                  className="btn btn-info mb-3"
                >
                  Add Table
                </button>
                <div className="fs-24px mb-1">Available Table (13/20)</div>

                <div className="mb-2 mb-md-0 d-flex">
                  <div className="d-flex align-items-center me-3">
                    <i className="fa fa-circle fa-fw text-gray-500 fs-9px me-1" />{" "}
                    Reserved
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <i className="fa fa-circle fa-fw text-warning fs-9px me-1" />{" "}
                    Table In-use
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <i className="fa fa-circle fa-fw text-theme fs-9px me-1" />{" "}
                    Table Available
                  </div>
                </div>
              </div>
            </div>
            <div className="pos-table-row">
              {console.log({ tableItemsRedux })}
              {tableItemsRedux.length > 0 &&
                tableItemsRedux.map((item, id) => {
                  console.log({ item });
                  return (
                    <div className="pos-table in-use selected">
                      <a
                        href="#"
                        className="pos-table-container"
                        data-toggle="select-table"
                      >
                        <div className="pos-table-status" />

                        <div className="pos-table-name">
                          <div className="name">{item.name}</div>
                          <div className="no">1</div>
                          <div className="order">
                            <span>9 orders</span>
                          </div>
                        </div>

                        <div className="pos-table-info-row">
                          <div className="pos-table-info-col">
                            <div className="pos-table-info-container">
                              <span className="icon opacity-50">
                                <i className="far fa-user" />
                              </span>
                              <span className="text">4 / 4</span>
                            </div>
                          </div>
                          <div className="pos-table-info-col">
                            <div className="pos-table-info-container">
                              <span className="icon opacity-50">
                                <i className="far fa-clock" />
                              </span>
                              <span className="text">35:20</span>
                            </div>
                          </div>
                        </div>
                        <div className="pos-table-info-row">
                          <div className="pos-table-info-col">
                            <div className="pos-table-info-container">
                              <span className="icon opacity-50">
                                <i className="fa fa-receipt" />
                              </span>
                              <span className="text">$318.20</span>
                            </div>
                          </div>
                          <div className="pos-table-info-col">
                            <div className="pos-table-info-container">
                              <span className="icon opacity-50">
                                <i className="far fa-dollar-sign" />
                              </span>
                              <span className="text">Unpaid</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="pos-sidebar">
          <div className="pos-sidebar-header">
            <div className="back-btn">
              <button
                type="button"
                data-dismiss-class="pos-sidebar-mobile-toggled"
                data-target="#pos"
                className="btn"
              >
                <i className="fa fa-chevron-left" />
              </button>
            </div>
            <div className="icon">
              <i className="fa fa-plate-wheat" />
            </div>
            <div className="title">Table 01</div>
            <div className="order">
              Order: <b>#0001</b>
            </div>
          </div>
          <div className="pos-sidebar-body">
            <div className="pos-table" data-id="pos-table-info">
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(./images/product-1.jpg)" }}
                    ></div>
                    <div className="info">
                      <div className="title">Grill Pork Chop</div>
                      <div className="desc">- size: large</div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$12.99</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(./images/product-10.jpg)",
                      }}
                    ></div>
                    <div className="info">
                      <div className="title">Orange Juice</div>
                      <div className="desc">
                        - size: large
                        <br />- less ice
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x2</div>
                <div className="col-3 total-price">$10.00</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(./images/product-13.jpg)",
                      }}
                    />
                    <div className="info">
                      <div className="title">Vanilla Ice-cream</div>
                      <div className="desc">
                        - scoop: 1 <br />- flavour: vanilla
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$3.99</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(./images/product-2.jpg)" }}
                    ></div>
                    <div className="info">
                      <div className="title">Grill chicken chop</div>
                      <div className="desc">
                        - size: large
                        <br />- spicy: medium
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$10.99</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(./images/product-4.jpg)" }}
                    />
                    <div className="info">
                      <div className="title">Mushroom Soup</div>
                      <div className="desc">
                        - size: large
                        <br />- more cheese
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$3.99</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(./images/product-4.jpg)" }}
                    ></div>
                    <div className="info">
                      <div className="title">Hawaiian Pizza</div>
                      <div className="desc">
                        - size: large
                        <br />- more onion
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$15.00</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{
                        backgroundImage: "url(./images/product-12.jpg)",
                      }}
                    />
                    <div className="info">
                      <div className="title">Perfect Yeast Doughnuts</div>
                      <div className="desc">
                        - size: 1 set
                        <br />- flavour: random
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$2.99</div>
              </div>
              <div className="row pos-table-row">
                <div className="col-8">
                  <div className="pos-product-thumb">
                    <div
                      className="img"
                      style={{ backgroundImage: "url(./images/product-7.jpg)" }}
                    />
                    <div className="info">
                      <div className="title">Macarons</div>
                      <div className="desc">
                        - size: 1 set
                        <br />- flavour: random
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1 total-qty">x1</div>
                <div className="col-3 total-price">$4.99</div>
              </div>
            </div>
            <div
              className="h-100 d-none align-items-center justify-content-center text-center p-20"
              data-id="pos-table-empty"
            >
              <div>
                <div className="mb-3">
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
                <h4>No table selected</h4>
              </div>
            </div>
          </div>
          <div className="pos-sidebar-footer">
            <div className="d-flex align-items-center mb-2">
              <div>Subtotal</div>
              <div className="flex-1 text-end h6 mb-0">$64.94</div>
            </div>
            <div className="d-flex align-items-center">
              <div>Taxes (6%)</div>
              <div className="flex-1 text-end h6 mb-0">$3.90</div>
            </div>
            <hr className="opacity-1 my-10px" />
            <div className="d-flex align-items-center mb-2">
              <div>Total</div>
              <div className="flex-1 text-end h4 mb-0">$68.84</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <a
                href="#"
                className="btn btn-default w-80px rounded-3 text-center me-10px"
              >
                <i className="fab fa-paypal d-block fs-18px my-1" />
                E-Wallet
              </a>
              <a
                href="#"
                className="btn btn-default w-80px rounded-3 text-center me-10px"
              >
                <i className="fab fa-cc-visa d-block fs-18px my-1" />
                CC
              </a>
              <a
                href="#"
                className="btn btn-theme rounded-3 text-center flex-1"
              >
                <i className="fa fa-wallet d-block fs-18px my-1" />
                Pay by Cash
              </a>
            </div>
          </div>
        </div>
      </div>

      <TbleModal
        modalShow={tableModal}
        onCloseModal={() => closeTableModal()}
        //  data = {cartTotalPriceRedux}
        //  total={ totalPriceGenerate}
      />
    </>
  );
};

export default CustomerCheckout;
