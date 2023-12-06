import React from "react";
import "../style/navbar.css";
import ShoppingCartIcon from "../images/svg/shopping-cart-outline.svg";
import ShoppingCartLogo from "../images/logo/krzlogo.png";
import MoreSettingIcon from "../images/svg/more-vertical-outline.svg"
 

const navbar = () => {
  return (
    <div className="navbar-main-div">
      <div className="navbar-div">
        <div className="navbar-logo">
          <img src={ShoppingCartLogo}  className="ShoppingCartLogo" alt=""></img>
        </div>
        <div className="navbar-list-name">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-icons-div">
          <form className="form">
            <label htmlFor="search">
              <input required autoComplete="off" placeholder="Search" id="search" type="text" />
              <div className="icon">
                <svg
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-on"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <svg
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="swap-off"
                >
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
              </div>
              <button type="reset" className="close-btn">
                <svg viewBox="0 0 20 20" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </label>
          </form>

          <img src={ShoppingCartIcon} className="ShoppingCartIcon" alt=""></img>
          <img src={MoreSettingIcon} className="ShoppingCartIcon" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default navbar;
