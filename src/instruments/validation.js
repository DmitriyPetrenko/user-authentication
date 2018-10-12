// Config
import CONFIG from "../config";

export const validate = {
    username (content) {
        const { MAX_LENGTH, MIN_LENGTH } = CONFIG;

        if (content.length >= MIN_LENGTH.username && content.length <= MAX_LENGTH.username) {
            return {
                isValid: true,
                error: ""
            };
        } else if (content.length < MIN_LENGTH.username && content.length !== 0) {
            return {
                isValid: false,
                error: `User name must be at least ${MIN_LENGTH.username} characters long.`
            };
        } else if (content.length > MAX_LENGTH.username) {
            return {
                isValid: false,
                error: `User name must be no longer than ${MAX_LENGTH.username} characters.`
            };
        } else if (content.length === 0) {
            return {
                isValid: false,
                error: "Field is required."
            };
        }
    },
    email (content) {
        const checkConten = /^[a-zA-Z0-9_]+@\w+\.[a-zA-Z]{2,}$/.exec(content);

        if (checkConten) {
            return {
                isValid: true,
                error: ""
            };
        }

        return {
            isValid: false,
            error: "Please enter a valid email address."
        };
    },
    password (content) {
        const { MAX_LENGTH, MIN_LENGTH } = CONFIG;

        if (content.length >= MIN_LENGTH.password && content.length <= MAX_LENGTH.password) {
            return {
                isValid: true,
                error: ""
            };
        } else if (content.length < MIN_LENGTH.password && content.length !== 0) {
            return {
                isValid: false,
                error: `Password must be at least ${MIN_LENGTH.password} characters long.`
            };
        } else if (content.length > MAX_LENGTH.password) {
            return {
                isValid: false,
                error: `Password must be no longer than ${MAX_LENGTH.password} characters.`
            };
        } else if (content.length === 0) {
            return {
                isValid: false,
                error: "Field is required."
            };
        }
    },
    confirmPassword (firstProp, secondProp) {
        if (firstProp !== secondProp) {
            return {
                isValid: false,
                error: "Password does not match."
            };
        }

        return {
            isValid: true,
            error: ""
        };
    }
};
