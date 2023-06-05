const {combineReducers} = require('redux');

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
