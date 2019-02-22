import React, { Component } from 'react';
import backspace from './backspace.svg';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { throws } from 'assert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '123+',
      entry: '0'
    }
  }

  handleButtonClick = (button) => {
    this.setState({
      entry: this.state.entry + button.toString()
    })
  }

  render() {
    return (
      <div className='calc-container'>
              <Input value={this.state.value} entry={this.state.entry}></Input>
              <Button handleButtonClick={this.handleButtonClick}>CE</Button>
              <Button handleButtonClick={this.handleButtonClick}>C</Button>
              <Button handleButtonClick={this.handleButtonClick}><img src={backspace} className='backspace' alt='backspace' /></Button>
              <Button handleButtonClick={this.handleButtonClick}>÷</Button>
              <Button handleButtonClick={this.handleButtonClick}>7</Button>
              <Button handleButtonClick={this.handleButtonClick}>8</Button>
              <Button handleButtonClick={this.handleButtonClick}>9</Button>
              <Button handleButtonClick={this.handleButtonClick}>×</Button>
              <Button handleButtonClick={this.handleButtonClick}>4</Button>
              <Button handleButtonClick={this.handleButtonClick}>5</Button>
              <Button handleButtonClick={this.handleButtonClick}>6</Button>
              <Button handleButtonClick={this.handleButtonClick}>-</Button>
              <Button handleButtonClick={this.handleButtonClick}>1</Button>
              <Button handleButtonClick={this.handleButtonClick}>2</Button>
              <Button handleButtonClick={this.handleButtonClick}>3</Button>
              <Button handleButtonClick={this.handleButtonClick}>+</Button>
              <Button handleButtonClick={this.handleButtonClick}>±</Button>
              <Button handleButtonClick={this.handleButtonClick}>0</Button>
              <Button handleButtonClick={this.handleButtonClick}>.</Button>
              <Button handleButtonClick={this.handleButtonClick}>=</Button>
      </div>
    );
  }
}

export default App;
