import axios from "axios";

const API = axios.create({ 
  baseURL: "http://localhost:8000", 
});

// User


// Metrics
export const getMetrics = (email) => API.get("/portfolio/getmetrics", {
  headers: {
    "UserId": email,
  }
}); //done

// Portfolio
export const getPortfolio = (email) => API.get("/portfolio/portfolios", {
  headers: {
    "UserId": email,
  }
}); // done
export const buyAsset = (data, email) => API.post("/portfolio/buy", data, {
  headers: {
    "UserId": email,
  }
}); //done
export const sellAsset = (data, email) => API.post("/portfolio/sell", data, {
  headers: {
    "UserId": email,
  }
}); //done
export const getPortfolioAssetDetails = (ticker, email) => API.get(`/portfolio/portfolios?ticker=${ticker}`, {
  headers: {
    "UserId": email,
  }
}); //done

// Asset
export const getAssetDetails = (ticker) => API.get(`/assets?ticker=${ticker}`, ticker); // done
export const getAllAssets = () => API.get("/assets");  // done

// Asset Pricing
export const getTopGainersAndLosers = () => API.get("asset_pricing/top_gainers_losers"); //done
export const getAssetPrice = (ticker) => API.get(`asset_pricing/latest?ticker=${ticker}`); // done

// Watchlist
export const getAllWatchlist = (data, email) => API.get("/portfolio/watchlist", data, {
  headers: {
    "UserId": email,
  }
}); // done
export const addToWatchlist = (data, email) => API.post(`/portfolio/watchlist/add`, data, {
  headers: {
    "UserId": email,
  }
});
export const removeFromWatchlist = (data, email) => API.delete(`/portfolio/watchlist/remove`, data, {
  headers: {
    "UserId": email,
  }
});

// All transactions
export const getAllTransactions = (email) => API.get(`portfolio/transactions`, {
  headers: {
    "UserId": email,
  }
}); // done