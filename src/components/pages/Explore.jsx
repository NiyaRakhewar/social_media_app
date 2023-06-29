import React from "react";
import { Header } from "../Header";
import { Feeds } from "../Feeds";
import { Suggestions } from "../Suggestions";
import { useContext } from "react";
import { FeedListContext } from "../../contextFolder/FeedListContext";

export const Explore = () => {
  const { state } = useContext(FeedListContext);
  // const { profile } = useContext(AuthContext);

  const filteredData = [...state.feed]?.sort((a, b) => {
    const dateA = a.likes?.likeCount;
    const dateB = b.likes?.likeCount;
    return dateB - dateA;
  });

  return (
    <div className="layout">
      {/* {isLoader && <Loader />} */}
      <div className="nav">
        <Header />
      </div>
      <div className="main">
        {/* <Post /> */}
        <Feeds filteredData={filteredData} />
      </div>
      <div className="aside">
        <Suggestions />
      </div>
    </div>
  );
};
