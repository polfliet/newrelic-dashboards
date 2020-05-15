import React from 'react';
import Datasource from './Datasource';
import data from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    console.log('view', props.match.params.handle, data);

    this.state = {
        'dashboard': data.dashboards.find(element => element.name === props.match.params.handle),
    };
  }

  render() {
    return (
        <div className="album py-5 bg-light">
            <div className="container" id="root">
                <div className="row">
                    <h2>{ this.state.dashboard.config.name }</h2>
                </div>
                <div className="row">
                    <div className="col-8">
                        <p><b>Created by:</b> { this.state.dashboard.config.author }</p>
                        <p><b>Sources:</b> <Datasource sources={this.state.dashboard.dataSources} /></p>
                    </div>
                    <div className="col-4">
                        <p><button className="btn btn-primary">Import (TODO)</button></p>
                        <p><button className="btn btn-primary">Copy to clipboard (TODO)</button></p>
                    </div>
                </div>
                <div className="row">
                    <h3>Screenshot</h3>
                    <img src={ "data/" + this.state.dashboard.name + "/screenshot.png"} className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    );
  }

}

export default App;
