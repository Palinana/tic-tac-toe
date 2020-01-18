import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Box from '../Box/BoardBox';
import './Board.css';

class Board extends Component {
    state = {
        boxes: Array(9).fill(null),
        history: [],
        xIsNext: true
    }

    render() {
        return (
            /* The game board */
            <div className="board-wrapper">
                <div className="board">
                    {/* <h2 className="board-heading">{status}</h2> */}

                    <div className="board-row">
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;
