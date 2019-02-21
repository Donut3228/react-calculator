import React from 'react';
import './Button.css';

const Button = (props) => (
    <div className='button-wrapper'>{props.children}</div>
)

export default Button;