import React from "react";
import "./ServiceBanner.css";
import main from "../../assets/service/main.jpg";

const ServiceBanner = () => {
  return (
    <div className="ServiceBanner-mainContainer">
      <div className="pageTop">
        <span className="servicepagetophead">Services</span>
        <span className="servicepagetoppara">
          {/* Innovative Solutions for <br /> Your Digital Success */}
          Explore our tailored solutions designed to <br  />  elevate your brand
          and drive measurable growth.
        </span>
      </div>
      <div className="ServiceBanner-container">
        <div className="serviceImageWrapper">
          <img src={main} alt="" className="imgServiceMain" />
        </div>
        <div className="serviceDetailswrapper">
          <span className="serviceDetailsHEad">
            Innovative Solutions for  Your Digital Success
          </span>
          <span className="serviceDetailsPara">
            At Dimark Marketing Management, we offer a full suite of services
            that combines creativity with strategy. Whether you need stunning
            design, effective marketing, or a strong brand identity, our expert
            team is here to help you achieve your business goals. Explore our
            services below and discover how we can partner for success.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
