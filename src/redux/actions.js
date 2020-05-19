import axios from "axios";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  BEGIN_STATUS,
  END_STATUS,
  FETCH_DATA,
  FETCH_LOADING,
  FETCH_LOADED,
} from "./types";
const apiHost = "https://5ea5687c2d86f00016b45bbd.mockapi.io";

export const addFavorite = (dogId) => {
  return (dispatch) => {
    dispatch({
      type: BEGIN_STATUS,
      payload: dogId,
    });
    axios.post(`${apiHost}/favorites`, { dogId }).then((result) => {
      const eklenenFavori = result.data;
      dispatch({
        type: ADD_FAVORITE,
        payload: eklenenFavori,
      });
      dispatch({
        type: END_STATUS,
        payload: dogId,
      });
    });
  };
};

export const deleteFavorite = (id, dogId) => {
  return (dispatch) => {
    dispatch({
      type: BEGIN_STATUS,
      payload: dogId,
    });
    axios.delete(`${apiHost}/favorites/${id}`).then((result) => {
      dispatch({
        type: DELETE_FAVORITE,
        payload: id,
      });
      dispatch({
        type: END_STATUS,
        payload: dogId,
      });
    });
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_LOADING,
    });
    axios.get(`${apiHost}/favorites`).then((result) => {
      dispatch({
        type: FETCH_DATA,
        payload: result.data,
      });
      dispatch({
        type: FETCH_LOADED,
      });
    });
  };
};

export const showStatus = (dogId) => {
  return (dispatch) => {
    dispatch({
      type: BEGIN_STATUS,
      payload: dogId,
    });
  };
};
