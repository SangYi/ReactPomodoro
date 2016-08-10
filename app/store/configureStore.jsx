var redux = require('redux');
var {countdownStatusReducer, sessionTypeReducer, breakSessionReducer, workSessionReducer, breakCountReducer, workCountReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    countdownStatus: countdownStatusReducer,
    sessionType: sessionTypeReducer,
    breakSession: breakSessionReducer,
    workSession: workSessionReducer,
    breakCount: breakCountReducer,
    workCount: workCountReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
