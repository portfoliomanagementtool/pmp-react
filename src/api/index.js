import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// Assets
export const verifyToken = (user, access_token) => API.get(`api/verify_token?user=${user}`, { 
    headers: {
        'Authorization': `Bearer ${access_token}`
    }
});
