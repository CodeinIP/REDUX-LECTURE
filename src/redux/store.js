import { legacy_createStore,combineReducers } from "redux";
import { reducer as AppReducer } from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
const rootReducer = combineReducers({
    AuthReducer,AppReducer
})
export const store = legacy_createStore(rootReducer);
