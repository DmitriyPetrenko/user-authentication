// Core
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bool } from "prop-types";

class Menu extends Component {
    static propTypes = {
        isAuthenticated: bool.isRequired
    }

    render () {
        const { isAuthenticated } = this.props;

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
                { !isAuthenticated
                    ? <ul className="header__menu pull-right">
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
                    : <ul className="header__menu pull-right">
                        <li className="header__menu-item">
                            <Link
                                to="/login"
                                className="header__menu-link"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                }
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated || state.registration.isAuthenticated
});

export default connect(mapStateToProps)(Menu);
