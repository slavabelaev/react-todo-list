import React from 'react';

class SearchPanel extends React.Component {

    state = {
        searchString: '',
        filterBy: null
    }

    onFilter = ({ target: { value } }) => {
        this.setState({ searchString: value });
        this.props.onFilter(value, this.state.filter);
    }

    changeFilterBy = filterBy => {
        this.setState({ filterBy });
        this.props.onFilter(this.state.searchString, filterBy);
    }

    render() {
        const { searchString, filterBy } = this.state;

        return (
            <div className="d-flex py-3">
                <input
                    type="search"
                    value={searchString}
                    onChange={this.onFilter}
                    className="form-control mr-3"
                />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type="button"
                        className={`btn btn-secondary ${filterBy === null && 'active'}`}
                        onClick={() => this.changeFilterBy(null)}
                    >All</button>
                    <button
                        type="button"
                        className={`btn btn-secondary ${filterBy === 'important' && 'active'}`}
                        onClick={() => this.changeFilterBy('important')}
                    >Important</button>
                    <button
                        type="button"
                        className={`btn btn-secondary ${filterBy === 'done' && 'active'}`}
                        onClick={() => this.changeFilterBy('done')}
                    >Done</button>
                </div>
            </div>
        )
    }
}

export default SearchPanel;
