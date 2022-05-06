import { createSlice } from "@reduxjs/toolkit";

export const userStatsSlice = createSlice({
  name: "userStats",
  initialState: {
    userStats: {},
  },
  reducers: {
    setUserStats: (state, action) => {
      //state is current state, payload is the userID
      state.userStats = action.payload;
    },
  },
});

export const { setUserStats } = userStatsSlice.actions;

export default userStatsSlice.reducer;
