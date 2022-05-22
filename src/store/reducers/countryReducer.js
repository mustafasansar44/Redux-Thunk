import { GET_COUNTRIES_ERROR, GET_COUNTRIES_SUCCESS } from "../actions/countryAction";

const INITIAL_STATE = {
    countries: []
}

export const countryReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state, countries: [...payload]
            }
        case GET_COUNTRIES_ERROR:
            return {
                ...state, message: "Hata Var"
            }
        default:
            return state;
    }
}