import React from "react";
import "./Header.css";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="navBar">
      <div className="leftNav" style={{ margin: "auto" }}>
        <img
          src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg"
          alt=""
          style={{ margin: "auto" }}
        />
      </div>
      <div className="midNav">
        <div className="loactionDropDown">
          <div>
            <h3>Banglore</h3>
          </div>
          <div>
            <RiArrowDropDownLine />
          </div>
        </div>

        <div className="navBtn">
          <div className="navIcon">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648987966794x479811749978756400%2Ftrekking%2520%25281%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="navText">
            <h3>Trekking</h3>
          </div>
        </div>
        <div className="navBtn">
          <div className="navIcon">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648989517307x231484877400689020%2Fmotorcycle%2520%25282%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="navText">
            <h3>Riding</h3>
          </div>
        </div>
        <div className="navBtn">
          <div className="navIcon">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648986722707x666964559860979700%2Faction-camera%2520%25282%2529.png?w=48&h=48&auto=compress&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="navText">
            <h3>Go pro</h3>
          </div>
        </div>
        <div className="navBtn">
          <div className="navIcon">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648988411487x619738649722601200%2Fdslr-camera%2520%25282%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="navText">
            <h3>DSLR</h3>
          </div>
        </div>
        <div className="navBtn">
          <div className="navIcon">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648989408507x660597966311601900%2Fconsole%2520%25281%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="navText">
            <h3>PS4/Xbox</h3>
          </div>
        </div>
        <div className="navBtn">
          <div className="navIcon">
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1648987880884x852483720686704400%2Fcd-player%2520%25282%2529.png?w=32&h=32&auto=compress&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="navText">
            <h3>Games</h3>
          </div>
        </div>
      </div>
      <div className="rightNav">
        <div className="shoppingCartIcon">
          <div className="shopingIcon">
            <FiShoppingCart />
          </div>
        </div>
        <div className="loginSignupBtn">
          <h3>Login/Signup</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
