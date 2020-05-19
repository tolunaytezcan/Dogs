import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FETCH_DATA,
  BEGIN_STATUS,
  END_STATUS,
  FETCH_LOADING,
  FETCH_LOADED,
} from "./types";

export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case DELETE_FAVORITE:
      return state.filter((dog) => dog.id !== action.payload);
    case FETCH_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const statusReducer = (
  state = { loadingId: "", loadingFavorites: false },
  action
) => {
  switch (action.type) {
    case BEGIN_STATUS:
      return { ...state, loadingId: action.payload };
    case END_STATUS:
      return { ...state, loadingId: "", loadingFavorites: false };
    case FETCH_LOADING:
      return { ...state, loadingFavorites: true };
    case FETCH_LOADED:
      return { ...state, loadingFavorites: false };
    default:
      return state;
  }
};
