import React from 'react';
import Preview from '../Partials/Preview';
import data from '../data.json';

class Home extends React.Component {

    constructor(props) {
        super(props);

        console.log('data', data);
    }

    render() {
        return (
            <div>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1>New Relic - Dashboards</h1>
                        <p class="lead text-muted">Library of selected New Relic dashboards with their dependencies.</p>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container" id="root">
                        <div className="row">
                        {data.dashboards.map((dashboard, i) => {
                            return (<Preview dashboard={dashboard} />)
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
