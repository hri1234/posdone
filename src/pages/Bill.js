import React from 'react'

function Bill() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  {/* Bootstrap CSS */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  {/* style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; border-radius: 18px;" */}
  <section style={{ backgroundColor: "#FFFFFF" }}>
    <div className="container">
      <div className="row border ">
        <div
          className="col-sm-4 mx-auto   "
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="row">
            <div className="col-12 mb-5">
              <div className="text-center">
                <h4 className=" mt-3 ">Hotel Pub - Bar</h4>
                <h5>Address Here</h5>
                <h6>City Here Telephone Here</h6>
                <p> 11/20/2023</p>
              </div>
              <div className="d-flex justify-content-evenly ">
                <div>
                  <p className="p-0 m-0">DATE:</p>
                </div>
                <div className="d-flex ">
                  <p className="ms-5  p-0 m-0"> 11/20/2023 </p>
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
                  <p className="p-0 m-0">Subtotal:</p>
                </div>
                <div>
                  <p className="ms-5 p-0 m-0"> $ 0.00</p>
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
                        border: "2px outset #FFFFFF"
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
                        border: "2px outset #FFFFFF"
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Bootstrap CSS */}
</>

    </div>
  )
}

export default Bill
