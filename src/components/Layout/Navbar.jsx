import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SideIcons from "./SideIcons";
import { RiPhoneFill } from "react-icons/ri";
// import { MdLocalPhone } from "react-icons/md";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logoimg" />
      </Link>
      {view ? (
        <ul className="listmobile">
          <Link to={"/"} className="navMainIcon">
            <li className="item">home</li>
          </Link>
          <Link to={"/about"} className="navMainIcon">
            <li className="item">about us</li>
          </Link>
          <Link to={"/services"} className="navMainIcon">
            <li className="item">services</li>
          </Link>{" "}
          <Link to={"/blog"} className="navMainIcon">
            <li className="item">Blogs</li>
          </Link>
          <Link to={"/contact"} className="navMainIcon">
            <li className="item">Contact us</li>
          </Link>
          <div className="listaddons">
            <img src={logo} alt="logo" className="logoimgnavList" />
            <h2>
              Your Ultimate <br /> Marketing Partner
            </h2>
            <div className="navbar-socio-Links">
              <a href="https://www.facebook.com/share/158CHpRx3o/">
                <FaFacebookSquare className="icon" />
              </a>
              <a href="https://www.instagram.com/dimark_marketing_management/">
                <FaInstagram className="icon" />
              </a>
              <a href="https://x.com/DimarkMM">
                <FaXTwitter className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/dimark-marketing-management-llc/">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </ul>
      ) : null}
      <div className="listLarger">
        <Link to={"/"}>
          <div className="item">home</div>
        </Link>
        <Link to={"/about"}>
          <div className="item">about </div>
        </Link>
        <Link to={"/services"}>
          <div className="item">services</div>
        </Link>{" "}
        <Link to={"/blog"}>
          <div className="item">Blogs</div>
        </Link>
        <Link to={"/contact"}>
          <div className="item">Contact </div>
        </Link>
      </div>
      <FaBars
        className="navIcon"
        onClick={() => {
          setView(!view);
        }}
      />
      <button className="navButton">
        <RiPhoneFill />
        <span>+971-54 279 1548</span>
      </button>
      <SideIcons />
    </div>
  );
};

export default Navbar;
