// Core
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "../../components/Header";
// Containers
import Home from "../Home";
import Login from "../Login";
import Registration from "../Registration";
import NotFound from "../NotFound";

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
