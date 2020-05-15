import React from 'react';
import Preview from './Preview';
import data from './data.json';

class App extends React.Component {

    constructor(props) {
        super(props);

        console.log('data', data);
    }

    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container" id="root">
                    <div className="row">
                    {data.dashboards.map((dashboard, i) => {
                        return (<Preview dashboard={dashboard} />)
                    })}
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
