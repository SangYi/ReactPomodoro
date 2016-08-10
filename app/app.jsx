var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var PomodoroApp = require('PomodoroApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

// Load foundations-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <PomodoroApp />
  </Provider>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <PomodoroApp test="test props"/>,
//   document.getElementById('app')
// );
