import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import View from './View';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/view/:handle" component={View} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        )
    }

}

export default App;
