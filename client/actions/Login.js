// Constants
export const LoginConstants = {
    CHECK_USER: "CHECK_USER",
    REQUEST_USERS: "REQUEST_ACCOUNT"
};

// Actions
export const LoginActions = {
    checkUser (user) {
        return {
            type: LoginConstants.CHECK_USER,
            user
        };
    },
    requestUsers () {
        return {
            type: LoginConstants.REQUEST_USERS
        };
    }
};
