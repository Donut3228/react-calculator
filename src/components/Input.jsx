import React from 'react';
import './Input.css';

const Input = (props) => (
    <div className='input-wrapper'>
        <div className='display-prev'>{props.value}</div>
        <div className='display-cur'>{props.entry}</div>
    </div>
)

export default Input;