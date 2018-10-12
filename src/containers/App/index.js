// Core
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "../../components/Header";
// Containers
import Home from "../../routes/Home";
import Login from "../../routes/Login";
import Registration from "../../routes/Registration";
import NotFound from "../../routes/NotFound";

// Styles
import "../../stylesheet/styles.scss";

class App extends Component {
    render () {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/login" component={ Login } />
                    <Route path="/registration" component={ Registration } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        );
    }
}

export default App;
