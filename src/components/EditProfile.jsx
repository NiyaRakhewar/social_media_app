import React, { useContext } from "react";
import "./styles/EditProfile.css";
import { useState } from "react";
import "./styles/EditProfile.css";
import { BsCamera } from "react-icons/bs";
import { AuthContext } from "../contextFolder/AuthContext";
import { FeedListContext } from "../contextFolder/FeedListContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const EditProfile = ({ profileData }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { token } = useContext(AuthContext);
  const { dispatch } = useContext(FeedListContext);

  // console.log("state.users in editprofile", state.users);

  const [editProfileData, setEditProfileData] = useState({
    ...profileData,
    avatar: profileData?.avatar,
    bio: profileData?.bio,
    website: profileData?.website,
  });

  //   console.log("editProfileData", editProfileData);
  const handleChangeDp = (event) => {
    toast.success(`Gambre Gambre!! New Image`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setEditProfileData((prevProfile) => ({
        ...prevProfile,
        avatar: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleBioChange = (e) => {
    setEditProfileData({ ...editProfileData, bio: e.target.value });
  };

  const handleLinkChange = (e) => {
    setEditProfileData({ ...editProfileData, website: e.target.value });
  };

  const handleProfileUpdate = async (editProfileData) => {
    toast.success(`Gambre Gambre!! Profile Edited `, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const response = await fetch(`/api/users/edit`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ userData: editProfileData }),
    });
    const data = await response?.json();

    console.log("editProfile", data.user);

    dispatch({ type: "EDIT_USER", payload: data?.user });
    setShowEdit(!showEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <button
        className="edit-profile-btn"
        onClick={() => setShowEdit(!showEdit)}
      >
        Edit Profile
      </button>
      {showEdit && (
        <form className="edit-profile-outer-container" onSubmit={handleSubmit}>
          <div className="edit-profile-inner-container">
            <div className="edit-profile-card">
              <div className="edit-profile-photo-container">
                <p className="edit-profile-photo-name">Photo</p>
                <div className="edit-profile-photo-div">
                  <img
                    className="edit-profile-photo"
                    src={editProfileData?.avatar}
                    alt=""
                  />
                  <label htmlFor="fileInput">
                    <BsCamera className="edit-profile-photo-icn" />
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleChangeDp}
                    />
                  </label>
                </div>
              </div>
              <div className="edit-profile-bio-container">
                <p className="edit-profile-bio-name">Bio</p>
                <textarea
                  type="text"
                  value={editProfileData.bio}
                  className="edit-profile-bio-input"
                  onChange={(e) => handleBioChange(e)}
                />
              </div>
              <label className="edit-profile-link-container">
                <p className="edit-profile-link-name">Link</p>
                <input
                  value={editProfileData.website}
                  className="edit-profile-link-input"
                  onChange={(e) => handleLinkChange(e)}
                />
              </label>
              <button
                className="update-btn"
                onClick={() => handleProfileUpdate(editProfileData)}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
