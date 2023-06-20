import React, { useContext } from "react";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { BiBookmark, BiComment, BiEdit, BiHeart } from "react-icons/bi";
import { BsEyeFill, BsShare } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import "../components/styles/Feed.css";
import dayjs from "dayjs";
import "dayjs/locale/en";
export const Feeds = () => {
  const { state } = useContext(FeedListContext);

  const filteredData = !state.isLatest
    ? state.feed.sort((a, b) => {
        const dateA = a.likes.likeCount;
        const dateB = b.likes.likeCount;
        return dateB - dateA;
      })
    : state.feed.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });

  const clickHandlerLike = (post) => {};

  console.log("state in feeds", state);
  return (
    <div className="outer-feed-container">
      <div className="inner-feed-container">
        {filteredData.map((post, i) => {
          const { content, links, likes, views, comments, createdAt } = post;

          const userData = state.users.find(
            (user) => user.username === post.username
          );

          return (
            <div key={i} className="card">
              <div className="card-info">
                <div className="card-name-date">
                  <img src={userData.avatar} alt="" className="profile-image" />
                  <div className="username">
                    <h3>
                      {userData.firstName} {userData.lastName}
                      <small style={{ opacity: "0.7", fontSize: "small" }}>
                        {"  "}
                        {dayjs(createdAt).locale("en").format("MMM D, YYYY")}
                      </small>
                    </h3>

                    <p>@{userData.username}</p>
                  </div>
                </div>
                <div className="option">
                  <SlOptionsVertical />
                  {false && (
                    <div className="drop-down-feed">
                      <p className="option-icon-edit">
                        <BiEdit className="option-icon" /> Edit
                      </p>
                      <p className="option-icon-delete">
                        <RiDeleteBin5Line className="option-icon" /> Delete
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="card-content">
                <p> {content} </p>
                <div className="card-image">
                  <img
                    src={links}
                    alt=""
                    className={links !== "" && "image-tag"}
                  />
                </div>
              </div>

              <div className="card-icons">
                <div>
                  <BiHeart onClick={clickHandlerLike(post)} className="icn" />{" "}
                  {likes.likeCount === 0 ? (
                    ""
                  ) : (
                    <p>
                      <small>{likes.likeCount}</small>
                    </p>
                  )}
                </div>
                <div>
                  <BiComment className="icn" />
                  {comments.length === 0 ? (
                    ""
                  ) : (
                    <p>
                      <small>{comments.length}</small>
                    </p>
                  )}
                </div>
                <BiBookmark className="icn" />
                <div>
                  <BsEyeFill className="icn" />
                  <p>
                    <small>{views}</small>
                  </p>
                </div>
                <div>
                  <BsShare className="icn" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// {state.feed.map((post, i) => {
//   const { content, links, likes, views, comments, createdAt } = post;

//   const userData = state.users.find(
//     (user) => user.username === post.username
//   );

//   // console.log("userData avatar", userData.avatar);
//   return (
//     <div key={i} className="card">
//       <div className="card-info">
//         <div className="card-name-date">
//           <img src={userData.avatar} alt="" className="profile-image" />
//           <div className="username">
//             <h3>
//               {userData.firstName} {userData.lastName}
//               <small style={{ opacity: "0.7", fontSize: "small" }}>
//                 {" "}
//                 {/* {`  ${new Date(createdAt)
//                   .toDateString()
//                   .split(" ")
//                   .slice(1, 4)
//                   .join(" ")}`} */}
//                 {dayjs(post.createdAt)
//                   .locale("en")
//                   .format("MMM D, YYYY")}
//               </small>
//             </h3>

//             <p>@ {userData.username}</p>
//           </div>
//         </div>
//         <div className="option">
//           <SlOptionsVertical />
//           {false && (
//             <div className="drop-down-feed">
//               <p className="option-icon-edit">
//                 <BiEdit className="option-icon" /> Edit
//               </p>
//               <p className="option-icon-delete">
//                 <RiDeleteBin5Line className="option-icon" /> Delete
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="card-content">
//         <p> {content} </p>
//         <div className="card-image">
//           <img
//             src={links}
//             alt=""
//             className={links !== "" && "image-tag"}
//           />
//         </div>
//       </div>

//       <div className="card-icons">
//         <div>
//           <BiHeart className="icn" />{" "}
//           {likes.likeCount === 0 ? (
//             ""
//           ) : (
//             <p>
//               <small>{likes.likeCount}</small>
//             </p>
//           )}
//         </div>
//         <div>
//           <BiComment className="icn" />
//           {comments.length === 0 ? (
//             ""
//           ) : (
//             <p>
//               <small>{comments.length}</small>
//             </p>
//           )}
//         </div>
//         <BiBookmark className="icn" />
//         <div>
//           <BsEyeFill className="icn" />
//           <p>
//             <small>{views}</small>
//           </p>
//         </div>
//         <div>
//           <BsShare className="icn" />
//         </div>
//       </div>
//     </div>
//   );
// })}
