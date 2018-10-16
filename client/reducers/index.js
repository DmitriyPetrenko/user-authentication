// Core
import { combineReducers } from "redux";

// Reducers
import { login } from "./Login";
import { registration } from "./Registration";

export const rootReducer = combineReducers({
    login,
    registration
});
