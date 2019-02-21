import React, { Component } from 'react';
import './App.css';
import backspace from './backspace.svg'
import { throws } from 'assert';


function Tile(props) {
    return (
        <div onClick={() => props.handleClick(props.tileKey)} className={props.tileKey + ' buttonProp'} >
            <div>{props.tileValue !== backspace ? props.tileValue:
                <img src={backspace} alt='backspace' className='backspaceButton' />} </div> 
        </div>
    )
}

function Display(props) {
    return (
        <div className='display'>
            <div className='displayPrev'><div>{props.value}</div></div>
            <div className='displayCurrent'><div>{props.entry}</div></div>
        </div>
    )
}
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: {
                one: '1',
                two: '2',
                three: '3',
                four: '4',
                five: '5',
                six: '6',
                seven: '7',
                eight: '8',
                nine: '9',
                zero: '0',
                plusminus: '±',
                divide: '÷',
                multiply: '×',
                plus: '+',
                minus: '-',
                clearEntry: 'CE',
                clear: 'C',
                equal: '=',
                dot: '.',
                backspace: backspace,
            },
            value: '',
            entry: '0',
            currentOperation: '',
        }
    }

    handleClick = (action) => {
        switch (action) {
            case 'clearEntry':
                this.setState({
                    entry: '0'
                })
                break;
            case 'clear':
                this.setState({
                    value: '',
                    entry: '0'
                })
                break;
            case 'backspace':
                this.setState({
                    entry: this.state.entry === '0' || this.state.entry.length === 1 ? '0' : this.state.entry.slice(0, -1)
                })
                break;
            case 'dot':
                this.setState({
                    entry: this.state.entry.includes('.') ? this.state.entry : this.state.entry + '.'
                })
                break;
            case 'multiply':
                this.setState({
                    value: this.state.entry + ' × ',
                    currentOperation: 'multiply'
                })
                break;
            case 'divide':
                this.setState({
                    value: this.state.entry + ' ÷ ',
                    currentOperation: 'divide'
                })
                break;
            case 'minus':
                this.setState({
                    value: this.state.entry + ' - ',
                    currentOperation: 'minus'
                })
                break;
            case 'plus':
                this.setState({
                    value: this.state.entry + ' + ',
                    currentOperation: 'plus'
                })
                break;
            case 'plusminus':
                this.setState({
                    entry: this.state.entry === '0' || this.state.entry === '0.' ? this.state.entry 
                    : this.state.entry.includes('-') ? this.state.entry.slice(1) : '-' + this.state.entry
                })
                break;
            case 'equal':
                this.setState({
                    value: this.state.value + this.state.entry,
                    entry: this.state.currentOperation === 'plus' 
                    ? parseFloat(this.state.value.slice(0, -2)) + parseFloat(this.state.entry) 
                    : this.state.currentOperation === 'divide' 
                    ? parseFloat(this.state.value.slice(0, -2)) / parseFloat(this.state.entry) 
                    : this.state.currentOperation === 'multiply' 
                    ? parseFloat(this.state.value.slice(0, -2)) * parseFloat(this.state.entry) :
                    parseFloat(this.state.value.slice(0, -2)) - parseFloat(this.state.entry)
                })
                break;
            default:
                this.setState({
                    entry: this.state.entry === '0' ? this.state.tiles[action] 
                    : this.state.entry === this.state.value.slice(0, -3) ? '' + this.state.tiles[action] 
                    : this.state.entry + this.state.tiles[action]
                })
                break;
        }
    }
    render() {
        return (
            <>
            <div className='background-div'>
                <Display value={this.state.value} entry={this.state.entry}/>
                <div className='buttons'>
                    {Object.keys(this.state.tiles).map((key, index) => <Tile handleClick={this.handleClick} tileKey={key} tileValue={this.state.tiles[key]} />)}
                </div>
            </div>
            <div>CE</div>
            <div>C</div>
            <div>BS</div>
            <div>÷</div>
            </>
    );
    }
}

export default Calculator;
