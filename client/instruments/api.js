// Core
import axios from "axios";

// Config
import config from "../config";

// Helpers
import { responseHandler, errorHandler } from "./helpers";

const {
    prefix,
    path
} = config.API;
const api = {
    login (user) {
        return axios.post(`${prefix}${path.login}`, user)
            .then(responseHandler)
            .catch(errorHandler);
    },
    registration (user) {
        return axios.post(`${prefix}${path.registration}`, user)
            .then(responseHandler)
            .catch(errorHandler);
    },
    userRequest (email) {
        return axios.get(`${prefix}${path.registration}`, email)
            .then(responseHandler)
            .catch(errorHandler);
    }
};

export default api;
