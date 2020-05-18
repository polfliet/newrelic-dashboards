import React from 'react';
import DatasourceItem from './DatasourceItem';

class Datasource extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
        <div className="sources">
            {this.props.sources.map((source, i) => {
                return (<DatasourceItem source={source} />)
            })}
        </div>
    );
  }

}

export default Datasource;
