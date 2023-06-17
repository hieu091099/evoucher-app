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
export const ToggleCaps = 'toggleCaps';
export const SetDefault = 'setDefault';
export const SetRandom = 'setRandom';
export const SetRed = 'setRed';
export const SetOrange = 'setOrange';
export const SetYellow = 'setYellow';
export const SetGreen = 'setGreen';
export const SetBlue = 'setBlue';
export const SetPurple = 'setPurple';

export const ToggleHelper = 'ToggleHelper'
export const SetUsername = 'SetUsername';
export const SetCompPlay = 'SetCompPlay';
export const SetUserPlay = 'SetUserPlay';
export const SetVisible = 'SetVisible';
export const ClearMove = 'ClearMove';
export const ResetGame = 'ResetGame';
export const UserWins = 'UserWins';
export const CompWins = 'CompWins';
export const Draw = 'Draw';
export const PlayNewGame = 'PlayNewGame';
