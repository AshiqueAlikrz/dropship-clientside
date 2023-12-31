import React from "react";
import Navbar from "../components/navbar";
import HomePage from "../pages/home";
// import Service from "../pages/services";
import Newproducts from "./newproducts";
import myContext from "./../context/useContext";
import Mobiles from "./dummydata";

const mainpage = () => {
  return (
    <div>
      <myContext.Provider value ={{Mobiles}}>
        <Navbar />
        <HomePage />
        {/* <Service /> */}
        <Newproducts />
      </myContext.Provider>
    </div>
  );
};

export default mainpage;
