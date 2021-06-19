import { combineReducers } from "@reduxjs/toolkit";

import temperatureReducer from "../redux-slices/temperatureSlice";

export default combineReducers({
  temperature: temperatureReducer,
});
