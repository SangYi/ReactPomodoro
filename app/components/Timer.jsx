let React = require('react');

let Clock = require('Clock');
let Controls = require('Controls');

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breakSession: 5,
      workSession: 25
    };

  }

  handleBreakChange = (newBreakTime) => {
    this.setState({breakSession:newBreakTime});
  }

  handleWorkChange = (newWorkTime) => {
    this.setState({workSession:newWorkTime});
  }

  render = () => {
    console.log(this.state);
    return(

      <div>
        <p>Pomo Timer</p>
        <Clock />
        <Controls {...this.state} onBreakChange={this.handleBreakChange} onWorkChange={this.handleWorkChange}/>
      </div>
    )
  }
}

module.exports= Timer;
