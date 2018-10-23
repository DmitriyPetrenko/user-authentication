// Core
import React from "react";
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

export default ButtonLogout;
