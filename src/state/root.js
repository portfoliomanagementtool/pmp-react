import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import configReducer from "./slices/configSlice";
import assetReducer from "./slices/assetSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
    asset: assetReducer,
});

export default rootReducer;