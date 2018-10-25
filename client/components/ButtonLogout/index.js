// Core
import React, { Component } from 'react';
import { func, object } from 'prop-types';

class ButtonLogout extends Component {
    static propTypes = {
        logout: func.isRequired,
        history: object.isRequired
    };

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        const { logout, history } = this.props;

        logout(() => {
            history.push('/');
        });

        event.preventDefault();
    }

    render() {
        return (
            <button className="header__menu-link" onClick={this.onClickHandler}>
                Logout
            </button>
        );
    }
}

export default ButtonLogout;
