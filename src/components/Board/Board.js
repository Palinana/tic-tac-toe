import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Storage } from '../../storage/storage';
import { findWinner, areAllBoxesClicked } from '../../utils/functions';

import './Board.css';

// Create instance of Storage object
const storage = new Storage();

class Board extends Component {
    state = {
        boxes: Array(9).fill(null),
        xIsNext: true,
        scoreX: 0,
        score0: 0,
        tie: 0,
        isWinner: false,
        status: '' 
    }

    static getDerivedStateFromProps(props, state) {
        const { boxes } = state;
        let { scoreX, score0, tie, status } = state;

        const winner = findWinner(boxes);
        const isFilled = areAllBoxesClicked(boxes);


        if (winner === 'x') {
            // update status message
            status = `The winner is: ${winner}!`

            // Push data about the game to storage
            storage.update([`${winner} won`]);
            scoreX++;

            return {
                scoreX,
                isWinner: true,
                status
            };
        }
        if (winner === 'o') {
             // update status message
            status = `The winner is: ${winner}!`

            // Push data about the game to storage
            storage.update([`${winner} won`]);
            score0++;

            return {
                score0,
                isWinner: true,
                status
            };
        }

        if (!winner && isFilled) {
            // If game is drawn, create status message
            status = 'Game drawn!'

            // Push data about the game to storage
            storage.update(['Game drawn']);
            tie++;

            return {
                tie,
                isWinner: true,
                status
            };
        }
    }

    // Handle click on boxes on the board.
    handleBoxClick(index) {
        // Get current state of boxes and history
        const boxes = this.state.boxes.slice();
        let history = this.state.history;

        // Stop the game if board contains winning combination
        if (findWinner(boxes) || boxes[index]) {
            return;
        }

        // Stop the game if all boxes are clicked (filled)
        if(areAllBoxesClicked(boxes) === true) {
            return;
        }

        // Mark the box either as 'x' or 'o'
        boxes[index] = this.state.xIsNext ? 'x' : 'o';

        // Update component state with new data
        this.setState({
            boxes: boxes,
            xIsNext: !this.state.xIsNext
        });
    }

    // Handle board restart - set component state to initial state
    handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            xIsNext: true
        })
    }

    render() {
        let { status, isWinner } = this.state;

        return (
            <div className="board-wrapper">
                <table id="scoreboard" align="center">
                    <tr>
                        <td class="player"> Player (X) </td>
                        <td class="player"> Tie </td>
                        <td class="player"> Computer (0) </td>
                    </tr>
                    <tr>
                        <td class="score" id="player1">
                            {this.state.scoreX} 
                        </td>
                        <td class="score" id="tie">
                            {this.state.tie} 
                        </td>
                        <td class="score" id="player2">
                            {this.state.score0}  
                        </td>
                    </tr>
                </table>

                <table className="board">
                    <tbody className="board-row">
                        <tr>
                            <td onClick={() => this.handleBoxClick(0)}>{this.state.boxes[0]}</td>
                            <td onClick={() => this.handleBoxClick(1)}>{this.state.boxes[1]}</td>
                            <td onClick={() => this.handleBoxClick(2)}>{this.state.boxes[2]}</td>
                        </tr>

                        <tr>
                            <td onClick={() => this.handleBoxClick(3)}>{this.state.boxes[3]}</td>
                            <td onClick={() => this.handleBoxClick(4)}>{this.state.boxes[4]}</td>
                            <td onClick={() => this.handleBoxClick(5)}>{this.state.boxes[5]}</td>
                        </tr>

                        <tr>
                            <td onClick={() => this.handleBoxClick(6)}>{this.state.boxes[6]}</td>
                            <td onClick={() => this.handleBoxClick(7)}>{this.state.boxes[7]}</td>
                            <td onClick={() => this.handleBoxClick(8)}>{this.state.boxes[8]}</td>
                        </tr>
                            
                    </tbody>
                </table>
                <h2 className="board-heading">{status}</h2>

                {/* Button to start new game */}
                {isWinner && <div className="board-footer">
                    <button className="btn" onClick={this.handleBoardRestart}>Start new game</button>
                </div>}
            </div>
        );
    }
}

export default Board;
