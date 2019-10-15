import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attemptsLeft: 5,
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      resultBoard: ['tree', 'tree', 'bomb', 'tree', 'treasure', 'tree', 'tree', 'tree', 'tree'],
      won: 'Make a guess!'
    }
  }
  
  handleClick = (e) => {
    var guessCount = this.state.attemptsLeft - 1;
    var buttonIndex = e.target.id;
    if (guessCount >= 0) {
      if(this.state.resultBoard[buttonIndex] === "treasure") {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: 0, won: 'You Won!'})
        console.log(this.state.attemptsLeft)
      } else if (this.state.resultBoard[buttonIndex] === "bomb" || guessCount === 0) {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: 0, won: 'You Lost!'})
      } else {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: guessCount, won: 'Keep Trying'})
      }
    }
  }
  
  startOver = () => {
    //update board state
     //resultBoard with special index defined with  Math.floor(Math.random() * 9)
    
    let newBoard = [];
    for (let i = 0; i < this.state.resultBoard.length; i++) {
      newBoard.push('tree');
    }
   
    let treasureIndex
    let bombIndex
    do {
      treasureIndex = Math.floor(Math.random()*9)
      bombIndex = Math.floor(Math.random()*9)
    } while (treasureIndex === bombIndex)
    
    this.state.resultBoard = newBoard
    this.state.resultBoard.splice(treasureIndex,1,'treasure')
    this.state.resultBoard.splice(bombIndex,1,'bomb')
   
    this.setState({resultBoard: this.state.resultBoard})
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
        <p>Attempts Left: {this.state.attemptsLeft}</p>
        <p>{this.state.won}</p>
        <br/>
        <button onClick = {this.startOver}>Play Again!</button>
        
        
      </div>
    );
  }
}

export default App;
