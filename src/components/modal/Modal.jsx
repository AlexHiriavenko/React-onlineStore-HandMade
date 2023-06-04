import { useSelector, useDispatch } from "react-redux";
import s from "./modal.module.scss";
import Button from "../button";
import { findModalContent } from "./modalsContent";
import { modalVisibleAction } from "../../redux/actions/modalVisibleAction.js";
import {
    addToCart,
    removeFromCart,
    clearAllCart,
    clearAllFavorits,
} from "./modalFunctions/modalFunctions";

function Modal(props) {
    const activeModal = useSelector((state) => state.modalVisibleReducer.isActiveModal);
    const btnAssign = useSelector((state) => state.selectedCardReducer.btnAssign);
    const selectedCard = useSelector((state) => state.selectedCardReducer.selectedCard);
    const cart = useSelector((state) => state.cartCardsReducer.cartCards);
    const dispatch = useDispatch();

    const { id, headerText, bodyText } = findModalContent(btnAssign, cart, selectedCard);

    const showHideModal = () => dispatch(modalVisibleAction());

    const modalFunctions = {
        modalAddToCart: addToCart,
        removeFromCart: removeFromCart,
        clearAllCart: clearAllCart,
        clearAllFavorits: clearAllFavorits,
    };

    const onClickOk = modalFunctions[btnAssign];

    return (
        <div
            data-testid="modal"
            className={activeModal ? s.modal + " " + s.active : s.modal}
            onClick={showHideModal}
        >
            <div
                className={activeModal ? s["modal__content"] + " " + s.active : s["modal__content"]}
                onClick={(e) => e.stopPropagation()}
                style={{ color: "bisque", backgroundColor: "brown" }}
            >
                <div className={s.x} onClick={showHideModal}>
                    ×
                </div>
                <header
                    className={s.modalHeader}
                    style={{ backgroundColor: "bisque", color: "brown" }}
                >
                    {headerText}
                </header>
                <div className={s.modalBody}>{bodyText}</div>
                <footer className={s.footer}>
                    <Button
                        text="OK"
                        bg="bisque"
                        color="brown"
                        onClick={
                            id
                                ? () => onClickOk(selectedCard, cart, dispatch)
                                : () => showHideModal()
                        }
                    />
                    <Button text="Cancel" bg="bisque" color="brown" onClick={showHideModal} />
                </footer>
            </div>
        </div>
    );
}

export default Modal;
