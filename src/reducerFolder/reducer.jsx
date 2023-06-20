// import { v4 as uuid } from "uuid";

export const initialState = {
  feed: [],
  users: [],
  showPost: false,
  isLatest: true,
  isLiked: false,
  isComment: false,
  isBookmarked: false,
  isOption: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ALL_FEEDS":
      return { ...state, feed: action.payload };

    case "ALL_USERS":
      return { ...state, users: action.payload };

    case "SHOW_POST":
      return { ...state, showPost: action.payload };

    case "DROP_FOR_PROFILE":
      return { ...state, isOption: action.payload };

    case "LATEST":
      return { ...state, isLatest: action.payload };

    default:
      return state;
  }
};
