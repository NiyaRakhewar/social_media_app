import React, { useContext } from "react";
import "./styles/Header.css";
import { MdOutlineExplore } from "react-icons/md";
// import { FaBookmark, FaHome, FaRocket, FaSearch, FaUser } from "react-icons/fa";
import { BiSearch, BiHomeAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import { BsBookmark } from "react-icons/bs";
import web_logo from "../components/images/logo_new.png";
import { AuthContext } from "../contextFolder/AuthContext";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { useNavigate } from "react-router";
export const Header = () => {
  const { profile } = useContext(AuthContext);

  const { state, dispatch } = useContext(FeedListContext);

  const navigate = useNavigate();

  const filteredData = state?.users?.find(
    (user) => user?.username === profile?.username
  );
  return (
    <div className="outer-header">
      <div className="logo-div" onClick={() => navigate("/home")}>
        <img src={web_logo} alt="logo" className="my-logo" />
      </div>
      <div className="search-div">
        <div className="search-bar">
          {/* <input placeholder=" search..." /> */}
        </div>
      </div>
      <div className="icons-div">
        <BiSearch className="icon" />
        <MdOutlineExplore className="icon" />
        {/* <BiBookmark
          className="icon"
          onClick={() => navigate("/bookmarkpage")}
        /> */}
        <BiHomeAlt className="icon" onClick={() => navigate("/home")} />
        {/* <BiSun className="icon" />
        <BiMoon className="icon" />| */}{" "}
        |
        <div
          className="profile-info"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {
            <div
              className="profile-info"
              onClick={() =>
                dispatch({ type: "DROP_FOR_PROFILE", payload: !state.isOption })
              }
            >
              <img alt="" src={filteredData?.avatar} className="profile-pic" />
              <h4>{filteredData?.firstName}</h4>
              <IoIosArrowDown className="icon" />
            </div>
          }
          {state.isOption && (
            <div className="drop-down">
              <button
                onClick={() => navigate(`/profile/${filteredData.username}`)}
              >
                Profile
              </button>
              <button className="signout-btn">Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
