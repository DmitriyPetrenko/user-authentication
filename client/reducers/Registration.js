// Actions
import { RegistrationConstants } from "../actions/Registration";

const {
    NEW_USER,
    CHECK_USER,
    REQUEST_USERS
} = RegistrationConstants;
const initialState = {
    isFetching: false,
    isAuthenticated: false
};

export const registration = (state = initialState, action) => {
    switch (action.type) {
    case NEW_USER:
        return {
            ...state,
            isFetching: false,
            isAuthenticated: true
        };
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
