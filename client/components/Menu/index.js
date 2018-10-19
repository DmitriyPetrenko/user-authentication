// Core
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bool } from "prop-types";

// Components
import ButtonLogout from "../ButtonLogout";

class Menu extends Component {
    static propTypes = {
        isAuthenticated: bool.isRequired
    }

    render () {
        const { isAuthenticated } = this.props;
        console.log(this.props);

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
                { isAuthenticated ? (
                    <ul className="header__menu pull-right">
                        <li className="header__menu-item">
                            <ButtonLogout />
                        </li>
                    </ul>
                ) : (
                    <ul className="header__menu pull-right">
                        <li className="header__menu-item">
                            <Link
                                to="/login"
                                className="header__menu-link"
                            >
                                Login
                            </Link>
                        </li>
                        <li className="header__menu-item">
                            <Link
                                to="/registration"
                                className="header__menu-link"
                            >
                                Registration
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        );
    }
}

const mapStateToProps = ({ authentication }) => ({
    isAuthenticated: authentication.isAuthenticated
});

export default connect(mapStateToProps)(Menu);
