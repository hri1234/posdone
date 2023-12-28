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
