// Core
import axios from "axios";

// Config
import CONFIG from "../config";

const api = {
    listUsers () {
        return axios.get(`${CONFIG.API_PREFIX}/registration`);
    },
    newUser (user) {
        return axios({
            method: "post",
            url: `${CONFIG.API_PREFIX}/registration`,
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        });
    }
};

export default api;
