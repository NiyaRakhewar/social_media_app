import React from "react";
import "./styles/Header.css";
import { MdOutlineExplore } from "react-icons/md";
// import { FaBookmark, FaHome, FaRocket, FaSearch, FaUser } from "react-icons/fa";
import { BiSearch, BiHomeAlt, BiSun, BiMoon, BiBookmark } from "react-icons/bi";
// import { BsBookmark } from "react-icons/bs";
import web_logo from "../components/images/logo_new.png";
export const Header = () => {
  return (
    <div className="outer-header">
      <div className="logo-div">
        <img src={web_logo} alt="logo" className="my-logo" />
      </div>
      <div className="search-div">
        <div className="search-bar">
          <input placeholder=" search..." />
        </div>
      </div>
      <div className="icons-div">
        {/* <FaSearch />
            <FaRocket />
            <FaHome />
            <FaBookmark />
            <FaUser /> */}

        <BiSearch className="icon" />
        <MdOutlineExplore className="icon" />
        <BiBookmark className="icon" />
        {/* <BsBookmark /> */}
        {/* <BiRocket /> */}
        <BiHomeAlt className="icon" />
        <BiSun className="icon" />
        <BiMoon className="icon" />
      </div>
    </div>
  );
};
