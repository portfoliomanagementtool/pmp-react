import axios from "axios";

const API = axios.create({ 
  baseURL: "http://localhost:8000", 
  headers: { 
    "UserId": 1,
   }
});

// User


// Metrics
export const getMetrics = (data) => API.get("/portfolio/metrics", data);

// Portfolio
export const getPortfolio = (data) => API.get("/portfolio/portfolios", data); // done
export const buyAsset = (data) => API.post("/portfolio/buy", data);
export const sellAsset = (data) => API.post("/portfolio/sell", data);

// Asset
export const getAllAssets = (data) => API.get("/asset", data);  // done

// Watchlist
export const getAllWatchlist = (data) => API.get("/portfolio/watchlist", data); // done
export const addToWatchlist = (data) => API.post(`/portfolio/watchlist/add`, data);
export const removeFromWatchlist = (data) => API.delete(`/portfolio/watchlist/remove`, data);

// All transactions
// export const getAllTransactions = (data, userId) => API.get(`/transactions/${userId}`, data);