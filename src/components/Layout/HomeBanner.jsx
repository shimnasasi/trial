import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <h2 className="welcome">Welcome to DiMark </h2>
      <span className="headbnr">
        We believe in <br />
        turning your
        <br />
        vision <br />
        into action
      </span>
      <div className="bnrDetails">
        <Link to={"/about"}>
          <button className="learn-more">
            <span aria-hidden="true" className="circle">
              <span className="icon arrow" />
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </Link>
        <div className="detailpara">
          we blend industry insights with creativity to craft solutions that
          engage your audience and fuel growth.
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
// JSX
