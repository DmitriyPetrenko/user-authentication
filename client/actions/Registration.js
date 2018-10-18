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
        .then((response) => {
            console.log(response);
            if (response.status === 201) {
                dispatch({
                    type: RegistrationConstants.NEW_USER
                });
            } else {
                dispatch({
                    type: RegistrationConstants.FIND_FIELD
                });
            }
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const requestUsers = () => ({
    type: RegistrationConstants.REQUEST_USERS
});
