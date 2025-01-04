import React from "react";
import Layout from "../Layout/Layout";
import "./BlogDeatiled.css";
import { useParams } from "react-router-dom";
import { wholeBlogData } from "../../utils/BlogDetailed";
import { HomeContact } from "../Layout/HomeContact";

const BlogDeatiled = () => {
  const { blogId } = useParams();
  const rowRev = "row-reverse";
  const row = "row";
  return (
    <Layout>
      <div className="BlogDeatiled-Container">
        {wholeBlogData
          .filter((item) => item.blogId == blogId)
          .map((list) => (
            <div className="BlogDeatiledWrappermain" key={list.blogId}>
              <div className="BlogDeatiledHeadWraper">
                <h1>{list.blogName}</h1>
                <p>{list.blogPara}</p>
              </div>
              <div className="blogCardWrapperContainer">
                {list.blogContents.map((blogContent, index) => (
                  <div
                    className="blogCardWrapper"
                    key={index}
                    style={{ flexDirection: index % 2 == 0 ? rowRev : row }}
                  >
                    <img
                      className="blogDimg"
                      src={blogContent.contentImg}
                      alt=""
                    />
                    <div className="blogContentDetailsWrpper">
                      <span className="blogContentHead">
                        {blogContent.contentName}
                      </span>
                      <span className="blogContentPara">
                        {blogContent.contentSubHead}
                      </span>
                      <ul>
                        {blogContent.list.map((content) => (
                          <li>{content.Listitems}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <HomeContact />
    </Layout>
  );
};

export default BlogDeatiled;
