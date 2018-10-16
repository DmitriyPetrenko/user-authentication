// Config
import CONFIG from "../config";

export const validateRegistration = {
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
        const checkContent = /^[a-zA-Z0-9_.-]+@\w+\.[a-zA-Z]{2,}$/.exec(content);

        if (checkContent) {
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
        const find = {
            letter: /[a-zA-Z]/.exec(content),
            digit: /[0-9]/.exec(content)
        };

        if (content.length >= MIN_LENGTH.password && content.length <= MAX_LENGTH.password && find.letter && find.digit) {
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
        } else if (find.letter && !find.digit) {
            return {
                isValid: false,
                error: "Password must contain at least one numeric character."
            };
        } else if (find.digit && !find.letter) {
            return {
                isValid: false,
                error: "Password must contain at least one alphabetic character."
            };
        }
    },
    confirmPassword (prevContent, content) {
        if (prevContent !== content) {
            return {
                isValid: false,
                error: "Password does not match."
            };
        } else if (content.length === 0) {
            return {
                isValid: false,
                error: "Field is required."
            };
        }

        return {
            isValid: true,
            error: ""
        };
    }
};

export const validateLogin = {
    username (content) {
        if (content.length === 0) {
            return {
                isValid: false,
                error: "Field is required."
            };
        }

        return {
            isValid: true,
            error: ""
        };
    },
    password (content) {
        if (content.length === 0) {
            return {
                isValid: false,
                error: "Field is required."
            };
        }

        return {
            isValid: true,
            error: ""
        };
    }
};

export const validateCorrection = {
    textarea (content) {
        if (content.length === 0) {
            return {
                isValid: false,
                error: "Field is required."
            };
        }

        return {
            isValid: true,
            error: ""
        };
    }
};
