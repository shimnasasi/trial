import React from "react";
import Accordion from "./Accordion ";
import "./HomeAccordion.css";
// import { faqList } from "../../utils/faq";
import { homefaqList } from "../../utils/homefaq";
import { Link } from "react-router-dom";

const HomeAccordion = () => {
  return (
    <div className="hmAccordion-container">
      <h1>Frequently Asked Questions</h1> 
      <Accordion items={homefaqList} />
      <Link to={"/faq"}>
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

export default HomeAccordion;
