// import React from 'react';
let React = require('react');

let Timer = require('Timer');

class PomodoroApp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        completed: false
      };


  }


  render = () => {

    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <Timer />
        </div>
      </div>
    )
  }
}

// var PomodoroApp = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <p>Pomo from app</p>
//       </div>
//     )
//   }
// });

module.exports = PomodoroApp;
