import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// User


// Portfolio
export const getPortfolio = (data, userId) => API.get(`/portfolio?uuid=${userId}`, data);
export const buyAsset = (data) => API.post("/portfolio/buy", data);
export const sellAsset = (data) => API.post("/portfolio/sell", data);

// Watchlist
export const getAllWatchlist = (data, userId) => API.get(`/watchlist/${userId}`, data);
export const addToWatchlist = (data, userId) => API.post(`/watchlist/${userId}/add`, data);
export const removeFromWatchlist = (data, userId) => API.delete(`/watchlist/${userId}/remove`, data);

// All transactions
// export const getAllTransactions = (data, userId) => API.get(`/transactions/${userId}`, data);