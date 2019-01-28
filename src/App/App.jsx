import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { UserPage } from '../UserPage';
import { AllUsersPage } from '../AllUsersPage';
import { LoginPage } from '../LoginPage';
import { SignUp } from '../SignUp';
import { SearchPage } from '../SearchPage';

class App extends React.Component {

    render() {
        
        const { alert } = this.props;
        return (
            <div >
                <div >
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <Route exact path="/" component={LoginPage} />
                                <Route exact path="/user" component={UserPage} />
                                <Route path="/signup" component={SignUp} />
                                <Route path="/allusers" component={AllUsersPage} />
                                <Route path="/search" component={SearchPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 