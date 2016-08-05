let React = require('react');

let Clock = require('Clock');
let Controls = require('Controls');

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breakSession: 5,
      workSession: 25,
      breakCount: undefined,
      workCount: undefined,
      sessionType: 'work',
      timerStatus: 'stopped'
    };

  }

  componentDidUpdate (prevProps, prevState) {
    console.log("prevState",prevState);
    // if(this.state.countdownStatus !== prevState.countdownStatus) {
    //   switch(this.state.countdownStatus){
    //     case 'started':
    //       this.startTimer();
    //       break;
    //     case 'stopped':
    //       this.setState({count: 0});
    //     case 'paused':
    //       clearInterval(this.timer);
    //       this.timer = undefined;
    //       break;
    //   }
    // }
  }

  handleBreakChange = (newBreakTime) => {
    this.setState({breakSession:newBreakTime});
  }

  handleWorkChange = (newWorkTime) => {
    this.setState({workSession:newWorkTime});
  }

  startTimer = () => {
    this.timer = setInterval()
  }

  render = () => {
    console.log(this.state);
    return(

      <div>
        <p>Pomo Timer</p>
        <Clock {...this.state}/>
        <Controls {...this.state} onBreakChange={this.handleBreakChange} onWorkChange={this.handleWorkChange}/>
      </div>
    )
  }
}

module.exports= Timer;
