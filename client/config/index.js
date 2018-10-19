const config = {
    MAX_LENGTH: {
        username: 30,
        password: 60
    },
    MIN_LENGTH: {
        username: 3,
        password: 6
    },
    API: {
        prefix: "http://localhost:8080",
        path: {
            login: "/login",
            registration: "/registration"
        }
    }
};

export default config;
