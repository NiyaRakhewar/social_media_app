import React from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from "../contextFolder/AuthContext";
import { useContext } from "react";
import { BsImage } from "react-icons/bs";
import { FeedListContext } from "../contextFolder/FeedListContext";
import "./styles/Edit.css";
import { MdOutlineRemoveCircle } from "react-icons/md";

export const EditPost = ({ post }) => {
  const { state, dispatch } = useContext(FeedListContext);
  const { token, profile } = useContext(AuthContext);
  const [showPop, setShowPop] = useState(false);

  const [editContent, setEditContent] = useState({
    ...post,
    content: post.content,
    links: post.links,
  });

  const currentUser = profile;

  const userData = state?.users?.find(
    (user) => user.username === currentUser.username
  );

  const handlerRemoveImage = () => {
    setEditContent({
      ...editContent,
      links: "",
    });
  };

  const handlerChangeContent = (e) => {
    setEditContent({ ...editContent, content: e.target.textContent });
  };

  const handleUploadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditContent((prev) => ({ ...prev, links: e.target.result }));
        //   setShowPhotos(true);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const clickHandlerSave = async (editContent) => {
    const response = await fetch(`/api/posts/edit/${editContent._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ postData: editContent }),
    });
    const data = await response?.json();

    dispatch({ type: "EDIT", payload: data.posts });

    setShowPop(!showPop);
    console.log("data in edit", data);
  };
  return (
    <div>
      <p className="option-icon-edit" onClick={() => setShowPop(!showPop)}>
        <BiEdit className="option-icon" /> Edit
      </p>

      {showPop && (
        <div className="add-outer-container">
          <div className="add-container">
            <div className="edit-card">
              <div className="edit-profile">
                <img src={userData.avatar} alt="" className="profile-image" />
              </div>
              <div className="edit-mini-card">
                <div className="edit-content">
                  <div
                    role="textbox"
                    contentEditable="true"
                    className="text"
                    suppressContentEditableWarning
                    placeholder=" What's on your mind..."
                    onInput={handlerChangeContent}
                  >
                    {editContent.content}
                  </div>
                  <div className="edit-img">
                    <img
                      src={editContent.links}
                      alt=""
                      className={editContent.links === "" ? "none" : "img"}
                    />
                    {editContent.links !== "" && (
                      <MdOutlineRemoveCircle
                        onClick={handlerRemoveImage}
                        className="remove-btn"
                      />
                    )}
                  </div>
                </div>
                <div className="edit-bottom">
                  <label className="edit-photo">
                    <input
                      type="file"
                      accept="image/*"
                      style={{ visibility: "hidden" }}
                      onChange={handleUploadImage}
                    />

                    <h4 style={{ display: "flex", flexDirection: "row" }}>
                      <BsImage className="edit-icn" />
                      Photo/GIF
                    </h4>
                  </label>
                  {/* <p className="sort-icn">
                  <BsEmojiLaughing style={{ fontSize: "x-large" }} />
                  Emojis
                </p> */}
                  <button
                    className="save-btn"
                    onClick={() => clickHandlerSave(editContent)}
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
