var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Controls = React.createClass({


  render: function(){
  
    var {pomodoro, dispatch} = this.props;

    var renderStartStopButton = () => {
      if(pomodoro.countdownStatus ==='started'){
        return <button className="button secondary" onClick={() => {
            dispatch(actions.setCountdownStatus('paused'));
          }}>Pause</button>
      }else {
        return <button className="button primary" onClick={() => {
            dispatch(actions.setCountdownStatus('started'));
          }}>Start</button>
      }
    };


    return(
      <div className="controls">
        <button className="button alert hollow" onClick={() => {
            if(pomodoro.breakSession>1){
              dispatch(actions.decrementBreakSession());
            }
          }}>-</button> {pomodoro.breakSession} Break <button className="button alert hollow" onClick={() => {
            dispatch(actions.incrementBreakSession());
          }}>+</button>
        <button className="button alert hollow" onClick={() => {
            if(pomodoro.workSession>1){
              dispatch(actions.decrementWorkSession());
            }
          }}>-</button> {pomodoro.workSession} Work <button className="button alert hollow" onClick={() => {
            dispatch(actions.incrementWorkSession());
          }}>+</button>
        <div>
          {renderStartStopButton()}
          <button className="button alert hollow" onClick={() => {
              dispatch(actions.setCountdownStatus('stopped'))
            }}>Clear</button>
        </div>

      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Controls);
