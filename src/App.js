import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attemptsLeft: 5,
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      resultBoard: ['tree', 'tree', 'bomb', 'tree', 'treasure', 'tree', 'tree', 'tree', 'tree'],
      won: false
    }
  }
  
  handleClick = (e) => {
    var guessCount = this.state.attemptsLeft - 1;
    var buttonIndex = e.target.id;
    if (guessCount >= 0 && this.state.won === false) {
      
      if(this.state.board[buttonIndex] === "treasure") {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: guessCount, won: true})
      } else {
      this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
      this.setState({board: this.state.board, attemptsLeft: guessCount})
    }
    }
  }
    
  
  
  
  render() {
    return (
      <div className ="grid">
        <button id="0" onClick={this.handleClick}>{this.state.board[0]} </button>
        <button id ="1" onClick = {this.handleClick}>{this.state.board[1]}</button>
        <button id = "2" onClick = {this.handleClick}>{this.state.board[2]}</button>
        <button id = "3" onClick = {this.handleClick}>{this.state.board[3]}</button>
        <button id ="4" onClick = {this.handleClick}>{this.state.board[4]}</button>
        <button id ="5" onClick = {this.handleClick}>{this.state.board[5]}</button>
        <button id = "6" onClick = {this.handleClick}>{this.state.board[6]}</button>
        <button id = "7" onClick = {this.handleClick}>{this.state.board[7]}</button>
        <button id = "8" onClick = {this.handleClick}>{this.state.board[8]}</button>
        <p>{this.state.attemptsLeft}</p>
        
      </div>
    );
  }
}

export default App;
