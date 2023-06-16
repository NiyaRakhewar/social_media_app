import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import "../components/styles/Suggestions.css";
export const Suggestions = () => {
  const { state } = useContext(FeedListContext);

  console.log("sugg", state.users);
  return (
    <div className="outer-suggetion-container">
      <div className="inner-suggetion-container">
        <h2>Suggested Users</h2>
        {state.users.map((user) => {
          const { avatar, firstName, lastName } = user;
          return (
            <div className="user-card">
              <img src={avatar} alt="" className="profile-img" />
              <p className="name">
                {firstName} {lastName}
              </p>

              <button className="follow-btn"> Follow </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
