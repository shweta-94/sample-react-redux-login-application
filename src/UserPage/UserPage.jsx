import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        const { user } = this.props.location;
        
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>Welcome to this React App!</p>
                <p>
                    <Link to="/">Back</Link>
                    <Link to="/allusers" className="btn btn-link">See All Users</Link>
                    <Link to="/search" className="btn btn-link">Search for a User</Link>
                    
                </p>
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

const connectedUserPage = connect(mapStateToProps)(UserPage);
export { connectedUserPage as UserPage };