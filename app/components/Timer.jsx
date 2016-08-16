var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// var Clock = require('Clock');
// var Controls = require('Controls');
import Clock from 'Clock';
import Controls from 'Controls';

export var Timer = React.createClass({

  componentDidUpdate: function (prevProps, prevState) {
    var {pomodoro, dispatch} = this.props;
    // console.log(pomodoro.countdownStatus, prevProps.countdownStatus);
    // console.log('prevProps',prevProps);
    if(pomodoro.countdownStatus !== prevProps.pomodoro.countdownStatus) {
      switch(pomodoro.countdownStatus){
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          dispatch(actions.resetSettings());

        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },

  // componentWillUnmount: function(){
  //
  //   clearInterval(this.timer);
  //   this.timer = undefined;
  // },

  startTimer(){
    var {dispatch} = this.props;

    this.timer = setInterval(() => {
      var{pomodoro} = this.props;

      if(pomodoro.sessionType==="work"){

          dispatch(actions.decrementWorkCount());

        if (pomodoro.workCount === 0) {

          dispatch(actions.setSessionType("break"));
          dispatch(actions.setWorkCount(pomodoro.workSession))
        }
      }

      if(pomodoro.sessionType==="break"){

        dispatch(actions.decrementBreakCount());

        if (pomodoro.breakCount === 0) {

          dispatch(actions.setSessionType("work"));
          dispatch(actions.setBreakCount(pomodoro.breakSession))
        }
      }
    },1000);
  },

  render: function(){
    console.log(this.props);

    // var {breakCount, workCount, countdownStatus, sessionType, dispatch} = this.state;
    var {pomodoro, dispatch} = this.props;

    var renderClock = () => {
      if(pomodoro.sessionType === 'work'){
        return <Clock totalSeconds={pomodoro.workCount} sessionType={pomodoro.sessionType}/>
      }else if(pomodoro.sessionType ==='break'){
        return <Clock totalSeconds={pomodoro.breakCount} sessionType={pomodoro.sessionType}/>
      }
    };

    return(
      <div>
        <h3 className="page-title">Pomodoro App</h3>
        {renderClock()}
        <Controls/>

      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Timer);
