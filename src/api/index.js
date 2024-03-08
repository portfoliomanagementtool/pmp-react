import axios from "axios";

const API = axios.create({ 
  baseURL: "http://localhost:8000", 
  headers: { 
    "UserId": 1,
   }
});

// User


// Metrics
export const getMetrics = (data) => API.get("/portfolio/getmetrics", data);

// Portfolio
export const getPortfolio = (data) => API.get("/portfolio/portfolios", data); // done
export const buyAsset = (data) => API.post("/portfolio/buy", data);
export const sellAsset = (data) => API.post("/portfolio/sell", data);

// Asset
export const getAssetDetails = (ticker) => API.get(`/assets?ticker=${ticker}`, ticker); // done
export const getAllAssets = () => API.get("/assets");  // done

// Watchlist
export const getAllWatchlist = (data) => API.get("/portfolio/watchlist", data); // done
export const addToWatchlist = (data) => API.post(`/portfolio/watchlist/add`, data);
export const removeFromWatchlist = (data) => API.delete(`/portfolio/watchlist/remove`, data);

// All transactions
// export const getAllTransactions = (data, userId) => API.get(`/transactions/${userId}`, data);