import { configureStore } from '@reduxjs/toolkit';
import userIDReducer from '../slices/userInfo/userInfo'

export const store = configureStore({
    reducer: {
        userID: userIDReducer
    }

});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch