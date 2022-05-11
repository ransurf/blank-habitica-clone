import { createSlice} from "@reduxjs/toolkit";



export const userIDSlice = createSlice({
  name: "userInfo",
  initialState: {
    userID: "",
    apiKey: "",
  },
  reducers: {
    setUserID: (state, action) => {
      //state is current state, payload is the userID
      console.log("setUserID called");
      state.userID = action.payload;
    },
    setApiKey: (state, action) => {
      //state is current state, payload is the apiKey
      state.apiKey = action.payload;
    },
    setUserInfo: (state, action) => {
      //state is current state, payload is the userID
      console.log("setUserInfo called");
      console.log(action.payload);
      
      state.userID = action.payload.userID;
      state.apiKey = action.payload.apiKey;
    }

  },
});


export const { setUserID, setApiKey, setUserInfo } = userIDSlice.actions;

export default userIDSlice.reducer;
