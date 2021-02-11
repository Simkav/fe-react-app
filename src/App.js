import './App.css';
import AlohaDashboard from './components/AlohaDashboard';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <AlohaDashboard />
      </>
    );
  }
}
export default App;
