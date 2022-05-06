import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userInfoReducer from '../slices/userInfo'
import userInfoSaga from '../sagas/userInfoSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleWare = createSagaMiddleware()

const middleware = (getDefaultMiddleware: any) => [...getDefaultMiddleware(), sagaMiddleWare]
export const store = configureStore({
    reducer: {
        userInfo: userInfoReducer

    },
    middleware: middleware
});

sagaMiddleWare.run(userInfoSaga)

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch