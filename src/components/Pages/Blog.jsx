import React from "react";
import Layout from "../Layout/Layout";
import "./Blog.css";
import { blogData } from "../../utils/BlogsMain";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout>
      <div className="Blog-container">
        <div className="Blog-wrapper">
          <h1 className="blog-head">Blogs</h1>
        </div>
        <div className="blogLists">
          {blogData.map((blog) => (
            <div className="BlogCard">
              <img src={blog.image} className="BlogImg" alt="" />

              <div className="blogDetails">
                <span className="BlogHead">{blog.BlogHead}</span>
                <span className="BlogPara">{blog.Content}</span>
              </div>
              <Link to={`/blog/${blog.bid}`} className="blogbtnWrapper">
                <button className="blogbtn">read more</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
