import { getCardsAction, getCardsErrorAction } from "../actions/getCardsAction";
import { modalVisibleAction } from "../actions/modalVisibleAction";

export const getCardsMiddleware = () => (dispatch) =>
    fetch("./catalog.json")
        .then((response) => response.json())
        .then((data) => dispatch(getCardsAction(data)))
        .catch((error) => {
            dispatch(getCardsErrorAction(error));
            dispatch(modalVisibleAction());
        });
