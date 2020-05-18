import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './Pages/Home';
import View from './Pages/View';

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
