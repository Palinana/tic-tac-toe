import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Scoreboard extends Component {
    state = {
      scoreboard: []
    }

    render() {
        return (
            <div className="game">
                <h1>Recent games:</h1>

                {/* Link to start new game */}
                <Link to="/board">
                    <button className="btn">Start new game</button>
                </Link>
            </div>
        )
    }
}

export default Scoreboard;
