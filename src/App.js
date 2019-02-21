import React, { Component } from 'react';
import backspace from './backspace.svg';
import './App.css';
import Calculator from './Calculator';
import Button from './components/Button';
import Input from './components/Input';
 
class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='calculator'>
          <div className='calc-background'>
            <div className='row input-row'>
              <Input></Input>
            </div>
            <div className='row first-row'>
              <Button>CE</Button>
              <Button>C</Button>
              <Button><img src={backspace} className='backspace' alt='backspace'/></Button>
              <Button>÷</Button>
            </div>
            <div className='row second-row'>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>×</Button>
            </div>
            <div className='row third-row'>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
            </div>
            <div className='row fourth-row'>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
            </div>
            <div className='row fifth-row'>
              <Button>±</Button>
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
