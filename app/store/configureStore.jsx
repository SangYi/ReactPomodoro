var redux = require('redux');
// var {reducers} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({

  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
