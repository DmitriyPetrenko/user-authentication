// Actions
import { registerActions } from "../actions/Registration";

const {
    REGISTER_ACCOUNT,
    CHECK_ACCOUNT,
    REQUEST_ACCOUNT
} = registerActions;
export const registration = (state = {}, action) => {
    switch (action.type) {
    case REGISTER_ACCOUNT:
        return state;
    case CHECK_ACCOUNT:
        return state;
    case REQUEST_ACCOUNT:
        return state;
    default:
        return state;
    }
};
