import {registerSuccess, registerFail} from './../actions/authAction';
import {SIGN_UP} from './../actions/actionTypes';
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

  return response.data;
};

const callregister = async (payload: {
  username: string;
  password: string;
  email: string;
  phone: string;
  name: string;
}) => {
  const response = await axios.post(API.AUTH.REGISTER, {
    ...payload,
  });

  return response.data;
};

function* handleLogin(action: any): Generator<any, any, any> {
  try {
    const response: {token: string; authentication: boolean; user: object} =
      yield call(calllogin, action.payload);

    if (response?.authentication) {
      yield put(loginSuccess(response));
    }
  } catch (error: any) {
    yield put(loginFail(error.message));
  }
}

function* handleRegister(action: any): Generator<any, any, any> {
  try {
    const response: {token: string; authentication: boolean; user: object} =
      yield call(callregister, action.payload);
    if (response?.authentication) {
      yield put(registerSuccess(response));
    }
  } catch (error: any) {
    yield put(registerFail(error.message));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN.REQUEST, handleLogin);
  yield takeEvery(SIGN_UP.REQUEST, handleRegister);
}

export default authSaga;
