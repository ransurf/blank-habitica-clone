import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

export interface UserProfileInterface {
    username: string;
    description: string;
}
  
const userProfileAdapter = createEntityAdapter({
    selectId: (userProfile: UserProfileInterface) => userProfile.username
});

export const slice = createSlice({
    name: "userProfile",
    initialState: {
        ...userProfileAdapter.getInitialState(),
        userToDisplay: ""
    },
    reducers: {
        //receives username and description
        setUserProfile: (state, action) => {
            userProfileAdapter.upsertOne(state, action.payload);
        },
        setUserToDisplay: (state, action) => {
            state.userToDisplay = action.payload;
        }
    }
});

export const userProfileSelectors = userProfileAdapter.getSelectors(
    (state: any) => state.userProfile
);

export const selectSelf = (state: any) => state.userProfile

export const { setUserProfile, setUserToDisplay } = slice.actions;

export default slice.reducer;