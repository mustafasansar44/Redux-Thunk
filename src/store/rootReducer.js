import { combineReducers } from "redux";
import { countryReducer } from "./reducers/countryReducer";

export default combineReducers({
    country: countryReducer
})

