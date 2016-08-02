var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// var TodoApp = require('TodoApp');
var PomodoroApp = require('PomodoroApp');

// import PomodoroApp from 'PomodoroApp';
// Load foundations-sites
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// ReactDOM.render(
//   <TodoApp />,
//   document.getElementById('app')
// );
ReactDOM.render(
  <PomodoroApp test="test props"/>,
  document.getElementById('app')
);
