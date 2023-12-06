import React from "react";
import Navbar from "../components/navbar";
import HomePage from "../pages/home";
import Service from "../pages/services";

const mainpage = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Service />
    </div>
  );
};

export default mainpage;
