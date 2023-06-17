import React from "react";
import { Header } from "../Header";
import "../styles/Home.css";
import { Feeds } from "../Feeds";
import { Suggestions } from "../Suggestions";
import { Post } from "../Post";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../Loader";
export const Home = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 3000);
  }, []);

  return (
    <div className="layout">
      {isLoader && <Loader />}
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
