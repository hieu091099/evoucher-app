import { SET_BIRD } from './actionTypes';

export const setBird = (payload: any) => {
  return {
    type: SET_BIRD,
    payload,
  };
};


