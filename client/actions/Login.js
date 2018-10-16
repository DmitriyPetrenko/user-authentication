export const loginActions = {
    LOGIN_ACCOUNT: "LOGIN_ACCOUNT",
    CHECK_ACCOUNT: "CHECK_ACCOUNT",
    REQUEST_ACCOUNT: "REQUEST_ACCOUNT"
};

export const loginAccount = (data) => ({
    type: loginActions.LOGIN_ACCOUNT,
    data
});

export const checkAccount = (data) => ({
    type: loginActions.CHECK_ACCOUNT,
    data
});

// const requestAccount = (data) => ({
//     type: loginActions.REQUEST_ACCOUNT,
//     data
// });
