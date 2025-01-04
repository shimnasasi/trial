import React from "react";
import "./AboutWework.css";
import { PiFlagBannerFold } from "react-icons/pi";
import { MdWorkspacePremium } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { ourprocessList } from "../../utils/processList";

const AboutWework = () => {
  return (
    <div className="AboutWework-container">
      <h1>
        Here`s
        <span className="whitestyle"> How it Works</span>
      </h1>
      <div className="processListDetails">
        {ourprocessList.map((list) => (
          <div className="ourprocessDetails">
            <div className="ProcessIconDetails">
              <div className="ProcessIcon">{list.icon}</div>
            </div>
            <span className="AboutProcessHead">{list.name}</span>
            <span className="AboutProcesspara">{list.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutWework;
