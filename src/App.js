import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import ScrollToTop from "./components/Layout/ScrollToTop";
import SingleService from "./components/Pages/SingleService";
import Blog from "./components/Pages/Blog";
import BlogDeatiled from "./components/Pages/BlogDeatiled";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/services/:id" element={<SingleService   />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog/:blogId" element={<BlogDeatiled/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
