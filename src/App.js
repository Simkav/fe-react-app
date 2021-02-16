import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

function App(props) {
  return (
    <>
      <Counter step={1} />
    </>
  );
}

export default App;
