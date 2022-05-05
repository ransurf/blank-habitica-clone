import { createSlice } from '@reduxjs/toolkit';

export const userIDSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userID: '',
        apiKey: '',
    },
    reducers: {
        setUserID: (state, action) => {
            //state is current state, payload is the userID
            
            console.log('setUserID payload: ', action.payload);
            state.userID = action.payload;
            console.log('setUserID state: ', state);
        },
        setApiKey: (state, action) => {
            //state is current state, payload is the apiKey
            state.apiKey = action.payload;
        }
    }
}
);

export const { setUserID, setApiKey } = userIDSlice.actions;



export default userIDSlice.reducer;