import React from "react";
import Accordion from "./Accordion ";
import "./HomeAccordion.css";
import { faqList } from "../../utils/faq";

const HomeAccordion = () => {
  return (
    <div className="hmAccordion-container">
      <h1>Frequently Asked Questions</h1>
      <Accordion items={faqList} />
    </div>
  );
};

export default HomeAccordion;
