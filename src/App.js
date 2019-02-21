import React, { Component } from 'react';
import logo from './logo.svg';
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
            <div className='row'>
              <Input></Input>
            </div>
            <div className='row'>
              <Button>CE</Button>
              <Button>C</Button>
              <Button>BS</Button>
              <Button>÷</Button>
            </div>
            <div className='row'>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>×</Button>
            </div>
            <div className='row'>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
            </div>
            <div className='row'>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
            </div>
            <div className='row'>
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
