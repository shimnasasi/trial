import React from "react";
import Layout from "../Layout/Layout";
import ServiceBanner from "../Layout/ServiceBanner";
import { HomeContact } from "../Layout/HomeContact";
import ServiceList from "../Layout/ServiceList";

const Services = () => {
  return (
    <Layout>
      <ServiceBanner/>
      <ServiceList/>
      <HomeContact/>
    </Layout>
  );
};

export default Services;
