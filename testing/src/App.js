import React from 'react';
import logo from './logo.svg';
import './App.css';

export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid='react-docs-link'
        >
          LEARN REACT
        </a>
      </header>
    </div>
  );
}

export default App;
