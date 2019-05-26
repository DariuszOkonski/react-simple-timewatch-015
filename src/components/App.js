import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import DisplayResult from './DisplayResult';
import ButtonsController from './ButtonsController';

class App extends Component {
  intervalIndex = null;

  state = {
    timer: 0,
    start: true,
  }

  handleStartStop = () => {
    if (this.state.start) {
      this.intervalIndex = setInterval(() => {
        this.setState(prevState => ({
          timer: prevState.timer + 1,
        }))
      }, 1000);

      this.setState({
        start: false,
      })
    } else {
      clearInterval(this.intervalIndex);
      this.setState({
        start: true,
      })
    }
  }

  handleReset = () => {
    clearInterval(this.intervalIndex);
    this.setState({
      timer: 0,
      start: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayResult
          timer={this.state.timer}
        />
        <ButtonsController
          start={this.state.start}
          clickStartStop={this.handleStartStop}
          clickReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;