import React from 'react';
import Datasource from './Datasource';
import data from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);

    console.log('view', props.match.params.handle, data);

    this.state = {
        'dashboard': data.dashboards.find(element => element.name === props.match.params.handle),
        'visible': 0,
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
                        <p><b>Sources:</b> <Datasource sources={this.state.dashboard.sources} /></p>
                    </div>
                    <div className="col-4">
                        <p><button className="btn btn-primary">Import (TODO)</button></p>
                        <p><button className="btn btn-primary">Copy to clipboard (TODO)</button></p>
                    </div>
                </div>
                <div class="row">
                    <h3>Dashboards</h3>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul class="nav nav-tabs nav-fill">
                            {this.state.dashboard.files.map((file, i) => {
                                let selected = '';
                                if (this.state.visible === i) selected = 'active';
                                return (
                                    <li class="nav-item">
                                        <a class={"nav-link " + selected} onClick={(event) => { this.setState({visible: i}) }}>{file.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {this.state.dashboard.files.map((file, i) => {
                        if (this.state.visible !== i) return;
                        return (
                            <div className="row px-4 py-2 dashboard-info">
                                <h4>Screenshot</h4>
                                <img src={ "data/" + this.state.dashboard.name + "/" + this.state.dashboard.screenshots[i]} className="card-img-top" alt="..." />
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
