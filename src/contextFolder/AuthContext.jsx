import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const { state, dispatch } = useContext(FeedListContext);

  const encodedToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const [token, setToken] = useState(encodedToken || "");

  // console.log("encoded AC", encodedToken);

  const [profile, setProfile] = useState(user);

  // console.log(" profile", profile);

  return (
    <AuthContext.Provider value={{ token, setToken, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
