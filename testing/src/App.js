import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;


function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
