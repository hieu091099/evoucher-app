import { LOGIN, LOGOUT } from './actionTypes';

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


export const logout = () => {
  return {
    type: LOGOUT,
  };
};

