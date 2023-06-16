// import { v4 as uuid } from "uuid";

export const initialState = {
  feed: [],
  users: [],
  showPost: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ALL_FEEDS":
      return { ...state, feed: action.payload };

    case "ALL_USERS":
      return { ...state, users: action.payload };

    case "SHOW_POST":
      return { ...state, showPost: action.payload };

    default:
      return state;
  }
};
