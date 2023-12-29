import styles from "./OnlineOrderPage.module.css";
import React from "react";
const OnlineOrder = () => {
  return (
    <>
      <>
        {/* wrapper_start */}
        <div
          className={styles.wrapper}
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 0.37)",
            borderRadius: 16,
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
          }}
        >
          <a href="./index.html" className="px-2 py-2">
            {" "}
            <i
              className="fa-duotone fa-house"
              style={{
                color: "white",
                fontSize: 15,
                lineHeight: 2,
                textAlign: "center",
                width: 30,
                height: 30,
                borderRadius: "40%",
                backgroundColor: "rgb(60, 136, 179)",
              }}
            />
          </a>
          <a href="./register.html" className={styles.social}>
            <i
              className="fas fa-registered"
              style={{
                color: "white",
                fontSize: 15,
                lineHeight: 2,
                textAlign: "center",
                width: 30,
                height: 30,
                borderRadius: "40%",
                backgroundColor: "rgb(9, 44, 64)",
              }}
            />
          </a>
          <a className={`${styles.social} mt-2`} href="./support.html">
            {" "}
            <i
              className="fa-solid fa-square-phone"
              style={{
                color: "white",
                fontSize: 15,
                lineHeight: 2,
                textAlign: "center",
                width: 30,
                height: 30,
                borderRadius: "40%",
                backgroundColor: "rgb(39, 142, 7)",
              }}
            />
          </a>
          <a
            className="social py-2"
            href="./setting.html
 "
          >
            <i
              className="fa-duotone fa-gear-complex"
              style={{
                color: "white",
                fontSize: 15,
                lineHeight: 2,
                textAlign: "center",
                width: 30,
                height: 30,
                borderRadius: "40%",
                backgroundColor: "#0e284d",
              }}
            />
          </a>
        </div>
        {/* wrapper_end */}
        {/* nav-start */}
        <nav className={styles.nav}>
          <div className="start">
            <a className="navbar-brand " style={{ color: "#00003E" }} href="#">
              <i
                className={`fa-solid fa-bars-sort ${styles.set_icon_nav_first} `}
              />
            </a>
            <a className="" href="#">
              <i
                className={`fa-solid fa-cart-shopping ${styles.set_icon_nav_first} `}
              />
            </a>
            <a
              className="navbar-brand ms-2 mb-2"
              href="#"
              style={{ color: "#091b4d" }}
            >
              {" "}
              <span className="set_name">Online Orders</span>{" "}
            </a>
          </div>
          <div className="d-flex">
            <div className={styles.middile}>
              <div className="input-group mt-2 ms-5">
                <button className="btn btn-light " type="button">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ fontSize: 20 }}
                  />
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary border-start-0"
                    type="button"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid rgb(204, 203, 203)",
                    }}
                  >
                    <i
                      className="fa-duotone fa-barcode-read"
                      style={{ fontSize: 25, color: "#00003E" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="end">
              <i
                className={`"fa-solid fa-notes-medical ${styles.set_icon_nav} mt-1"`}
              />
              <i
                className={`"fa-solid fa-rotate ${styles.set_icon_nav} mt-1"`}
              />
              {/* <i class="fa-solid fa-grid set_icon_nav"></i> */}
            </div>
            <div className={`${styles.end} dropdown  ms-2`}>
              <p
                className=" border-0 "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  className={`fa-solid fa-grid ${styles.set_icon_nav} mt-1 `}
                />
              </p>
              <ul
                className="dropdown-menu mt-2"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-square-phone me-2" /> Support{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <i className="fa-duotone fa-gear-complex me-2" />
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={styles["middile-hide"]}
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
        >
          <div className="input-group mt-2 ms-5">
            <button className="btn btn-light " type="button">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ fontSize: 20 }}
              />
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary border-start-0"
                type="button"
                style={{
                  backgroundColor: "white",
                  border: "1px solid rgb(204, 203, 203)",
                }}
              >
                <i
                  className="fa-duotone fa-barcode-read"
                  style={{ fontSize: 25, color: "#00003E" }}
                />
              </button>
            </div>
          </div>
        </div>
        {/* nav-end */}
        <div
          className={`${styles.sidebar} ${styles.close}`}
          style={{ marginTop: "55px !important" }}
        >
          <ul className="nav-links">
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-pen-nib" />
                <span className="link_name"> Pending </span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-face-smile" />
                <span className="link_name">Approved</span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-book" />
                <span className="link_name">Ready TO ship</span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-xmark" />
                <span className="link_name">Canceled </span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-truck-fast" />
                <span className="link_name">Shipped </span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-truck" />
                <span className="link_name"> Delivered </span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-sharp fa-solid fa-toilet-paper-under-slash" />
                <span className="link_name">Undelivered</span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-duotone fa-credit-card" />
                <span className="link_name">Refund </span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-microchip" />
                <span className="link_name">Refund Processing </span>
              </a>
            </li>
            <li className="set_li">
              <a href="#">
                <i className="fa-solid fa-audio-description" />
                <span className="link_name"> Audit Logs </span>
              </a>
            </li>
          </ul>
        </div>
        {/* <section class="home-section">
    <div class="home-content">
<i class="fa-solid fa-ellipsis-vertical ms-3 mb-4"></i>
    </div>
  </section> */}
      </>
    </>
  );
};

export default OnlineOrder;
