import React from "react";
import Layout from "../Layout/Layout";
import AboutBanner from "../Layout/AboutBanner";
import AboutIntro from "../Layout/AboutIntro";
// import HomeServices from "../Layout/HomeServices";
import HomeAbout from "../Layout/HomeAbout";
import AboutWework from "../Layout/AboutWework";
import { HomeContact } from "../Layout/HomeContact";

const About = () => {
  return (
    <Layout>
      <AboutBanner/>
      <AboutIntro/>
      <AboutWework/>
      {/* <HomeServices /> */}
      <HomeAbout />
      <HomeContact />

    </Layout>
  );
};

export default About;
