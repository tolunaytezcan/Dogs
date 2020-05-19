import { favoriteReducer, statusReducer } from "./reducers";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const reducers = combineReducers({
  favoriteReducer: favoriteReducer,
  statusReducer: statusReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
