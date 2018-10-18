// Actions
import { RegistrationConstants } from "../actions/Registration";

const {
    NEW_USER,
    FIND_FIELD,
    REQUEST_USERS
} = RegistrationConstants;
const initialState = {
    isFetching: false,
    isAuthenticated: false,
    response: ""
};

export const registration = (state = initialState, action) => {
    switch (action.type) {
    case NEW_USER:
        return {
            ...state,
            isFetching: false,
            isAuthenticated: true
        };
    case FIND_FIELD:
        return {
            ...state,
            response: action.response,
            isFetching: false
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
