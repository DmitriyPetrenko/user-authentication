// Core
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bool } from "prop-types";

// Components
import Header from "../../components/Header";
// Containers
import Home from "../../routes/Home";
import Login from "../../routes/Login";
import Registration from "../../routes/Registration";
import NotFound from "../../routes/NotFound";
import Main from "../../routes/Main";
import PrivateRoute from "../../instruments/PrivatRoute";

// Styles
import "../../stylesheet/styles.scss";

class App extends Component {
    static propTypes = {
        isAuthenticated: bool.isRequired
    }

    render () {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={ Home }
                    />
                    <PrivateRoute
                        path="/main"
                        component={ Main }
                        isAuthenticated={ this.props.isAuthenticated }
                    />
                    <Route
                        path="/login"
                        component={ Login }
                    />
                    <Route
                        path="/registration"
                        component={ Registration }
                    />
                    <Route
                        component={ NotFound }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ authentication }) => ({
    isAuthenticated: authentication.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(App));
