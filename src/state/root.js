import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import configReducer from "./slices/configSlice";
import assetReducer from "./slices/assetSlice";
import watchlistReducer from "./slices/watchlistSlice";
import portfolioReducer from "./slices/portfolioSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
    portfolio: portfolioReducer,
    asset: assetReducer,
    watchlist: watchlistReducer,
});

export default rootReducer;