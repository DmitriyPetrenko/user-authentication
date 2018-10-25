const config = {
    maxLength: {
        username: 30,
        password: 60
    },
    minLength: {
        username: 3,
        password: 6
    },
    api: {
        prefix: 'http://localhost:8080',
        path: {
            login: '/login',
            registration: '/registration'
        }
    }
};

export default config;
