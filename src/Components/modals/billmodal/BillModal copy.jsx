import { Button } from "@mui/material";
import React from "react";
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

const BillModal = ({ modalShow, onCloseModal, data, total }) => {
  console.log(data);
  const printerRedux = useSelector(({ printing }) => printing?.items);
  const printerActive = printerRedux?.filter((f) => f?.status)[0];
  console.log("printerActive", printerActive);
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  const handleCloseModal = () => {
    onCloseModal(false);
  };
  const handlePrint = async () => {
    try {
      const receipt = (
        <Printer type="epson" width={42} characterSet="korea">
          <Text bold={true} size={{ width: 2, height: 2 }}>
            Restro Food
          </Text>
          <Text style={{ textAlign: "center" }}>Address:-</Text>
          <Text style={{ textAlign: "center" }}>
            102 street, City, State, Pincode
          </Text>
          <Br />
          <Line />
          <Row left="Date:" right={currentDate} />
          <Row left="Card Type:" right="VISA" />
          <Row left="Trans Type:" right="PURCHASE" />
          <Br />
          <Line />
          <Row left="Total" right={`$ ${Number(total)?.toFixed(2)}`} />

          <Br />
          <Line />
          <Br />
          <Text align="center">Wifi: some-wifi / PW: 123123</Text>
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

            <div className="row mt-3">
              <div className="col-12 mb-5">
                <div className="text-center">
                  <h4 className=" mt-3 ">Hotel Pub - Bar</h4>
                  <h5>Address Here</h5>
                  <h6>City Here Telephone Here</h6>
                  <p> 11/20/2023</p>
                  <h3>Table No</h3>
                </div>
                <div className="d-flex justify-content-evenly ">
                  <div>
                    <p className="p-0 m-0">DATE:</p>
                  </div>
                  <div className="d-flex ">
                    <p className="ms-5  p-0 m-0"> {currentDate} </p>
                    <p className="ms-3  p-0 m-0"> 03:33 PM</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Card Type:</p>
                  </div>
                  <div>
                    <p className="ms-5   p-0 m-0"> VISA</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Acct #</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> VISA</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">CARD Entry: </p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> SWIPED</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0"> Trans Type:</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> PURCHASE</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Trans Key: </p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> 602016B</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Discount: </p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> 20 %</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">AUTH CODE: </p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> 602016</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Check:</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> 6020</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Check ID:</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> 60</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> 60</p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">Server:</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0"> STEVEN TAB 7</p>
                  </div>
                  
                </div>
                <div className="d-flex justify-content-evenly">
                  <div>
                    <p className="p-0 m-0">total:</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0">
                      {" "}
                      ${Number(total)?.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mt-3">
                  <div>
                    <p>TIP:</p>
                  </div>
                  <div>
                    <p className="ms-5">
                      <input
                        type="text"
                        className="form-control p-0  "
                        placeholder="### ###"
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "2px outset #FFFFFF",
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly ">
                  <div>
                    <p className="p-0 m-0">TIP:</p>
                  </div>
                  <div>
                    <p className="ms-5 p-0 m-0">
                      <input
                        type="text"
                        className="form-control p-0 "
                        placeholder="### ###"
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "2px outset #FFFFFF",
                        }}
                      />
                    </p>
                  </div>
                </div>
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
