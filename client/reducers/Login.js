// Actions
import { LoginConstants } from "../actions/Login";

const {
    LOGIN_USER,
    FIND_FIELD,
    REQUEST_USERS
} = LoginConstants;
const initialState = {
    isFetching: false,
    isAuthenticated: false,
    response: {
        isValid: null,
        messageError: ""
    }
};

export const login = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_USER:
        return {
            ...state,
            isFetching: false,
            isAuthenticated: true,
            response: {
                isValid: true,
                messageError: ""
            }
        };
    case FIND_FIELD:
        return {
            ...state,
            isFetching: false,
            response: {
                isValid: false,
                messageError: "Email or username exist"
            }
        };
    case REQUEST_USERS:
        return {
            ...state,
            isFetching: true
        };
    default:
        return state;
    }
};
