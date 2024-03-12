import axios from "axios";

const API = axios.create({ 
  // baseURL: "http://localhost:8000", 
  baseURL: "https://pmp-back.azurewebsites.net", 
});

// User


// Metrics
export const getMetrics = (startDate, endDate, email) => API.get(`/portfolio/getmetrics?start=${startDate}&end=${endDate}`, {
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
export const getDailyInvestment = (email) => API.get("/portfolio/get_daily_investments", {
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
export const getAllWatchlist = (email) => API.get("/portfolio/watchlist", {
  headers: {
    "UserId": email,
  }
}); // done
export const addToWatchlist = (data, watchlistId, email) => API.post(`/portfolio/watchlist/${watchlistId}/add`, data, {
  headers: {
    "UserId": email,
  }
});
export const removeFromWatchlist = (data, watchlistId, email) => API.delete(`/portfolio/watchlist/${watchlistId}/remove`, data, {
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

// Notifications
export const getNotifications = (email) => API.get("/notifications/get_notifications?count=6", {
  headers: {
    "UserId": email,
  }
}); // done
export const getActivityLogs = (email) => API.get("/notifications/get_notifications", {
  headers: {
    "UserId": email,
  }
}); // done
export const markNotificationAsRead = (notificationId, email) => API.get(`/notifications/mark_as_read?id=${notificationId}`, {
  headers: {
    "UserId": email,
  }
}); // done
export const markAllNotificationsAsRead = (email) => API.get("/notifications/mark_as_read_all", {
  headers: {
    "UserId": email,
  }
}); // done