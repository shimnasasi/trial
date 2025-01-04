import React from "react";
import "./AboutBanner.css";
import about from "../../assets/about/abouthomebnr.jpg";
import { BsStars } from "react-icons/bs";

const AboutBanner = () => {
  return (
    <div className="AboutBanner-container">
      <div className="aboutimgwrapper">
        <img src={about} alt="" className="aboutBannerImg" />
        <BsStars className="ramingIcon"/>
        <BsStars className="ramingtopIcon"/>
      </div>
      <div className="aboutBanner-wrapper">
        <span className="smallHeading">About Us</span>
        <span className="aboutHead">
          Your Partner in Innovative Design, Marketing and Branding
        </span>
        <span className="detailsAbout">
          "At Dimark Marketing Management, we combine creativity with strategic
          marketing to deliver impactful results for your business."
        </span>
      </div>
    </div>
  );
};

export default AboutBanner;
