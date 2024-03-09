import axios from "axios";

const API = axios.create({ 
  baseURL: "http://localhost:8000", 
  headers: { 
    "UserId": 1,
   }
});

// User


// Metrics
export const getMetrics = (data) => API.get("/portfolio/getmetrics", data); //done

// Portfolio
export const getPortfolio = (data) => API.get("/portfolio/portfolios", data); // done
export const buyAsset = (data) => API.post("/portfolio/buy", data); //done
export const sellAsset = (data) => API.post("/portfolio/sell", data); //done
export const getTopGainersAndLosers = () => API.get("asset_pricing/top_gainers_losers"); //done

// Asset
export const getAssetDetails = (ticker) => API.get(`/assets?ticker=${ticker}`, ticker); // done
export const getAllAssets = () => API.get("/assets");  // done

// Watchlist
export const getAllWatchlist = (data) => API.get("/portfolio/watchlist", data); // done
export const addToWatchlist = (data) => API.post(`/portfolio/watchlist/add`, data);
export const removeFromWatchlist = (data) => API.delete(`/portfolio/watchlist/remove`, data);

// All transactions
export const getAllTransactions = () => API.get(`portfolio/transactions`); // done