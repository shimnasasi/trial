import React from "react";
import Layout from "../Layout/Layout";
import { HomeContact } from "../Layout/HomeContact";
import "./Faq.css";
import Accordion from "../Layout/Accordion ";
import { faqList } from "../../utils/faq";

const Faq = () => {
  return (
    <Layout>
      <div className="faqPageTop">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faqwrapper">
        <Accordion items={faqList} />
      </div>
      <HomeContact />
    </Layout>
  );
};

export default Faq;
