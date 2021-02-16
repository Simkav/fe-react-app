import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
  }

  tick = () => {
    const { time } = this.state;
    time.setSeconds(time.getSeconds() + 1);
    this.setState({ time });
  };

  timeOutTick = () => {
    this.timeoutId = setTimeout(this.tick, 1000);
  };

  start = () => {
    console.log(this.timeoutId);
    if (!this.timeoutId) {
      this.timeOutTick();
    }
  };

  componentDidUpdate() {
    console.log(this.timeoutId);

    if (this.timeoutId) {
      this.timeOutTick();
    }
  }

  stop = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    this.timeoutId = null;
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString('it-IT')}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
