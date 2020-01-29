import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Board from './components/Board/Board';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Board}/>
            </BrowserRouter>
        )
    }
}

export default App;
