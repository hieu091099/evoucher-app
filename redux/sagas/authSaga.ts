import {takeEvery, put, call, delay} from 'redux-saga/effects';
import {LOGIN} from '../actions/actionTypes';
import {axiosPost} from '../../utils/axios';
import API from '../../utils/api';

function* handleLogin(action: any): Generator<any, any, any> {
  try {
    const {username, password} = action.payload;

    // const response = yield call(
    //   await axiosPost(API.AUTH.LOGIN, {
    //     username,
    //     password,
    //   })
    // );
    let response = {success: false, data: {}};
    yield delay(1000); // Delay 1 giây
    response = {
      success: true,
      data: {
        accessToken: 'Access',
        refreshToken: 'Refresh',
        username: 'admin',
        password: 'admin',
      },
    };
    yield put({
      type: LOGIN.SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: LOGIN.FAIL,
      payload: error.message,
    });
  }
}

function* authSaga() {
  yield takeEvery(LOGIN.REQUEST, handleLogin);
}

export default authSaga;
