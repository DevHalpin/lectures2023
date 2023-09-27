import React from 'react';
import App from '../App'
import {fireEvent, render,screen, prettyDOM} from '@testing-library/react'

describe('robotHead tests', () => {
  test('change cheat state when clicking on the robot head', () => {
    const {container, debug} = render(<App/>);
    
    const robotIcon = screen.getByTestId('robot-icon')
    // debug()

    fireEvent.click(robotIcon);
    expect(robotIcon).toHaveClass('cheating');

    // console.log(prettyDOM(container))
    

    fireEvent.click(robotIcon);
    expect(robotIcon).not.toHaveClass('cheating');
  })
})