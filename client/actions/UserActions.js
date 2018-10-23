// Instruments - API
import api from "../instruments/api";

// Constants
import { userConstans } from "./UserConstants";

// Actions
export const login = (user, callbackSuccess, callbackError) => (dispatch) => {
    dispatch({
        type: userConstans.USER_LOGIN_REQUEST
    });

    api.login(user)
        .then(() => {
            dispatch({
                type: userConstans.USER_LOGIN_SUCCESS,
                user
            });

            localStorage.setItem("user", JSON.stringify(user));
            callbackSuccess();
        })
        .catch((error) => {
            dispatch({
                type: userConstans.USER_LOGIN_FAILURE,
                messageError: error.data.messageError
            });

            callbackError();
        });
};

export const registration = (user, callbackSuccess, callbackError) => (dispatch) => {
    dispatch({
        type: userConstans.USER_REGISTRATION_REQUEST
    });

    api.registration(user)
        .then(() => {
            dispatch({
                type: userConstans.USER_REGISTRATION_SUCCESS,
                user
            });

            localStorage.setItem("user", JSON.stringify(user));
            callbackSuccess();
        })
        .catch((error) => {
            dispatch({
                type: userConstans.USER_REGISTRATION_FAILURE,
                messageError: error.data.messageError
            });

            callbackError();
        });
};

export const logout = (callbackSuccess) => (dispatch) => {
    localStorage.removeItem("user");

    dispatch({
        type: userConstans.USER_LOGOUT
    });

    callbackSuccess();
};
