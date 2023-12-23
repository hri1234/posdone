import React from "react";
// css
import "./page404.scss";
// npm
import { Link } from "react-router-dom";
// constants
import { ROUTES_URL } from "src/constants/url.constant";

const Page404 = () => {
  return (
    <center className="center">
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <div className="four_zero_four_bg_img">
                    <img src="/svg/404.svg" alt="404" />
                  </div>

                  <h1 className="text-center">404 Not Found</h1>
                </div>

                <div className="contant_box_404">
                  <Link to={ROUTES_URL.HOME} className="link_404">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </center>
  );
};

export default Page404;
