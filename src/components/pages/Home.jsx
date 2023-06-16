import React from "react";
import { Header } from "../Header";
import "../styles/Home.css";
import { Feeds } from "../Feeds";
import { Suggestions } from "../Suggestions";
import { Post } from "../Post";
export const Home = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Header />
      </div>
      <div className="main">
        <Post />
        <Feeds />
      </div>
      <div className="aside">
        <Suggestions />
      </div>
    </div>
  );
};
