import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer.js";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
/* eslint-enable */

const middleware = [thunk];

const configureStore = (preloadedState) =>
    createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)));

const store = configureStore({});

export default store;
