import React from "react";
import "./HomeContact.css";
import { Link } from "react-router-dom";

export const HomeContact = () => {
  return (
    <div className="HomeContact-container">
      <div className="hcontact-wrapper">
        <div className="hcontactDetails">
          <span className="contactHead">
            Curious about how Dimark can help your business? <br />
          </span>
          {/* <br /> */}
          Schedule a free consultation, <br /> and let’s discuss how we can
          bring your brand’s vision to life. <br /> Contact us today to get
          started!
        </div>
        <Link to={"/contact"}>
          <button className="learn-more">
            <span aria-hidden="true" className="circle">
              <span className="icon arrow" />
            </span>
            <span className="button-text">Contact us</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
