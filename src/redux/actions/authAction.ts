import {LOGIN, LOGOUT, SIGN_UP} from './actionTypes';

export const loginRequest = (payload: object) => {
  return {
    type: LOGIN.REQUEST,
    payload,
  };
};

export const loginSuccess = (payload: object) => {
  return {
    type: LOGIN.SUCCESS,
    payload,
  };
};

export const loginFail = (payload: object) => {
  return {
    type: LOGIN.FAIL,
    payload,
  };
};

export const registerRequest = (payload: object) => {
  return {
    type: SIGN_UP.REQUEST,
    payload,
  };
};

export const registerSuccess = (payload: object) => {
  return {
    type: SIGN_UP.SUCCESS,
    payload,
  };
};

export const registerFail = (payload: object) => {
  return {
    type: SIGN_UP.FAIL,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
