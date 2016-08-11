var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Controls = React.createClass({
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
    var {countdownStatus, breakSession, workSession, dispatch} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus ==='started'){
        return <button className="button secondary" onClick={() => {
            dispatch(actions.setStatus('paused'))
          }}>Pause</button>
      }else {
        return <button className="button primary" onClick={() => {
            dispatch(actions.setStatus('started'))
          }}>Start</button>
      }
    };


    return(
      <div className="controls">
        <button className="button alert hollow" onClick={() => {
            dispatch(actions.decrementBreakSession())
          }}>-</button> {this.props.breakSession} Break <button className="button alert hollow" onClick={() => {
            dispatch(actions.incrementBreakSession())
          }}>+</button>
        <button className="button alert hollow" onClick={() => {
            dispatch(actions.decrementWorkSession())
          }}>-</button> {this.props.workSession} Work <button className="button alert hollow" onClick={() => {
            dispatch(actions.incrementWorkSession())
          }}>+</button>
        <div>
          {renderStartStopButton()}
          <button className="button alert hollow" onClick={() => {
              dispatch(actions.setStatus('stopped'))
            }}>Clear</button>
        </div>

      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      countdownStatus: state.countdownStatus,
      breakSession: state.breakSession,
      workSession: state.workSession
    };
  }
)(Controls);
