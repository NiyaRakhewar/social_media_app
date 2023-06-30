import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducerFolder/reducer";
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";

export const FeedListContext = createContext();
export const FeedListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { token, profile } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();

        dispatch({ type: "ALL_FEEDS", payload: data?.posts });
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();

        dispatch({ type: "ALL_USERS", payload: data?.users });
        // console.log("users", data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <FeedListContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedListContext.Provider>
  );
};
