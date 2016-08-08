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
      breakCount: 300,
      workCount: 1500,
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
          this.setState({
            breakCount: this.state.breakSession*60,
            workCount: this.state.workSession*60,
            sessionType: 'work'
          });
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
    if(newBreakTime>0){
      this.setState({
        breakSession:newBreakTime,
        breakCount: newBreakTime*60
      });
    }
  },

  handleWorkChange: function(newWorkTime){
    if(newWorkTime){
      this.setState({
        workSession:newWorkTime,
        workCount: newWorkTime*60
      });
    }
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
        <h3 className="page-title">Pomodoro App</h3>
        {renderClock()}
        <Controls {...this.state} onStatusChange={this.handleStatusChange} onBreakChange={this.handleBreakChange} onWorkChange={this.handleWorkChange}/>

      </div>
    )
  }
});
module.exports = Timer;
