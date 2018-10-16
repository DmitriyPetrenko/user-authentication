// Actions
import { loginActions } from "../actions/Login";

const {
    LOGIN_ACCOUNT,
    CHECK_ACCOUNT,
    REQUEST_ACCOUNT
} = loginActions;
export const login = (state = {}, action) => {
    switch (action.type) {
    case LOGIN_ACCOUNT:
        return state;
    case CHECK_ACCOUNT:
        return state;
    case REQUEST_ACCOUNT:
        return state;
    default:
        return state;
    }
};
