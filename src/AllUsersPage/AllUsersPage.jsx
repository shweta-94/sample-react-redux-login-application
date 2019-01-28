import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userService } from '../_services';

class AllUsersPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(
            dispatch => {
                userService.getAll()
                    .then(
                        users => {
                            dispatch(success(users))},
                        error => dispatch(failure(error.toString()))
                    );
            }
        );
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(dispatch => {
        
            userService.delete(id)
                .then(
                    user => dispatch(delete_success(id)),
                    error => dispatch(failure(id, error.toString()))
                );
        });
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>All users:</h3>
                <br/>
                <br/>
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                     <ul class="list-group">         
                     <li class="list-group-item row">
                        <div class="col-md-3">First Name</div>
                        <div class="col-md-9">Last Name</div>
                    </li>          
                        {users.items.map((user, index) =>
                        <li class="list-group-item row" key={user.id}>
                        <div class="col-md-3">{user.firstName}</div>
                        <div class="col-md-3">{user.lastName}</div>
                        <div class="col-md-3">{
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>   
                                    : <span><a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </div>
                        </li>
                        )}
                    </ul>
                }

            <Link to="/">Back</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

function success(users) { 
    return { type: 'USERS_GETALL_SUCCESS', users } }

function delete_success(id) { return { type: 'USERS_DELETE_SUCCESS', id } }
function failure(id, error) { return { type: 'USERS_DELETE_FAILURE', id, error } }

const connectedAllUsersPage = connect(mapStateToProps)(AllUsersPage);
export { connectedAllUsersPage as AllUsersPage };