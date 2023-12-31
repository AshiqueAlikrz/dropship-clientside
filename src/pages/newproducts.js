import React from "react";
import "../style/newproducts.css";
import { useContext } from "react";
import myContext from "../context/useContext";

const Newproducts = () => {
  const { Mobiles } = useContext(myContext);

  // console.log(Mobiles);
  return (
    <>
      <div className="newproducts-title">
        <h2>Trending products</h2>
      </div>
      <div className="newproducts-container">
        {Mobiles.map((data) => (
          <div className="card" key={data.id}>
            {/* <div className="card-image"> */}
            <img src={data.image} alt={data.title} className="card-image" />
            {/* </div> */}
            <p className="card-title">{data.title}</p>
            <p className="card-body">{data.description} </p>
            <p className="card-footer">
              Written by <span className="card-by-name">John Doe</span> on <span className="card-date">25/05/23</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Newproducts;
