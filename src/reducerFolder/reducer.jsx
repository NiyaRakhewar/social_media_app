// import { v4 as uuid } from "uuid";

export const initialState = {
  feed: [],
  users: [],
  showPost: false,
  isLatest: true,
  isOption: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_POST":
      return { ...state, feed: action.payload };

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

    case "SET_DATA_BY_LIKE":
      return { ...state, feed: action.payload };

    case "SET_DATA_BY_DISLIKE":
      return { ...state, feed: action.payload };

    case "SAVE_DATA_BY_BOOKMARK": {
      return {
        ...state,
        users: state.users.map((data) =>
          data.username === action.payload.username
            ? { ...data, bookmarks: action.payload.bookmarks }
            : data
        ),
      };
    }

    case "DELETE_POST":
      return { ...state, feed: action.payload };

    case "EDIT":
      return { ...state, feed: action.payload };

    default:
      return state;
  }
};
