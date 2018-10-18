// Core
import axios from "axios";

// Config
import CONFIG from "../config";

const api = {
    newUser (user) {
        return axios.post(`${CONFIG.API_PREFIX}${CONFIG.PATH}`, user);
    },
    findField (field) {
        return axios.get(`${CONFIG.API_PREFIX}${CONFIG.PATH}/${field.username}`);
    }
};

export default api;
