import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const [token, setToken] = useState(encodedToken || "");

  console.log("encoded AC", encodedToken);

  console.log("user AC", user);

  const [profile, setProfile] = useState({
    username: user.username || "",
    password: user.password || "",
  });
  return (
    <AuthContext.Provider value={{ token, setToken, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
