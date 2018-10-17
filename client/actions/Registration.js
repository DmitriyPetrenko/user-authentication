// Constants
export const RegistrationConstants = {
    NEW_USER: "NEW_USER",
    CHECK_USER: "CHECK_USER",
    REQUEST_USERS: "REQUEST_USERS"
};

// Actions
export const RegistrationActions = {
    newUser (user) {
        return {
            type: RegistrationConstants.NEW_USER,
            user
        };
    },
    checkUser (user) {
        return {
            type: RegistrationConstants.CHECK_USER,
            user
        };
    },
    requestUsers () {
        return {
            type: RegistrationConstants.REQUEST_USERS
        };
    }
};
