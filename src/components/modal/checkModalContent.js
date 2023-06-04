import { modalVisibleAction } from "../../redux/actions/modalVisibleAction.js";
import { selectedCardAction } from "../../redux/actions/selectedCardAction.js";

function checkModalContent(e, card, dispatch) {
    if (e) {
        const btnDataAttr = e.target.closest("[data-assignment]").getAttribute("data-assignment");
        dispatch(selectedCardAction(btnDataAttr, card));
        dispatch(modalVisibleAction());
    } else {
        dispatch(modalVisibleAction());
    }
}

export default checkModalContent;
