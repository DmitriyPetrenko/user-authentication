// Core
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function ButtonLogout (props) {
    console.log(props);
    return (
        <button
            className="header__menu-link"
            onClick={() => {
                () => history.push("/");
            }}
        >
            Logout
        </button>
    );
}

export default withRouter(connect()(ButtonLogout));
