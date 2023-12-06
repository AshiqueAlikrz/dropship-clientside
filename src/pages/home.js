import React from "react";
import "../style/home.css";

const home = () => {
  return (
      <div className="home-background">
        <div className="curesol-main-div">
          <div className="home-text-main-div">
            <h1 className="home-page-text"> SUMMER COLLECTION</h1>{" "}
            <h2 className="home-page-text2"> GET UPTO 40% OFFER</h2>
            <button className="home-shopnow-button">Shop now</button>
          </div>
          <img
            className="home-curesol-image"
            src="https://www.pinclipart.com/picdir/big/444-4447300_shopping-cart-png-clipart.png"
            alt=""
          ></img> 
        </div>
      </div>
  );
};

export default home;
