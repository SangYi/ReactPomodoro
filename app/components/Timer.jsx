var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function (){
    return {
      count: 0,
      countdownStatus: 'stopped',
      breakSession: 5,
      workSession: 25,
      breakCount: undefined,
      workCount: undefined,
      sessionType: 'work'

    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
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

    this.timer = setInterval(() => {
    var{sessionType} = this.state;

    if(sessionType==="work"){
      var newCount = this.state.workCount - 1;
      this.setState({
        workCount: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({sessionType: 'break',workCount: this.state.workSession*60});
      }

    }

    if(sessionType==="break"){
      var newCount = this.state.breakCount - 1;
      this.setState({
        breakCount: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({sessionType: 'work',breakCount: this.state.breakSession*60});
      }

    }


      // var newCount;
      // if(sessionType==='work'){
      //   newCount = this.state.workCount - 1;
      // }else if(sessionType==='break'){
      //   newCount = this.state.breakCount - 1;
      // }
      // this.setState({
      //   count: newCount >= 0 ? newCount : 0
      // });
      //
      // if (newCount === 0 && sessionType === 'work') {
      //   this.setState({sessionType: 'break'});
      // }else if(newCount === 0 && sessionType === 'work'){
      //   this.setState({sessionType: 'work'});
      // }

      // if (newCount === 0) {
      //   this.setState({countdownStatus: 'stopped'});
      // }
    },1000);
  },

  handleSetCountdown: function (seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChange: function (newStatus){
    this.setState({
      countdownStatus: newStatus
    })
  },

  handleBreakChange: function(newBreakTime){
    this.setState({
      breakSession:newBreakTime,
      breakCount: newBreakTime*60

    });
  },

  handleWorkChange: function(newWorkTime){
    this.setState({
      workSession:newWorkTime,
      workCount: newWorkTime*60
    });
  },

  render: function(){

    var {breakCount, workCount, countdownStatus, sessionType} = this.state;

    var renderClock = () => {
      if(this.state.sessionType === 'work'){
        return <Clock totalSeconds={workCount} sessionType={sessionType}/>
      }else if(this.state.sessionType ==='break'){
        return <Clock totalSeconds={breakCount} sessionType={sessionType}/>
      }
    };

    return(
      <div>
        <h3 className="page-title">Countdown App</h3>
        {renderClock()}
        <Controls {...this.state} onStatusChange={this.handleStatusChange} onBreakChange={this.handleBreakChange} onWorkChange={this.handleWorkChange}/>



      </div>
    )
  }
});
module.exports = Timer;


// let React = require('react');
//
// let Clock = require('Clock');
// let Controls = require('Controls');
//
// class Timer extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       breakSession: 5,
//       workSession: 25,
//       breakCount: undefined,
//       workCount: undefined,
//       sessionType: 'work',
//       timerStatus: 'stopped'
//     };
//
//   }
//
//   componentDidUpdate (prevProps, prevState) {
//     console.log("prevState",prevState);
//     if(this.state.timerStatus !== prevState.timerStatus) {
//       switch(this.state.timerStatus){
//         case 'started':
//           this.startTimer();
//           break;
//         case 'stopped':
//           this.setState({breakCount: 0, workCount:0});
//         case 'paused':
//           clearInterval(this.timer)
//           this.timer = undefined;
//           break;
//       }
//     }
//   }
//
//   handleBreakChange = (newBreakTime) => {
//     this.setState({breakSession:newBreakTime});
//   }
//
//   handleWorkChange = (newWorkTime) => {
//     this.setState({workSession:newWorkTime});
//   }
//
//   handleTimerStatus = (newStatus) => {
//     this.setState({timerStatus:newStatus});
//   }
//
//   startTimer = () => {
//     this.setState({
//       breakCount:this.state.breakSession*60,
//       workCount: this.state.workSession*60
//     })
//     this.timer = setInterval(() => {
//
//     },1000)
//   };
//
//
//   render = () => {
//
//     console.log(this.state);
//     return(
//
//       <div>
//         <p>Pomo Timer</p>
//         <Clock {...this.state} onStatusChange={this.handleTimerStatus}/>
//         <Controls {...this.state} onBreakChange={this.handleBreakChange} onWorkChange={this.handleWorkChange}/>
//       </div>
//     )
//   }
// }
//
// module.exports= Timer;
