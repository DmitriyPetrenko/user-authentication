// Instruments - API
import api from "../instruments/api";

// Constants
export const RegistrationConstants = {
    NEW_USER: "NEW_USER",
    FIND_FIELD: "FIND_FIELD",
    REQUEST_USERS: "REQUEST_USERS"
};

// Actions
export const newUser = (user) => (dispatch) => {
    dispatch(requestUsers());

    api.newUser(user)
        .then(() => {
            dispatch({
                type: RegistrationConstants.NEW_USER
            });
        })
        .catch((error) => console.log(error));
};

export const findField = (field) => (dispatch) => {
    dispatch(requestUsers());

    api.findField(field)
        .then(({ data }) => {
            dispatch({
                type: RegistrationConstants.FIND_FIELD,
                response: data
            });
        })
        .catch((error) => console.log(error));
};

export const requestUsers = () => ({
    type: RegistrationConstants.REQUEST_USERS
});
