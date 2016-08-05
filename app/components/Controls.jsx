let React = require('react');

class Controls extends React.Component{
  constructor(props){
    super(props);
    console.log("in constructor", this.props);
    this.state ={...this.props}


  }


  onBreakChange = (newBreak) => {
    return ()=> {
      // this.setState({breakSession:newBreak});
      this.props.onBreakChange(newBreak);
    };
  }

  onWorkChange = (newWork) => {
    return ()=> {
      // this.setState({breakSession:newBreak});
      this.props.onWorkChange(newWork);
    };
  }

  render = () => {
    let {breakSession, workSession} = this.props;
    return(


      <div>
        <p>Pomo Controls</p>
        <button className="button alert hollow" onClick={this.onBreakChange(breakSession-1)}>-</button> {this.props.breakSession} <button className="button alert hollow" onClick={this.onBreakChange(breakSession+1)}>+</button>
        <button className="button alert hollow" onClick={this.onWorkChange(workSession-1)}>-</button> {this.props.workSession} <button className="button alert hollow" onClick={this.onWorkChange(workSession+1)}>+</button>
      </div>
    );
  }
}

module.exports= Controls;
