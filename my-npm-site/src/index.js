import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, Link } from 'react-router';

import './index.css';


import Readme from './readme/Readme';
import Search from './search/Search';
import List from './list/List';


const Main = () => (
    <Router history={hashHistory}>
        <Route path="/" component={List}/>
        <Route path="/readme/:name" component={Readme}/>
  </Router>
);


class App extends React.Component {

    render() {
        return (
            <div>
                <Search/>
                <Main />
            </div>
        );
    }
};


// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
