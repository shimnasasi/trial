import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-mainWrapper">
      <div className="footer-container">
        <div className="footer-mainDetails">
          <img src={logo} alt="" className="footerImg" />
          <p>Elevating Your Brand with Creativity, Strategy, and Results.</p>
        </div>

        <div className="NavigationFooter">
          <h2>Navigation Links</h2>
          <div className="navLinks">
            <Link to={"/"}>home</Link>
            <Link to={"/about"}>about us</Link>
            <Link to={"/services"}>services</Link>
            <Link to={"/contact"}>contact us</Link>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Information</h2>
          <div className="navLinks">
            <span>
              Dimark Marketing Management LLC
              <br /> Dubai , United Arab Emirates.
            </span>
            <br />
            <div className="iconGroup">
              <a
                title="instagramLink"
                target="_blank"
                href="https://www.instagram.com/dimark_marketing_management?igsh=MW5tZWtjc2x5NnJ0cg=="
              >
                <FaInstagram />
              </a>
              <a
                title="facebookLink"
                target="_blank"
                href="https://www.facebook.com/share/158CHpRx3o/"
              >
                <FaFacebookSquare />
              </a>
              <a
                title="linkedInLink"
                target="_blank"
                href="https://www.linkedin.com/company/dimark-marketing-management-llc/"
              >
                <FaLinkedin />
              </a>
              <a
                title="XLink"
                target="_blank"
                href="https://x.com/DimarkMM?t=XhWjdzeuZ3l3B7GIT7jR-A&s=08"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="NavigationFooter">
          <h2>Contact</h2>
          <div className="navLinks">
            <span>+971-54 279 1548</span>
            <a className="mailid" href="mailto:info@dimark.ae">
              info@dimark.ae
            </a>
          </div>
        </div>
      </div>
      <hr />

      <p className="copyright">
        Copyright @ Dimark.ae |Dimark Marketing Management LLC
      </p>
    </div>
  );
};

export default Footer;
