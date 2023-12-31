import React, { useContext } from "react";
import { Header } from "../Header";
import "./profilepage.css";
import { UserPosts } from "./UserPosts";
// import { UserBookmarks } from "./UserBookmarks";
// import { BsBookmarksFill, BsFileEarmarkPost } from "react-icons/bs";
import { useState } from "react";
// import { AuthContext } from "../../contextFolder/AuthContext";
import { TbWorld } from "react-icons/tb";
import { FeedListContext } from "../../contextFolder/FeedListContext";
// import { EditProfile } from "../EditProfile";
import { MdRemove } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { BsFileEarmarkPost } from "react-icons/bs";
import { UnFollowBtn } from "./UnFollowBtn";
import { FollowBtn } from "./FollowBtn";

export const AnyProfile = () => {
  const [show, setShow] = useState("userposts");

  const [showList, setShowList] = useState("");

  const [showCard, setShowCard] = useState(false);

  const { state } = useContext(FeedListContext);

  // const { profile } = useContext(AuthContext);
  const { username } = useParams();

  const profile = JSON.parse(localStorage.getItem("user"));

  const newData = profile.following.map((user) => user.username);

  const followBtn = newData.includes(username);

  const navigate = useNavigate();

  //   console.log("followbtn", followBtn);

  const filteredData = state.feed?.filter(
    (post) => post?.username === username
  );

  const profileData = state.users?.find((user) => user.username === username);

  const handlerPost = () => {
    setShow("userposts");
  };
  //   const handlerBookmarks = () => {
  //     setShow("userbookmarks");
  //   };

  const handlerFollowing = () => {
    if (profileData?.following.length !== 0) {
      setShowList("following");
    }
    setShowCard(!showCard);
  };

  const handlerFollowers = () => {
    if (profileData?.followers.length !== 0) {
      setShowList("followers");
    }
    setShowCard(!showCard);
  };

  return (
    <div>
      <div className="profile-page-container">
        <div className="profile-header">
          <Header />
        </div>
        <div className="profile-page-outer-container">
          <div className="profile-page-inner-container">
            <div className="profile-card">
              <div className="background"></div>
              <div className="profile-data">
                <div className="profile-inform">
                  <p className="profile-name">
                    {profileData?.firstName} {profileData?.lastName}
                  </p>
                  <p className="profile-username">@{profileData?.username}</p>
                </div>
                <img
                  className="profile-picture"
                  src={profileData?.avatar}
                  alt=""
                />
                <div>
                  <button
                    className="edit-profile-btn"
                    style={{ border: "none", width: "100px" }}
                  ></button>
                </div>
                {/* <EditProfile profileData={profileData} /> */}
              </div>
              <p className="profile-bio">{profileData?.bio}</p>
              <div className="profile-website">
                <TbWorld />
                <p>{profileData?.website}</p>
              </div>
              <div className="profile-count">
                <p> {filteredData.length} Post</p> |{" "}
                <p onClick={handlerFollowing}>
                  {profileData?.following?.length} Following
                </p>
                {showList === "following" && showCard && (
                  <div className="edit-profile-outer-container">
                    <div className="edit-profile-inner-container">
                      <div className="profile-follow-outer-card">
                        <div className="profile-follow-card">
                          {profileData?.following?.map((user, i) => (
                            <div
                              onClick={() =>
                                navigate(`/profile/${user.username}`)
                              }
                              key={i}
                              className="follow-card"
                            >
                              <img
                                src={user?.avatar}
                                alt=""
                                className="profile-img"
                              />
                              <p
                                className="name"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {user?.firstName} {user?.lastName}
                                <small className="profile-username">
                                  @{user?.username}
                                </small>
                              </p>
                            </div>
                          ))}
                        </div>
                        <MdRemove
                          className="follow-icn"
                          onClick={() => setShowCard(!showCard)}
                        />
                      </div>
                    </div>
                  </div>
                )}
                |
                <p onClick={handlerFollowers}>
                  {profileData?.followers?.length} Followers
                  {showList === "followers" && showCard && (
                    <div className="edit-profile-outer-container">
                      <div className="edit-profile-inner-container">
                        <div className="profile-follow-outer-card">
                          <div className="profile-follow-card">
                            {profileData?.followers?.map((user, i) => (
                              <div
                                onClick={() =>
                                  navigate(`/profile/${user.username}`)
                                }
                                key={i}
                                className="follow-card"
                              >
                                <img
                                  src={user?.avatar}
                                  alt=""
                                  className="profile-img"
                                />
                                <p
                                  className="name"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  {user?.firstName} {user?.lastName}
                                  <small className="profile-username">
                                    @{user?.username}
                                  </small>
                                </p>
                              </div>
                            ))}
                          </div>
                          <MdRemove
                            className="follow-icn"
                            onClick={() => setShowCard(!showCard)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </p>
              </div>

              <div>
                {followBtn ? (
                  <UnFollowBtn profileData={profileData} />
                ) : (
                  <FollowBtn profileData={profileData} />
                )}
              </div>
            </div>

            <div className="profile-navbar">
              <div
                className={
                  show === "userposts" ? "highlight-post" : "post-container"
                }
                onClick={handlerPost}
              >
                <BsFileEarmarkPost />
                <p>POST</p>
              </div>

              {/* <div
                onClick={handlerBookmarks}
                className={
                  show === "userbookmarks"
                    ? "highlight-bookmarks"
                    : "bookmark-container"
                }
              >
                <BsBookmarksFill />
                <p>Bookmarks</p>
              </div> */}
            </div>
            {show === "userposts" && <UserPosts username={username} />}
            {/* {show === "userbookmarks" && <UserBookmarks />} */}
          </div>
        </div>
      </div>
    </div>
  );
};
