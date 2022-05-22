import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"

const composedEnhancers = compose(applyMiddleware(thunk), devToolsEnhancer())

export const getStore = () => {
    return createStore(rootReducer, composedEnhancers)
}