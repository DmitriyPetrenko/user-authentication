// Actions
import { userConstans } from "../actions/UserConstants";

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    form: {
        messageError: "",
        isValid: true
    },
    user: {}
};

export const authentication = (state = initialState, action) => {
    switch (action.type) {
    case userConstans.USER_LOGIN_REQUEST:
    case userConstans.USER_REGISTRATION_REQUEST:
        return {
            ...state,
            isFetching: true
        };
    case userConstans.USER_LOGIN_SUCCESS:
    case userConstans.USER_REGISTRATION_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            isFetching: false,
            user: action.user
        };
    case userConstans.USER_LOGIN_FAILURE:
    case userConstans.USER_REGISTRATION_FAILURE:
        return {
            ...state,
            isFetching: true,
            form: {
                messageError: action.messageError,
                isValid: false
            }
        };
    default:
        return state;
    }
};
