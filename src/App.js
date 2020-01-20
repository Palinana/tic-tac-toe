import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Board from './components/Board/Board';
import Scoreboard from './components/ScoreBoard/ScoreBoard';

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
