import {LOGIN, LOGOUT} from '../actions/actionTypes';
import {setAuthToken} from '../../utils/axios';

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  account: {
    accessToken: '',
    refreshToken: '',
    user: {},
  },
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
      };

    case LOGIN.SUCCESS: {
      const result = action.payload;
      setAuthToken(action.payload?.token?.accessToken || '');
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        account: {
          accessToken: result?.token,
          user: {...result?.user},
        },
      };
    }
    case LOGIN.FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        errorMsg: action.result,
      };

    case LOGOUT:
      setAuthToken('');
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        account: null,
      };
    default:
      return state;
  }
};

export default authReducer;
