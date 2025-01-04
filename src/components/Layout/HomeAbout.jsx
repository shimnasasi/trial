import React from "react";
import "./HomeAbout.css";
import homeabout from "../../assets/home/homeabout.jpg";
import { IoBulbOutline } from "react-icons/io5";
import { GiBullseye } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";

const HomeAbout = () => {
  const homeaboutwork = [
    {
      icon: <IoBulbOutline />,
      name: "Discovery",
      desc: "We dive deep into understanding your brand, audience, and goals."
    },
    {
      icon: <GiBullseye />,
      name: "Strategy",
      desc: " A customized roadmap designed for growth and impact."
    },
    {
      icon: <GrWorkshop />,
      name: "Execution",
      desc: "Bringing the strategy to life with precision and creativity."
    },
    {
      icon: <SiTicktick />,
      name: "Optimization",
      desc: " Continuous improvement to maximize results."
    }
  ];
  return (
    <div className="homeabout-container">
      <span className="head">Our Work Process</span>
      <p>
        Our approach is clear and collaborative, ensuring your goals are met at
        every step:
      </p>

      <div className="homeaboutWrapper">
        <img src={homeabout} alt="" className="homeaboutimg" />
        <div className="homeaboutWrapper-main">
          {homeaboutwork.map((list, index) =>
            <div key={index} className="homeworkseries">
              <div className="HAicon">
                {list.icon}
              </div>
              <span className="headhabout">
                {list.name}
              </span>
              <span className="parahabout">
                {list.desc}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
