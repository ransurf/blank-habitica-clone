import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getStats } from "../habiticaAPI";
import { setUserStats } from "../slices/userStats";
import { setUserInfo } from "../slices/userInfo";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// FIX :any when I have time
function* fetchUserStats(action: any): any {
  try {
    console.log("fetchUserStats saga called, userInfo" + action.payload);
    const result = yield call(
      getStats,
      action.payload.userID,
      action.payload.apiKey
    );
    console.log("fetchUserStats saga result");
    console.log(result);
    yield put(setUserStats(result));

  } catch (e) {
    // yield put({type: "updateUserStats", message: e.message});
  }
}

function* userInfoSaga() {
  //run fetchUserStats on each dispatched action from userInfoSlice
  yield takeEvery(setUserInfo.type, fetchUserStats);
}

export default userInfoSaga;
