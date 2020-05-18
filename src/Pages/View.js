import React from 'react';
import Datasource from '../Partials/Datasource';
import InstallationInstructions from '../Partials/InstallationInstructions';
import data from '../data.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        'dashboard': data.dashboards.find(element => element.name === props.match.params.handle),
        'visible': 0,
    };

    this.copy = this.copy.bind(this);
  }

  copy(file) {
    fetch('./data/' + file.location).then(response => response.json()).then((text) => {
        navigator.permissions.query({name: "clipboard-write"}).then(result => {
            if (result.state === "granted" || result.state === "prompt") {
                navigator.clipboard.writeText(JSON.stringify(text)).then(function() {
                    alert('Dashboard copied to clipboard');
                }, function() {
                    alert('Failed to copy dashboard to clipboard');
                });
            }
        });
    });
  }

  render() {
    return (
        <div className="album py-2">
            <div className="container" id="root">
                <div className="row py-4">
                    <h2>{ this.state.dashboard.config.name }</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Created by:</b> { this.state.dashboard.config.author }</p>
                        <Datasource sources={this.state.dashboard.sources} />
                        <h5 className="pt-4">Installation instructions</h5>
                        <p>This dashboard requires the following New Relic products:</p>
                        <InstallationInstructions sources={this.state.dashboard.sources} />
                    </div>
                </div>
                <div className="row py-4">
                    <h3>Dashboards</h3>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs nav-fill">
                            {this.state.dashboard.files.map((file, i) => {
                                let selected = '';
                                if (this.state.visible === i) selected = 'active';
                                return (
                                    <li className="nav-item" key={file.name}>
                                        <button className={"nav-link " + selected} onClick={(event) => { this.setState({visible: i}) }}>{file.name}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {this.state.dashboard.files.map((file, i) => {
                        if (this.state.visible !== i) return ( <span key={file.name}></span> );
                        return (
                            <div className="row px-4 py-2 dashboard-info" key={file.name}>
                                <div className="col-12 py-3 text-right">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button className="btn btn-primary">Import to New Relic (TODO)</button>
                                        <button className="btn btn-info" onClick={(event) => { this.copy(file) }}>Copy to clipboard</button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <img src={ "data/" + this.state.dashboard.name + "/" + this.state.dashboard.screenshots[i]} className="card-img-top" alt="..." />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
  }

}

export default App;
