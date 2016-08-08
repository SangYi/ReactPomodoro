var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  onBreakChange: function(newBreak){
    return ()=> {
      // this.setState({breakSession:newBreak});
      this.props.onBreakChange(newBreak);
    };
  },

  onWorkChange: function(newWork){
    return ()=> {
      // this.setState({breakSession:newBreak});
      this.props.onWorkChange(newWork);
    };
  },

  render: function(){
    var {countdownStatus, breakSession, workSession} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus ==='started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };


    return(
      <div className="controls">
        <button className="button alert hollow" onClick={this.onBreakChange(breakSession-1)}>-</button> {this.props.breakSession} <button className="button alert hollow" onClick={this.onBreakChange(breakSession+1)}>+</button>
        <button className="button alert hollow" onClick={this.onWorkChange(workSession-1)}>-</button> {this.props.workSession} <button className="button alert hollow" onClick={this.onWorkChange(workSession+1)}>+</button>
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;

// let React = require('react');
//
// class Controls extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("in constructor", this.props);
//     this.state ={...this.props}
//
//
//   }
//
//
//   onBreakChange = (newBreak) => {
//     return ()=> {
//       // this.setState({breakSession:newBreak});
//       this.props.onBreakChange(newBreak);
//     };
//   }
//
//   onWorkChange = (newWork) => {
//     return ()=> {
//       // this.setState({breakSession:newBreak});
//       this.props.onWorkChange(newWork);
//     };
//   }
//
//   render = () => {
//     let {breakSession, workSession} = this.props;
//     return(
//
//
//       <div>
//         <p>Pomo Controls</p>
//         <button className="button alert hollow" onClick={this.onBreakChange(breakSession-1)}>-</button> {this.props.breakSession} <button className="button alert hollow" onClick={this.onBreakChange(breakSession+1)}>+</button>
//         <button className="button alert hollow" onClick={this.onWorkChange(workSession-1)}>-</button> {this.props.workSession} <button className="button alert hollow" onClick={this.onWorkChange(workSession+1)}>+</button>
//       </div>
//     );
//   }
// }
//
// module.exports= Controls;
