// Config
import config from "../config";

export const validateFieldOfForm = {
    username (content) {
        const { MAX_LENGTH, MIN_LENGTH } = config;

        if (
            content.length >= MIN_LENGTH.username &&
            content.length <= MAX_LENGTH.username
        ) {
            return {
                isValid: true,
                messageError: ""
            };
        } else if (
            content.length < MIN_LENGTH.username &&
            content.length !== 0
        ) {
            return {
                isValid: false,
                messageError: `User name must be at least ${MIN_LENGTH.username} characters long.`
            };
        } else if (content.length > MAX_LENGTH.username) {
            return {
                isValid: false,
                messageError: `User name must be no longer than ${MAX_LENGTH.username} characters.`
            };
        } else if (content.length === 0) {
            return {
                isValid: false,
                messageError: "Field is required."
            };
        }
    },
    email (content) {
        const checkContent = /^[a-zA-Z0-9_.-]+@\w+\.[a-zA-Z]{2,}$/.exec(content);

        if (checkContent) {
            return {
                isValid: true,
                messageError: ""
            };
        }

        return {
            isValid: false,
            messageError: "Please enter a valid email address."
        };
    },
    password (content) {
        const { MAX_LENGTH, MIN_LENGTH } = config;
        const find = {
            letter: /[a-zA-Z]/.exec(content),
            digit: /[0-9]/.exec(content)
        };

        if (
            content.length >= MIN_LENGTH.password &&
            content.length <= MAX_LENGTH.password &&
            find.letter && find.digit
        ) {
            return {
                isValid: true,
                messageError: ""
            };
        } else if (
            content.length < MIN_LENGTH.password &&
            content.length !== 0
        ) {
            return {
                isValid: false,
                messageError: `Password must be at least ${MIN_LENGTH.password} characters long.`
            };
        } else if (content.length > MAX_LENGTH.password) {
            return {
                isValid: false,
                messageError: `Password must be no longer than ${MAX_LENGTH.password} characters.`
            };
        } else if (content.length === 0) {
            return {
                isValid: false,
                messageError: "Field is required."
            };
        } else if (find.letter && !find.digit) {
            return {
                isValid: false,
                messageError: "Password must contain at least one numeric character."
            };
        } else if (find.digit && !find.letter) {
            return {
                isValid: false,
                messageError: "Password must contain at least one alphabetic character."
            };
        }
    },
    passwordConfirm (prevContent, content) {
        if (prevContent !== content) {
            return {
                isValid: false,
                messageError: "Password does not match."
            };
        } else if (content.length === 0) {
            return {
                isValid: false,
                messageError: "Field is required."
            };
        }

        return {
            isValid: true,
            messageError: ""
        };
    },
    textarea (content) {
        if (content.length === 0) {
            return {
                isValid: false,
                messageError: "Field is required."
            };
        }

        return {
            isValid: true,
            messageError: ""
        };
    }
};
