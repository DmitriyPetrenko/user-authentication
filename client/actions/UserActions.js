// Instruments - API
import api from "../instruments/api";

// Constants
import { userConstans } from "./UserConstants";

// Actions
export const registration = (user, callback) => (dispatch) => {
    dispatch({
        type: userConstans.USER_REGISTRATION_REQUEST
    });

    api.registration(user)
        .then((response) => {
            console.log(response);
            dispatch({
                type: userConstans.USER_REGISTRATION_SUCCESS,
                user
            });

            callback();
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: userConstans.USER_REGISTRATION_FAILURE,
                messageError: error.data.messageError
            });
        });
};
