/**
 * React Button Toggle
 * We provided some simple React template code. Your goal is to modify the component so that you can properly toggle the button to switch between an ON state and an OFF state. When the button is on and it is clicked, it turns off and the text within it changes from ON to OFF and vice versa. Make use of component state for this challenge.
 * You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output.
 * 
 * gf7gmBzRwT6QCmR
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Toggle = () => {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState(!state);
  }

  const ToggleStyle = {
    position: 'relative',
    width:'60px',
    height: '35px',
    backgroundColor: state ? '#2196f3' : '#ccc',
    transition: '.4s',
    borderRadius: '34px',
    border: 'none',
  }

  const SpanStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    content: state ? 'ON' : 'OFF',
    height: '26px',
    width: '26px',
    left: state ? '4px' : '30px',
    bottom: '4px',
    backgroundColor: '#fff',
    transition: '.4s',
    borderRadius: '50%',
    fontSize: '10px',
  }
  
  return (
    <button style={ToggleStyle} onClick={handleClick}>
      <span style={SpanStyle}>{state ? 'ON' : 'OFF'}</span>
    </button>
  );

}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);