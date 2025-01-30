import React from "react";
import Layout from "../Layout/Layout";
import "./Blog.css";
import { blogData } from "../../utils/BlogsMain";
import { Link } from "react-router-dom";
import { BsTagFill } from "react-icons/bs";
import ContactForm from "../Layout/ContactForm";

const Blog = () => {
  return (
    <Layout>
      <div className="Blog-container">
        <div className="Blog-wrapper">
          <h1 className="blog-head">Blogs</h1>
        </div>
        <div className="blogContactwrapper">
          <div className="blogLists">
            {blogData.map((blog) => (
              <div className="BlogCard" key={blog.bid}>
                <img src={blog.image} className="BlogImg" alt="" />
                <div className="blogInfoDetails">
                  <div className="blogInfoDetailsWrapper">
                    <div className="dmarkdigital">
                      <BsTagFill />{" "}
                      <span className="dmm">Dimark Marketing Management </span>
                    </div>

                    <div className="dimarkDate">
                      <span>Dimark</span>
                      <span>{blog.blogDate}</span>
                    </div>
                  </div>
                </div>
                <div className="blogDetails">
                  <Link to={`/blog/${blog.bid}`} className="blogbtnWrapper">
                    <span className="BlogHead">{blog.BlogHead}...</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
