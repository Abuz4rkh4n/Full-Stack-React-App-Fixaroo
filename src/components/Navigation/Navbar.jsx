import React from "react";
import logo from "../../assets/image.png";
import dropDown from "../../assets/down-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import addToCart from "../../assets/basket.png";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between z-20 bg-white px-12 py-4 fixed top-0">
      <img src={logo} alt="Logo" className="w-[64px]" />
      <div className="flex w-4/12 justify-evenly">
        <ul className=" flex items-center justify-between font-Open-Sans">
          <li>
            <a href="#" className="flex items-center">
              <h3 className=" text-sm font-semibold">Services</h3>
              <img src={dropDown} />
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm font-semibold mx-10">
              Commercial
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <h2 className=" font-Montserrat font-bold text-md mr-1">login</h2>
              <img src={rightArrow} className="w-3 h-3" />
            </a>
          </li>
        </ul>
        <button className=" bg-navbar-button w-40 h-10 p-2  rounded-full font-Montserrat text-sm font-semibold">
          Book Service
        </button>
        <a href="#">
          <img src={addToCart} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
