export const LOGIN = 'lyricsActionTypes/LOGIN';
export interface SetLoginAction {
  type: typeof LOGIN;
  login: string;
}
export type LoginAction = SetLoginAction;
