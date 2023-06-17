import {
  SET_BIRD,
  ToggleCaps,
  SetDefault,
  SetRandom,
  SetRed,
  SetOrange,
  SetYellow,
  SetBlue,
  SetPurple,
  SetGreen,
  ToggleHelper,
  SetUsername,
  SetCompPlay,
  SetUserPlay,
  SetVisible,
  ClearMove,
  ResetGame,
  UserWins,
  CompWins,
  Draw,
  PlayNewGame,
} from './actionTypes';
export const setBird = (payload: any) => {
  return {
    type: SET_BIRD,
    payload,
  };
};
// design rockpaper
export const toggleCaps = () => {
  return {
    type: ToggleCaps,
  };
};

export const setDefault = () => {
  return {
    type: SetDefault,
  };
};

export const setRandom = () => {
  return {
    type: SetRandom,
  };
};

export const setRed = () => {
  return {
    type: SetRed,
  };
};

export const setOrange = () => {
  return {
    type: SetOrange,
  };
};

export const setYellow = () => {
  return {
    type: SetYellow,
  };
};

export const setGreen = () => {
  return {
    type: SetGreen,
  };
};

export const setBlue = () => {
  return {
    type: SetBlue,
  };
};

export const setPurple = () => {
  return {
    type: SetPurple,
  };
};

// game rockpaper
export const toggleHelper = (payload: any) => {
  return {
    type: ToggleHelper,
    payload,
  };
};

export const setUsername = (payload: any) => {
  return {
    type: SetUsername,
    payload,
  };
};

export const setCompPlay = (payload: any) => {
  return {
    type: SetCompPlay,
    payload,
  };
};

export const setUserPlay = (payload: any) => {
  return {
    type: SetUserPlay,
    payload,
  };
};

export const setVisible = (payload: any) => {
  return {
    type: SetVisible,
    payload,
  };
};

export const clearMove = () => {
  return {
    type: ClearMove,
  };
};

export const resetGame = () => {
  return {
    type: ResetGame,
  };
};

export const userWins = () => {
  return {
    type: UserWins,
  };
};

export const compWins = () => {
  return {
    type: CompWins,
  };
};
export const draw = () => {
  return {
    type: Draw,
  };
};
export const playNewGame = (payload: any) => {
  return {
    type: PlayNewGame,
    payload,
  };
};
