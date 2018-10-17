// Instruments - API
import api from "../instruments/api";

// Constants
export const RegistrationConstants = {
    NEW_USER: "NEW_USER",
    CHECK_USER: "CHECK_USER",
    REQUEST_USERS: "REQUEST_USERS"
};

// Actions
export const newUser = (user) => (dispatch) => {
    dispatch(requestUsers());

    api.newUser(user)
        .then(() => ({
            type: RegistrationConstants.NEW_USER
        }))
        .catch((error) => console.log(error));
};

export const checkUser = () => (dispatch) => {
    dispatch(requestUsers());

    api.listUsers()
        .then(({ data }) => ({
            type: RegistrationConstants.CHECK_USER,
            users: data
        }))
        .catch((error) => console.log(error));
};

export const requestUsers = () => ({
    type: RegistrationConstants.REQUEST_USERS
});
