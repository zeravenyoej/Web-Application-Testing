import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;


function App() {
  return (
    <div className="App">
      <Display/>
      <Dashboard/>
    </div>
  );
}

export default App;
