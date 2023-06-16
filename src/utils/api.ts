import {BACKEND_APP_API_URL} from '@env';
const API_ROOT =  'http://localhost:3001' || BACKEND_APP_API_URL 
const API = {
  DASHBOARD: `${API_ROOT}/dashboard`,
  AUTH: {
    LOGIN: `${API_ROOT}/users/login`,
    REGISTER: `${API_ROOT}/users/register`,
    CHANGE_PASSWORD: `${API_ROOT}/changePassword/`,
    FORGOT_PASSWORD: `${API_ROOT}/forgetPassword`,
    FORGOT_PASSWORD_VERIFY_OTP: `${API_ROOT}/forgetPassword/verifyOtp`,
    RESET_PASSWORD: `${API_ROOT}/forgetPassword/resetPassword`,
  },
};

export default API;
