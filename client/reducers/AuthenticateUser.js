// Actions
import { userConstans } from "../actions/UserConstants";

const user = localStorage.getItem("user");
const initialState = user ? {
    isAuthenticated: true,
    isFetching: false,
    messageError: "",
    user
} : {
    isAuthenticated: false,
    isFetching: false,
    messageError: "",
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
        return {
            ...state,
            isAuthenticated: true,
            isFetching: false,
            messageError: "",
            user: action.user
        };
    case userConstans.USER_REGISTRATION_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            isFetching: false,
            messageError: "",
            user: action.user
        };
    case userConstans.USER_LOGIN_FAILURE:
        return {
            ...state,
            isFetching: false,
            messageError: "Invalid email / password pair"
        };
    case userConstans.USER_REGISTRATION_FAILURE:
        return {
            ...state,
            isFetching: false,
            messageError: "Email exists"
        };
    case userConstans.USER_LOGOUT:
        return state;
    default:
        return state;
    }
};
