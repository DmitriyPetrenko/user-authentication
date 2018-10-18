// Core
import axios from "axios";

// Config
import CONFIG from "../config";

const api = {
    newUser (user) {
        return axios.post(`${CONFIG.API_PREFIX}${CONFIG.PATH}`, user);
    },
    findField (field) {
        try {
            return axios.get(`${CONFIG.API_PREFIX}${CONFIG.PATH}/${field.username}`);
        } catch (error) {
            console.error(error);
        }
    }
};

export default api;
