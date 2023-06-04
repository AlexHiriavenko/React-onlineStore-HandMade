import { favoritAction } from "../actions/favoritCardsAction";

export const favoritCardsMiddleware = (favoritCards) => (dispatch) => {
    localStorage.setItem("favoritsList", JSON.stringify(favoritCards));
    dispatch(favoritAction(favoritCards));
};
