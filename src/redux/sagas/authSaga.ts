import {takeEvery, put, call} from 'redux-saga/effects';
import {LOGIN} from '../actions/actionTypes';
import axios from '../../utils/axios';
import API from '../../utils/api';
import {loginSuccess, loginFail} from '../actions/authAction';
const calllogin = async (payload: {username: string; password: string}) => {
  const response = await axios.post(API.AUTH.LOGIN, {
    username: payload.username,
    password: payload.password,
  });
  console.log('4444');

  return response.data;
};

function* handleLogin(action: any): Generator<any, any, any> {
  try {
    const response: {token: string; authentication: boolean; user: object} =
      yield call(calllogin, action.payload);

    if (response?.authentication) {
      yield put(
        loginSuccess({
          type: LOGIN.SUCCESS,
          payload: response.data,
        }),
      );
    }
  } catch (error: any) {
    yield put(
      loginFail({
        type: LOGIN.FAIL,
        payload: error.message,
      }),
    );
  }
}

function* authSaga() {
  yield takeEvery(LOGIN.REQUEST, handleLogin);
}

export default authSaga;
