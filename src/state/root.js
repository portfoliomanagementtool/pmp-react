import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import configReducer from "./slices/configSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
});

export default rootReducer;