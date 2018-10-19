// Core
import { combineReducers } from "redux";

// Reducers
import { authentication } from "./AuthenticateUser";

export const rootReducer = combineReducers({
    authentication
});
