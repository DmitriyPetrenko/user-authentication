// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

// Components
import ButtonLogout from '../ButtonLogout';
// Actions
import UserActions from '../../actions';

class Menu extends Component {
    static propTypes = {
        isAuthenticated: bool.isRequired
    };

    constructor(props) {
        super(props);

        this.boundActionCreators = bindActionCreators(UserActions, props.dispatch);
    }

    render() {
        const { isAuthenticated } = this.props;

        return (
            <nav className="header__menu-wrapper clearfix">
                <ul className="header__menu pull-left">
                    <li className="header__menu-item">
                        <Link to="/" className="header__menu-link">
                            Home
                        </Link>
                    </li>
                    {isAuthenticated && (
                        <li className="header__menu-item">
                            <Link to="/main" className="header__menu-link">
                                App
                            </Link>
                        </li>
                    )}
                </ul>
                <ul className="header__menu pull-right">
                    {isAuthenticated ? (
                        <li className="header__menu-item">
                            <ButtonLogout {...this.boundActionCreators} {...this.props} />
                        </li>
                    ) : (
                        <>
                            <li className="header__menu-item">
                                <Link to="/login" className="header__menu-link">
                                    Login
                                </Link>
                            </li>
                            <li className="header__menu-item">
                                <Link to="/registration" className="header__menu-link">
                                    Registration
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = ({ authentication }) => ({
    isAuthenticated: authentication.isAuthenticated
});

export default connect(mapStateToProps)(Menu);
