// Core
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Menu extends Component {
    render () {
        return (
            <nav className="header__menu-wrapper clearfix">
                <ul className="header__menu pull-left">
                    <li className="header__menu-item">
                        <Link
                            to="/"
                            className="header__menu-link"
                        >
                            Home
                        </Link>
                    </li>
                </ul>
                <ul className="header__menu pull-right">
                    <li className="header__menu-item">
                        <NavLink
                            to="/login"
                            className="header__menu-link"
                            activeClassName="is-active"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className="header__menu-item">
                        <NavLink
                            to="/registration"
                            className="header__menu-link"
                            activeClassName="is-active"
                        >
                            Registration
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
