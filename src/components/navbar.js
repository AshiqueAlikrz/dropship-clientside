import React from "react";
import "../style/navbar.css";

const navbar = () => {
  return (
    <div className="navbar-main-div">
      <div className="navbar-div">
        <div className="list-name">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
