export const registerActions = {
    REGISTER_ACCOUNT: "REGISTER_ACCOUNT",
    CHECK_ACCOUNT: "CHECK_ACCOUNT",
    REQUEST_ACCOUNT: "REQUEST_ACCOUNT"
};

export const registerAccount = (data) => ({
    type: registerActions.REGISTER_ACCOUNT,
    data
});

export const checkAccount = (data) => ({
    type: registerActions.CHECK_ACCOUNT,
    data
});

// const requestAccount = (data) => ({
//     type: registerActions.REQUEST_ACCOUNT,
//     data
// });
