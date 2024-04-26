// Button.js
import React from 'react';

function Button({ onClick, text }) {
  return (
    <button className=' text-white text-lg font-extrabold ' onClick={onClick}>{text}</button>
  );
}

export default Button;
