import { createSlice } from "@reduxjs/toolkit";

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState: 0,
  reducers: {
    subscribeTemperature: (state, action) => {
      // console.log(`action.payload`, action.payload);
      state = action.payload;
      console.log(`state :`, state);
      return state;
    },
    unsubscribeTemperature: (state) => (state = 0), // to reinitialiser ...
  },
});

//our action
export const { subscribeTemperature, unsubscribeTemperature } =
  temperatureSlice.actions;

export const temperatureState = (state) => state.temperature;

export default temperatureSlice.reducer;
