// Core
import React from "react";
import { withRouter } from "react-router-dom";
import { func, object } from "prop-types";

function ButtonLogout (props) {
    return (
        <button
            className="header__menu-link"
            onClick={() => {
                props.logout(() => {
                    props.history.push("/");
                });
            }}
        >
            Logout
        </button>
    );
}

ButtonLogout.propTypes = {
    logout: func.isRequired,
    history: object.isRequired
};

export default withRouter((ButtonLogout));
