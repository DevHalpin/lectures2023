/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from '../App';
import { fireEvent, render } from '@testing-library/react'

// it('renders without crashing', () => { 
//   const div = document.createElement('div');
//   const root = ReactDOM.createRoot(div);
//   root.render(<App />);
// });

it('change cheat state when clicking on robot', ()=> {
  const {getByTestId} = render(<App/>)
  const robotIcon = getByTestId('robot-icon')

  fireEvent.click(robotIcon)
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(robotIcon)
  expect(robotIcon).not.toHaveClass('cheating');
});