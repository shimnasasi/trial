import React from "react";
import "./HomeServices.css";
import { Link } from "react-router-dom";
import { HSserviceList } from "../../utils/homeserviceList";

const HomeServices = () => {
  return (
    <div className="HomeServices-container">
      <div>
        <span className="hssideHead">our services</span>
        <div className="HSserviceHead-Wrapper">
          <span className="Hsexplorehead">Explore our services</span>
        </div>
      </div>
      <div className="hsserviceList-wrapper">
        {HSserviceList.map((list, index) =>
          <div className="hscard" key={index}>
            <img src={list.image} alt="" className="hscardImg" />
            <span className="hscardName">
              {list.name}
            </span>
          </div>
        )}
      </div>
      <Link to={"/services"}>
        <button className="learn-more">
          <span aria-hidden="true" className="circle">
            <span className="icon arrow" />
          </span>
          <span className="button-text">Explore More</span>
        </button>
      </Link>
    </div>
  );
};

export default HomeServices;
