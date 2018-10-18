// Instruments - API
import api from "../instruments/api";

// Constants
export const LoginConstants = {
    LOGIN_USER: "LOGIN_USER",
    REQUEST_USERS: "REQUEST_ACCOUNT"
};

// Actions
export const newUser = (user) => (dispatch) => {
    dispatch(requestUsers());

    api.loginUser(user)
        .then((response) => {
            console.log(response);
            if (response.status === 201) {
                dispatch({
                    type: LoginConstants.LOGIN_USER
                });
            } else {
                dispatch({
                    type: LoginConstants.FIND_FIELD
                });
            }
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const requestUsers = () => ({
    type: LoginConstants.REQUEST_USERS
});
