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
} from '../actions/actionTypes';
import {colors} from '../../lib/colors';
import {DefaultGameValues, GameMoves} from '../../lib/constants';
import {AppTitles} from '../../lib/titles';
import {getRandomColor} from '../../utils/getRandomColor';

const initialState = {
  bird: 'bird6',
  rockPaper: {
    design: {
      backgroundColor: colors.default,
      color: colors.white,
      capsActive: false,
      glowColor: colors.white,
    },
    game: {
      userPlay: GameMoves.EMPTY,
      compPlay: GameMoves.EMPTY,
      result: '',
      username: AppTitles.DEFAULT_USER_TITLE,
      resultBg: {
        user: DefaultGameValues.WHITE_BG,
        comp: DefaultGameValues.WHITE_BG,
      },
      round: DefaultGameValues.ROUND,
      score: {
        user: DefaultGameValues.SCORE,
        comp: DefaultGameValues.SCORE,
      },
      moveVisible: false,
      helper: false,
    },
  },
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BIRD:
      return {
        ...state,
        bird: action.payload,
      };
    case ToggleCaps:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            capsActive: !state.rockPaper.design.capsActive,
          },
        },
      };
    case SetDefault:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: initialState.rockPaper.design.backgroundColor,
            color: initialState.rockPaper.design.color,
            glowColor: initialState.rockPaper.design.glowColor,
          },
        },
      };

    case SetRandom:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: getRandomColor(),
            color: getRandomColor(),
            glowColor: getRandomColor(),
          },
        },
      };
    case SetRed:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: colors.red,
            color: colors.white,
            glowColor: colors.white,
          },
        },
      };
    case SetOrange:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: colors.orange,
            color: colors.black,
            glowColor: colors.black,
          },
        },
      };
    case SetYellow:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: colors.yellow,
            color: colors.black,
            glowColor: colors.black,
          },
        },
      };
    case SetGreen:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: colors.green,
            color: colors.white,
            glowColor: colors.black,
          },
        },
      };

    case SetBlue:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: colors.blue,
            color: colors.black,
            glowColor: colors.black,
          },
        },
      };
    case SetPurple:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          design: {
            ...state.rockPaper.design,
            backgroundColor: colors.purple,
            color: colors.white,
            glowColor: colors.white,
          },
        },
      };
    // rockpaper
    case ToggleHelper:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            helper: action.payload,
          },
        },
      };
    case SetUsername:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            username: action.payload,
          },
        },
      };
    case SetCompPlay:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            compPlay: action.payload,
          },
        },
      };
    case SetUserPlay:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            userPlay: action.payload,
          },
        },
      };
    case SetVisible:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            moveVisible: action.payload,
          },
        },
      };
    case ClearMove:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            compPlay: GameMoves.EMPTY,
            userPlay: GameMoves.EMPTY,
            resultBg: {
              user: DefaultGameValues.WHITE_BG,
              comp: DefaultGameValues.WHITE_BG,
            },
            moveVisible: false,
          },
        },
      };
    case ClearMove:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            compPlay: GameMoves.EMPTY,
            userPlay: GameMoves.EMPTY,
            resultBg: {
              user: DefaultGameValues.WHITE_BG,
              comp: DefaultGameValues.WHITE_BG,
            },
            moveVisible: false,
          },
        },
      };
    case ResetGame:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            compPlay: GameMoves.EMPTY,
            userPlay: GameMoves.EMPTY,
            score: {
              user: DefaultGameValues.SCORE,
              comp: DefaultGameValues.SCORE,
            },
            resultBg: {
              user: DefaultGameValues.WHITE_BG,
              comp: DefaultGameValues.WHITE_BG,
            },
            round: DefaultGameValues.ROUND,
            moveVisible: false,
          },
        },
      };
    case UserWins:
      return {
        ...state,
        rockPaper: {
          ...state.rockPaper,
          game: {
            ...state.rockPaper.game,
            round: (state.rockPaper.game.round += DefaultGameValues.ROUND),
            score: {
              ...state.rockPaper.game.score,
              user: (state.rockPaper.game.score.user +=
                DefaultGameValues.ROUND),
            },
            result: AppTitles.RESULT_WIN,
            resultBg: {
              user: DefaultGameValues.GREEN_BG,
              comp: DefaultGameValues.RED_BG,
            },
          },
        },
      };
      case CompWins:
        return {
          ...state,
          rockPaper: {
            ...state.rockPaper,
            game: {
              ...state.rockPaper.game,
              round: (state.rockPaper.game.round += DefaultGameValues.ROUND),
              score: {
                ...state.rockPaper.game.score,
                comp: (state.rockPaper.game.score.comp +=
                  DefaultGameValues.ROUND),
              },
              result: AppTitles.RESULT_LOSE,
              resultBg: {
                user: DefaultGameValues.RED_BG,
                comp: DefaultGameValues.GREEN_BG,
              },
            },
          },
        };
        case Draw:
          return {
            ...state,
            rockPaper: {
              ...state.rockPaper,
              game: {
                ...state.rockPaper.game,
                round: (state.rockPaper.game.round += DefaultGameValues.ROUND),
                result: AppTitles.RESULT_DRAW,
                resultBg: {
                  user: DefaultGameValues.WHITE_BG,
                  comp: DefaultGameValues.WHITE_BG,
                },
              },
            },
          };
          case PlayNewGame:
            return {
              ...state,
              rockPaper: {
                ...state.rockPaper,
                game: {
                  ...state.rockPaper.game,
                  compPlay: GameMoves.EMPTY,
                  resultBg: {
                    user: DefaultGameValues.WHITE_BG,
                    comp: DefaultGameValues.WHITE_BG,
                  },
                  userPlay: action.payload,
                  moveVisible: false,
                },
              },
            };
    default:
      return state;
  }
};

export default gameReducer;
