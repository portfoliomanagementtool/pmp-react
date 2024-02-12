import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import configReducer from "./slices/configSlice";
import assetReducer from "./slices/assetSlice";
import watchlistReducer from "./slices/watchlistSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
    asset: assetReducer,
    watchlist: watchlistReducer,
});

export default rootReducer;