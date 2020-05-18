import React from 'react';

class InstallationInstructions extends React.Component {

  render() {
    return (
        <ul>
          {this.props.sources.sort().map((source, i) => {
              switch(source) {
                case 'ComputeSample':
                  return ( <li key={source}><a href="https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration" target="_BLANK" rel="noopener noreferrer">Amazon EC2 monitoring integration</a></li> )
                case 'PageView':
                  return ( <li key={source}><a href="https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent" target="_BLANK" rel="noopener noreferrer">New Relic Browser</a></li>)
                case 'SyntheticCheck':
                  return ( <li key={source}><a href="https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics" target="_BLANK" rel="noopener noreferrer">New Relic Synthetics</a></li>)
                case 'SystemSample':
                  return ( <li key={source}><a href="https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure" target="_BLANK" rel="noopener noreferrer">New Relic Infrastructure</a></li>)
                case 'Transaction':
                  return ( <li key={source}><a href="https://docs.newrelic.com/docs/apm" target="_BLANK" rel="noopener noreferrer">New Relic APM</a></li>)
                default:
                  return ( <li key={source}>Unknown: {source}</li> )
              }
          })}
        </ul>
    );
  }

}

export default InstallationInstructions;
