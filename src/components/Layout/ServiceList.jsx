import React from "react";
import "./ServiceList.css";
import { cardData } from "../../utils/processList";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <div className="ServiceList-container-main">
      <div className="ServiceList-container">
        <h1>Explore Our Services</h1>
        <div className="ServiceList-Details-wrapper">
          {cardData.map((list) => (
            <Link to={`/services/${list.id}`} key={list.id}>
              <div className="ServiceList-card">
                <span className="serviceHead">{list.name}</span>
                <span className="servicePara">{list.desc}</span>
                <img src={list.image} alt="" className="serviceImg" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
