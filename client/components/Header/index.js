// Core
import React from 'react';

// Components
import Menu from '../Menu';

function Header(props) {
    return (
        <header className="header">
            <Menu {...props} />
        </header>
    );
}

export default Header;
