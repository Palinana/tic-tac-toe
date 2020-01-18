import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Board from './Board/Board';
import Scoreboard from './ScoreBoard/ScoreBoard';

class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Route exact path="/" component={Scoreboard}/>
                    <Route path="/board" component={Board}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
