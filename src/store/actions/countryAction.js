import axios from "axios"

export const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS"
export const GET_COUNTRIES_ERROR = "GET_COUNTRIES_ERROR"

export function getCountries() {
    return (dispatch) => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => {
            dispatch({type: GET_COUNTRIES_SUCCESS, payload: response.data})
        }).catch((error) => {
            dispatch({type: GET_COUNTRIES_ERROR, payload: error})
        })
    }
}
