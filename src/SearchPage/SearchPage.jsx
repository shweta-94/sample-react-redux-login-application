import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userService } from '../_services';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { searchName } = this.state;
        const { dispatch } = this.props;
        console.log("this.state",this.state);
        // const { dispatch } = this.props;
        if (searchName) {
            userService.getById(searchName)
            .then(
                
                user => {
                    dispatch(user_found('USER FOUND'));
                },
                error => {
                    dispatch(user_not_found(error.toString()));
                }
            );
        }
    }

    render() {

        const { searchName } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Search Page</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                <label htmlFor="username">Search Term</label>
                <input type="text" className="form-control" name="searchName" value={searchName} onChange={this.handleChange} />
                <Link to="/" className="btn btn-link">Start Over</Link>
                </form>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

function user_found(message) {
    return { type: 'ALERT_SUCCESS', message };
}

function user_not_found(message) {
    return { type: 'ALERT_ERROR', message };
}

const connectedSearchPage = connect(mapStateToProps)(SearchPage);
export { connectedSearchPage as SearchPage };