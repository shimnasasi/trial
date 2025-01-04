import React from "react";
import "./AboutIntro.css";
import imageintro from "../../assets/about/aboutbnr.jpg";
import { Link } from "react-router-dom";

const AboutIntro = () => {
  return (
    <div className="AboutIntro-container">
      <span className="Head">Get to Know Us</span>
      <div className="aboutIntroWrap">
        <img src={imageintro} alt="" className="imageintro" />
        
        <div className="wrapDetails">
          <span className="OtherHeads">Who We Are</span>
          <span className="abIntroPara">
            Dimark Marketing Management is a full-service digital marketing and
            design agency based in Dubai, committed to helping brands thrive
            online. Our team of creatives and marketing experts works closely
            with businesses of all sizes to create customized solutions that
            deliver measurable growth.
          </span>
          <span className="OtherHeads">Our mission is simple</span>
          <span className="abIntroPara">
            To be a reliable, results-driven partner that goes the extra mile
            for our clients. Through our wide range of design, marketing, and
            branding services, we make it our goal to elevate your brand,
            enhance customer engagement, and drive sustainable growth.
          </span>
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
    </div>
  );
};

export default AboutIntro;
