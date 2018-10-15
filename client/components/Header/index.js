// Core
import React, { Component } from "react";

// Components
import Menu from "../Menu";

class Header extends Component {
    render () {
        return (
            <header className="header">
                <Menu />
            </header>
        );
    }
}

export default Header;
