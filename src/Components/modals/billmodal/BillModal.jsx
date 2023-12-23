import React from "react";
// css
import "./billModal.scss";
// npm
import { Box, Button } from "@mui/material";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  Br,
  Cut,
  Line,
  Printer,
  Text,
  Row,
  render,
} from "react-thermal-printer";
import { productPriceFormatter } from "src/utils";

const BillModal = ({
  modalShow,
  onCloseModal,
  cartProducts,
  total,
  subtotal,
  tax,
  orderId,
}) => {
  console.log("cartProducts", cartProducts);
  const printerRedux = useSelector(({ printing }) => printing?.items);
  const printerActive = printerRedux?.filter((f) => f?.status)[0];
  console.log("printerActive", printerActive);

  const handleCloseModal = () => {
    onCloseModal(false);
  };

  const rTitle = "Restro Food";
  const rAddress = "RQQ4+MP7, Hagonoy Bulacan";
  const rContact = "(+63 960 841 0594)";
  const rDateTime = new Date().toLocaleString();

  const handlePrint = async () => {
    try {
      const receipt = (
        <Printer type="epson" width={42} characterSet="korea">
          <Text bold={true} size={{ width: 2, height: 2 }}>
            {rTitle}
          </Text>
          <Text style={{ textAlign: "center" }}>{rAddress}</Text>
          <Text style={{ textAlign: "center" }}>{rContact}</Text>
          <Text style={{ textAlign: "center" }}>{rDateTime}</Text>
          <Text style={{ textAlign: "center" }}>{rDateTime}</Text>
          <Row left=" OrderId:" right={orderId || ""} />
          <Br />
          <Line />
          <Row className="receipt-body">
            {cartProducts?.map((cartProduct, i) => {
              return (
                <Row key={cartProduct?._id + i}>
                  <Text>{cartProduct.title}</Text>
                  <Text>
                    @ {cartProduct.price} x {cartProduct.quantity}
                  </Text>
                  &nbsp;&nbsp;
                  <Text>
                    {productPriceFormatter(
                      cartProduct.price * cartProduct.quantity + ""
                    )}
                  </Text>
                </Row>
              );
            })}
          </Row>
          <Br />
          <Line />
          <Row left="Items Count:" right={cartProducts?.length} />
          <Row left="Sub total:" right={productPriceFormatter(subtotal + "")} />
          <Row left="Tax:" right={productPriceFormatter(tax + "")} />{" "}
          <Row left="Total Amount:" right={productPriceFormatter(total + "")} />
          <Br />
          <Line />
          <Br />
          <Text align="center">Thank you!</Text>
          <Cut />
        </Printer>
      );
      const data = await render(receipt);
      console.log("print-data", data);
      const port = await window.navigator.serial.requestPort();
      await port.open({ baudRate: printerActive?.printerPort });

      console.log(port);
      const writer = port.writable?.getWriter();
      if (writer != null) {
        const writedData = await writer.write(data);
        writer.releaseLock();
        console.log(writedData);
      }
      // return data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal
      show={modalShow}
      onHide={() => handleCloseModal()}
      aria-labelledby="single-product-modal"
      className="modal-pos fade billModal"
      size="md"
    >
      <Modal.Body className="p-0">
        <div className="modal-content">
          <div className="modal-body p-0">
            <span
              className="btn-close position-absolute top-0 end-0 m-4"
              onClick={() => handleCloseModal()}
            />

            <div className="row mt-3">
              <div className="col-12 mb-5 receipt">
                <Box className="receipt-header">
                  <Box className="title">{rTitle}</Box>
                  <Box>{rAddress}</Box>
                  <Box>{rContact}</Box>
                  <Box> {rDateTime} </Box>
                  <Box>
                    OrderId: <span>{orderId || ""}</span>
                  </Box>
                </Box>
                <Box className="receipt-body">
                  {cartProducts?.map((cartProduct, i) => {
                    return (
                      <Box key={cartProduct?._id + i}>
                        <span>{cartProduct.title}</span>
                        <span>
                          @ {cartProduct.price} x {cartProduct.quantity}
                        </span>
                        &nbsp;&nbsp;
                        <span>
                          {productPriceFormatter(
                            cartProduct.price * cartProduct.quantity + ""
                          )}
                        </span>
                      </Box>
                    );
                  })}
                </Box>

                <Box className="receipt-footer">
                  <Box>
                    <div className="items-count key">Items Count: </div>
                    <span>{cartProducts?.length}</span>
                  </Box>
                  <Box>
                    <div className="sub-total key">Sub total: </div>{" "}
                    <span>{productPriceFormatter(subtotal + "")}</span>
                  </Box>
                  <Box>
                    <div className="sub-total key">Tax: </div>{" "}
                    <span>{productPriceFormatter(tax + "")}</span>
                  </Box>
                  <Box>
                    <div className="total-amount key">Total Amount: </div>{" "}
                    <span>{productPriceFormatter(total + "")}</span>
                  </Box>
                </Box>

                <h3 className="receipt-thankyou">Thank you!</h3>

                <div className="d-flex justify-content-center mt-5">
                  <Button variant="contained" onClick={() => handlePrint()}>
                    Print
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BillModal;
