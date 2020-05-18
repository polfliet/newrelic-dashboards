import React from 'react';
import Datasource from './Datasource';
import {
    Link
  } from "react-router-dom";

class Preview extends React.Component {

  constructor(props) {
    super(props);

    console.log('app', props);

    this.state = {
      'screenshot': this.props.dashboard.screenshots[Math.floor(Math.random() * this.props.dashboard.screenshots.length)],
    };
  }

  render() {
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={ "data/" + this.props.dashboard.name + "/" + this.state.screenshot} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ this.props.dashboard.config.name }</h5>
                    <p><Datasource sources={this.props.dashboard.sources} /></p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link className="btn btn-sm btn-outline-secondary" to={"/view/" + this.props.dashboard.name}>View</Link>
                        </div>
                        <small className="text-muted">Created by: { this.props.dashboard.config.author }</small>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Preview;
