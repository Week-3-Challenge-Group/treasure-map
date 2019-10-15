import React, { Component } from 'react';
import './App.css';

class Grid extends Component {
    render() {
    return (
      <div className ="grid">
         <button id="0" onClick={this.props.boxes}>{this.props.questionBoard[0]} </button>
        <button id ="1" onClick = {this.props.boxes}>{this.props.questionBoard[1]}</button>
        <button id = "2" onClick = {this.props.boxes}>{this.props.questionBoard[2]}</button>
        <button id = "3" onClick = {this.props.boxes}>{this.props.questionBoard[3]}</button>
        <button id ="4" onClick = {this.props.boxes}>{this.props.questionBoard[4]}</button>
        <button id ="5" onClick = {this.props.boxes}>{this.props.questionBoard[5]}</button>
        <button id = "6" onClick = {this.props.boxes}>{this.props.questionBoard[6]}</button>
        <button id = "7" onClick = {this.props.boxes}>{this.props.questionBoard[7]}</button>
        <button id = "8" onClick = {this.props.boxes}>{this.props.questionBoard[8]}</button>
        <p>Attempts Left: {this.props.tries}</p>
        <p>{this.props.winner}</p>
      </div>
    );
  }
}

export default Grid