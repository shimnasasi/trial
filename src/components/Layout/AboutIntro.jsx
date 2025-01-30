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
          <span className="OtherHeads">Our Vision</span>
          <span className="abIntroPara">
            Our vision is to transform the marketing landscape by promoting
            ethical practices, sustainability, and social responsibility. We aim
            to empower businesses to drive positive change through innovative
            marketing strategies that prioritize the long-term well-being of
            both society and the environment.
          </span>
          <span className="OtherHeads">Our Mission</span>
          <span className="abIntroPara">
            Our mission is to create marketing strategies that prioritize
            transparency, integrity, and impact. We believe in crafting
            campaigns that foster genuine connections with audiences, while
            contributing to sustainable business growth and social good. By
            partnering with like-minded organizations, we aim to reshape the
            marketing industry and make it a tool for positive societal change.
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
