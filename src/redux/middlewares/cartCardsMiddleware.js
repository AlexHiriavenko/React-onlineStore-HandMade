import { cartCardsAction } from "../actions/cartCardsAction";

export const cartCardsMiddleware = (cartCards) => (dispatch) => {
    localStorage.setItem("cartList", JSON.stringify(cartCards));
    dispatch(cartCardsAction(cartCards));
};
