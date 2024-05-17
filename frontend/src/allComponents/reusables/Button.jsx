import React from 'react';
import './reUsableStyles.css';

const Button = (props) => {
    const {text,style,handleClick} = props;
    
  return (
    <button  onClick={handleClick} style={style} className='reUsableBtn'>{text}</button>
  )
}

export default Button;