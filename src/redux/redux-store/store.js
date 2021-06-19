import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../redux-reducers/rootReducer";

export default configureStore({
  reducer: RootReducer,
});
