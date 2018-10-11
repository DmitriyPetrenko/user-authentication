// Core
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render () {
        return (
            <ul className="header__menu">
                <li className="header__menu-item"><NavLink to="/">Home</NavLink></li>
                <li className="header__menu-item"><NavLink to="/login">Login</NavLink></li>
                <li className="header__menu-item"><NavLink to="/registration">Registration</NavLink></li>
            </ul>
        );
    }
}

export default Menu;
