import { LOGIN, LOGOUT } from './actionTypes';

export const login = (payload: object) => {
  return {
    type: LOGIN.REQUEST,
    payload,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

