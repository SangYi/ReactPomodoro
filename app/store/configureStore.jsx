var redux = require('redux');
// var {pomodoroReducer, countdownStatusReducer, sessionTypeReducer, breakSessionReducer, workSessionReducer, breakCountReducer, workCountReducer} = require('reducers');
var {pomodoroReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    pomodoro: pomodoroReducer,
    // countdownStatus: countdownStatusReducer,
    // sessionType: sessionTypeReducer,
    // breakSession: breakSessionReducer,
    // workSession: workSessionReducer,
    // breakCount: breakCountReducer,
    // workCount: workCountReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
