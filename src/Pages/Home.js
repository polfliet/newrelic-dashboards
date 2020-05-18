import React from 'react';
import Preview from '../Partials/Preview';
import data from '../data.json';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

        this.setSearch = this.setSearch.bind(this);
        this.search = this.search.bind(this);
    }

    setSearch(event, value) {
        this.setState({
            search: event.target.value
        })
    }

    search(element) {
        let lowercaseSearch = this.state.search.toLowerCase();
        if (element.config.name.toLowerCase().includes(lowercaseSearch)) {
            return true;
        }

        if (element.sources.toString().toLowerCase().includes(lowercaseSearch)) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>New Relic - Dashboards</h1>
                        <p className="lead text-muted">Library of selected New Relic dashboards with their dependencies.</p>
                    </div>
                </section>

                <div className="album bg-light">
                    <div className="container" id="root">
                        <div className="row py-5">
                            <input type="text" className="form-control" id="search" aria-describedby="search" placeholder="Search for specific datasource or technology" value={this.state.search} onChange={this.setSearch} />
                        </div>
                        <div className="row py-3">
                        {data.dashboards.filter(this.search).map((dashboard, i) => {
                            return (<Preview key={dashboard.name} dashboard={dashboard} />)
                        })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
