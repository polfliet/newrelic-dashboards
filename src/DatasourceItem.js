import React from 'react';

class DatasourceItem extends React.Component {

  constructor(props) {
    super(props);

    let name = '';
    switch(props.source) {
        case 'Transaction': name = 'APM'; break;
        case 'SystemSample': name = 'Infrastructure'; break;
        case 'ProcessSample': name = 'Infrastructure - Processes'; break;
        default:
            name = props.source;
        break;
    }

    this.state = {
        name,
    };
  }

  render() {
    return (
      <span class="badge badge-primary">{this.state.name}</span>
    );
  }

}

export default DatasourceItem;
