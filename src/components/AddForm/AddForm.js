import React from 'react';

class AddForm extends React.Component {

    state = {
        label: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.label);
        this.setState({ label: '' });
    }

    onChange = ({ target: { value } }) => {
        this.setState({ label: value });
    }

    render() {
        const { label } = this.state;

        return (
            <form className="d-flex py-3" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={label}
                    className="form-control mr-3"
                    onChange={this.onChange}
                />
                <button className="btn btn-primary text-nowrap">
                    <i className="fa fa-plus" /> Add
                </button>
            </form>
        )
    }
}

export default AddForm;
