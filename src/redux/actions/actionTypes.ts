const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';

export const createRequestTypes = (base: any) => ({
  [REQUEST]: `${base}_${REQUEST}`,
  [SUCCESS]: `${base}_${SUCCESS}`,
  [FAIL]: `${base}_${FAIL}`,
});

export const LOGOUT = 'LOGOUT';
export const LOGIN = createRequestTypes('LOGIN');





export const SET_BIRD = 'SET_BIRD';
