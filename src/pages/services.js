import React from "react";
import "../style/services.css";

const svgs = {
  shipping: require("../images/svg/shipping-fast-solid-svgrepo-com.svg").default,
  certified: require("../images/svg/certificate-check-svgrepo-com.svg").default,
  money: require("../images/svg/money-dollar-svgrepo-com.svg").default,
  return: require("../images/svg/recycle-svgrepo-com.svg").default,
};

const services = () => {
  const data = [
    {
      icon: svgs.shipping,
      name: "Free Shipping",
      details: "Above $5 Only",
    },

    {
      icon: svgs.certified,
      name: "Certified items",
      details: "100% Guarantee",
    },
    {
      icon: svgs.money,
      name: "Huge Savings",
      details: "At Lowest Price",
    },{
        icon: svgs.return,
        name: "Easy Returns",
        details: "No Questions Asked",
      }
  ];

  return (
    <div>
      <div className="services-container">
        {data.map((item, index) => (
          <div className="services-single-data" key={index}>
            <img src={item.icon} className="services-svg"alt={item.name} />
            <h2>{item.name}</h2>
            <h4>{item.details}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default services;
