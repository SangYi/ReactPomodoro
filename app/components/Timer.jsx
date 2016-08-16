var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// var Clock = require('Clock');
// var Controls = require('Controls');
import Clock from 'Clock';
import Controls from 'Controls';

export var Timer = React.createClass({
  // getInitialState: function (){
  //   return {
  //     countdownStatus: 'stopped',
  //     breakSession: 5,
  //     workSession: 25,
  //     breakCount: 300,
  //     workCount: 1500,
  //     sessionType: 'work'
  //
  //   };
  // },

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
          // this.setState({
          //   breakCount: this.state.breakSession*60,
          //   workCount: this.state.workSession*60,
          //   sessionType: 'work'
          // });
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
      // var{sessionType} = this.state;
      var{pomodoro} = this.props;

      if(pomodoro.sessionType==="work"){
        // var newCount = this.state.workCount - 1;
        // this.setState({
        //   workCount: newCount >= 0 ? newCount : 0
        // });
          dispatch(actions.decrementWorkCount());

        if (pomodoro.workCount === 0) {
          // this.setState({sessionType: 'break',workCount: this.state.workSession*60});
          dispatch(actions.setStatus("break"));
          dispatch(actions.setWorkCount(pomodoro.workSession * 60))
        }
      }

      if(pomodoro.sessionType==="break"){
        // var newCount = this.state.breakCount - 1;
        // this.setState({
        //   breakCount: newCount >= 0 ? newCount : 0
        // });
        dispatch(actions.decrementBreakCount());

        if (pomodoro.breakCount === 0) {
          // this.setState({sessionType: 'work',breakCount: this.state.breakSession*60});
          dispatch(actions.setStatus("work"));
          dispatch(actions.setBreakCount(pomodoro.breakSession * 60))
        }
      }
    },100);
  },

  // handleSetCountdown: function (seconds){
  //   this.setState({
  //     count: seconds,
  //     countdownStatus: 'started'
  //   });
  // },
  //
  // handleStatusChange: function (newStatus){
  //   this.setState({
  //     countdownStatus: newStatus
  //   })
  // },
  //
  // handleBreakChange: function(newBreakTime){
  //   if(newBreakTime>0){
  //     this.setState({
  //       breakSession:newBreakTime,
  //       breakCount: newBreakTime*60
  //     });
  //   }
  // },
  //
  // handleWorkChange: function(newWorkTime){
  //   if(newWorkTime){
  //     this.setState({
  //       workSession:newWorkTime,
  //       workCount: newWorkTime*60
  //     });
  //   }
  // },

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
