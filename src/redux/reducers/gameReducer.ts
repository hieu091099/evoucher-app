import {SET_BIRD} from '../actions/actionTypes';

const initialState = {
  bird: 'bird5',
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BIRD:
      return {
        ...state,
        bird: action.payload,
      };


    default:
      return state;
  }
};

export default gameReducer;
