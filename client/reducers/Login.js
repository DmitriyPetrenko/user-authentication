// Actions
import { LoginConstants } from "../actions/Login";

const {
    CHECK_USER,
    REQUEST_USERS
} = LoginConstants;
const initialState = {
    isFetching: false,
    isAuthenticated: false
};

export const login = (state = initialState, action) => {
    switch (action.type) {
    case CHECK_USER:
        return state;
    case REQUEST_USERS:
        return {
            ...state,
            isFetching: true
        };
    default:
        return state;
    }
};
