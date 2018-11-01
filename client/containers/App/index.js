// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

// Components
import Header from '../../components/Header';
// Instruments
import PrivateRoute from '../../instruments/PrivatRoute';
// Routes config
import routes from '../../config/routes';

// Styles
import '../../stylesheet/styles.scss';

// eslint-disable-next-line
@hot(module)
class App extends Component {
    static propTypes = {
        isAuthenticated: bool.isRequired
    };

    render() {
        return (
            <div className="container">
                <Header {...this.props} />
                <Switch>
                    {routes.map(
                        (route) =>
                            route.isPrivate ? (
                                <PrivateRoute
                                    key={route.name}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                    isAuthenticated={this.props.isAuthenticated}
                                />
                            ) : (
                                <Route
                                    key={route.name}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            )
                    )}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ authentication }) => ({
    isAuthenticated: authentication.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(App));
