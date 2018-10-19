// Core
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivatRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (props.isAuthenticated || localStorage.getItem("isAuthenticated") !== true) {
                return <Component {...props} />;
            }

            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: props.location
                        }
                    }}
                />
            );
        }}
    />
);

export default PrivatRoute;
