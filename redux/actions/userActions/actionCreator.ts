import * as actions from '../userActions/actionTypes';

export function setLogin(login: string): actions.SetLoginAction {
  return {
    type: actions.LOGIN,
    login,
  };
}
