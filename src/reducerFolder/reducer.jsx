// import { v4 as uuid } from "uuid";

export const initialState = {
  feed: [],
  users: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ALL_FEEDS":
      return { ...state, feed: action.payload };

    case "ALL_USERS":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
