import { createSlice } from "@reduxjs/toolkit";

export const userIDSlice = createSlice({
  name: "userInfo",
  initialState: {
    userID: "",
    apiKey: "",
  },
  reducers: {
    setUserID: (state, action) => {
      //state is current state, payload is the userID
      state.userID = action.payload;
    },
    setApiKey: (state, action) => {
      //state is current state, payload is the apiKey
      state.apiKey = action.payload;
    },
  },
});

export const { setUserID, setApiKey } = userIDSlice.actions;

export default userIDSlice.reducer;
