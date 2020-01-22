import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Storage } from '../../storage/storage';
import { findWinner, areAllBoxesClicked } from '../../utils/functions';

import './Board.css';

class Board extends Component {
    state = {
        boxes: Array(9).fill(null),
        history: [],
        xIsNext: true
    }

    // Create instance of Storage object
    storage = new Storage();

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

        // Add move to game history
        history.push(this.state.xIsNext ? 'x' : 'o');

        // Update component state with new data
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        return (
            <div className="board-wrapper">
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
            </div>
        );
    }
}

export default Board;
