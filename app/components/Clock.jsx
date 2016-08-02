let React = require('react');

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      totalSeconds: 0
    };
  }

  formatSeconds = (totalSeconds) => {
     let seconds = totalSeconds%60;
     let minutes = Math.floor(totalSeconds/60);
     if(seconds < 10){
       seconds = '0'+seconds;
     }
     if(minutes <10){
       minutes = '0'+minutes;
     }
     return minutes +':'+ seconds;
  }
  render = () => {
    return(
      <div>
        <p>Pomo Clock</p>
        {this.formatSeconds(100)}
      </div>
    )
  }
}

module.exports= Clock;