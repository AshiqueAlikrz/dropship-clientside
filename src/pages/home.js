import React from "react";
import "../style/home.css";

const home = () => {
  return (
      <div className="home-background">
        <div className="curesol-main-div">
          <div className="home-text-main-div">
            <h1 className="home-page-text">Welcome's you </h1>{" "}
            <h2 className="home-page-text2"> Your Ultimate Shopping Destination!</h2>
          </div>
          <img
            className="home-curesol-image"
            src="https://www.freepnglogos.com/uploads/shoes-png/shoes-png-srinivascreations-deviantart-1.png"
            alt=""
          ></img> 
        </div>
      </div>
  );
};

export default home;
