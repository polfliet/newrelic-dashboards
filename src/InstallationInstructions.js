import React from 'react';

class InstallationInstructions extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
        <ul>
          {this.props.sources.sort().map((source, i) => {
              switch(source) {
                case 'ComputeSample':
                  return ( <li><a href="https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration" target="_BLANK">Amazon EC2 monitoring integration</a></li> )
                break;
                case 'PageView':
                  return ( <li><a href="https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent" target="_BLANK">New Relic Browser</a></li>)
                break;
                case 'SyntheticCheck':
                  return ( <li><a href="https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics" target="_BLANK">New Relic Synthetics</a></li>)
                break;
                case 'SystemSample':
                  return ( <li><a href="https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure" target="_BLANK">New Relic Infrastructure</a></li>)
                break;
                case 'Transaction':
                  return ( <li><a href="https://docs.newrelic.com/docs/apm" target="_BLANK">New Relic APM</a></li>)
                break;
                default:
                  return ( <li>Unknown: {source}</li> )
              }
          })}
        </ul>
    );
  }

}

export default InstallationInstructions;
