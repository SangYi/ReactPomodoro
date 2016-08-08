var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function(){
    totalSeconds:0
  },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds/60);
    if(seconds<10){
      seconds = '0'+ seconds;
    }

    if(minutes<10){
      minutes = '0'+ minutes;
    }

    return minutes +':'+ seconds;
  },


  render: function(){
    var {totalSeconds, sessionType} = this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
          {sessionType}
        </span>
      </div>
    )
  }
});

module.exports = Clock;

// let React = require('react');
//
// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       totalSeconds: 0
//     };
//
//   }
//
//   formatSeconds = (totalMinutes) => {
//      let totalSeconds = totalMinutes*60;
//      let seconds = totalSeconds%60;
//      let minutes = Math.floor(totalSeconds/60);
//      if(seconds < 10){
//        seconds = '0'+seconds;
//      }
//      if(minutes <10){
//        minutes = '0'+minutes;
//      }
//      return minutes +':'+ seconds;
//   }
//
//   onStatusChange = (newStatus) => {
//     this.props.onStatusChange(newStatus);
//   }
//
//   render = () => {
//     let {workSession, breakSession} = this.props;
//
//     return(
//       <div>
//         <p>Pomo Clock</p>
//         {this.formatSeconds(workSession)}
//       </div>
//     )
//   }
// }
//
// module.exports= Clock;
