import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';

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
    let newBoard = []
    for (let i = 0; i < this.state.board.length; i++) {
      newBoard.push('?');
    }
    
    let newResultBoard = [];
    for (let i = 0; i < this.state.resultBoard.length; i++) {
      newResultBoard.push('tree');
    }
   
    let treasureIndex
    let bombIndex
    do {
      treasureIndex = Math.floor(Math.random()*9)
      bombIndex = Math.floor(Math.random()*9)
    } while (treasureIndex === bombIndex)
    
    
    this.state.resultBoard = newResultBoard
    this.state.resultBoard.splice(treasureIndex,1,'treasure')
    this.state.resultBoard.splice(bombIndex,1,'bomb')
   
    this.setState({resultBoard: this.state.resultBoard,
      board: newBoard, attemptsLeft: 5, won: 'Make a guess!'
    })
  }
    
  
  render() {
    return (
      <div>
        <div id="Grid">
          <Grid boxes={this.handleClick}
            tries={this.state.attemptsLeft}
            winner={this.state.won}
            questionBoard={this.state.board}/>
        </div>
        <div className ="PlayAgain">
          <button onClick = {this.startOver}>Play Again!</button>
        </div>
      </div>
    );
  }
}

export default App;
