import { combineReducers } from "redux";
import getCardsReducer from "./reducers/getCardsReducer";
import { favoritCardsReducer } from "./reducers/favoritCardsReducer";
import { modalVisibleReducer } from "./reducers/modalVisibleReducer";
import { selectedCardReducer } from "./reducers/selectedCardReducer";
import { cartCardsReducer } from "./reducers/cartCardsReducer";
import { messageOrderSuccessReducer } from "./reducers/messageOrderSuccessReducer";
// import { viewModeReducer } from "./reducers/viewModeReducer";

const rootReducer = combineReducers({
    getCardsReducer,
    favoritCardsReducer,
    modalVisibleReducer,
    selectedCardReducer,
    cartCardsReducer,
    messageOrderSuccessReducer,
    // viewModeReducer,
});

export default rootReducer;
