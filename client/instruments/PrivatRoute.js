// Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivatRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (rest.isAuthenticated) {
                return <Component {...props} />;
            }

            return (
                <Redirect
                    to={{
                        pathname: '/login',
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
