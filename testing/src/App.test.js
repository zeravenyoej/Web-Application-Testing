import React from 'react';
import { render } from '@testing-library/react';
import App, { sum, subtract } from './App';

//test the sum 'unit' function
test('it returns the sum of two numbers', ()=> {
  expect(sum(2, 2)).toBe(4);
  expect(sum(3, 5)).toBe(8);
})

test('it returns the difference of two numbers', ()=>{
  expect(subtract(5,3)).toBe(2);
})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders without crashing', () => {
  render(<App />);
});

test('it displays a link with the text Learn React', () => {
  const { getByText } = render(<App/>);
  //the i means that it's case insensitive 
  getByText(/learn react/i);
});
