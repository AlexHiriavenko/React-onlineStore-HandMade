import React, { useContext } from "react";
import { ViewModeContext } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import CardsDisplayMode from "../../components/CardsList/toggleDisplayMode/CardsDisplayMode";
import CardsGallery from "../../components/CardsList/GalleryMode/CardsGallery.jsx";
import CardsTable from "../../components/CardsList/TableMode/CardsTable";
import FormOrder from "../../components/form/FormOrder.jsx";
import Button from "../../components/button/index.jsx";
import checkModalContent from "../../components/modal/checkModalContent.js";
import s from "./cart.module.scss";
import { messageOrderSuccessAction } from "../../redux/actions/orderSuccessAction.js";

const Cart = () => {
    const dispatch = useDispatch();
    const succeessOrderMessage = useSelector(
        (state) => state.messageOrderSuccessReducer.isVisibleMessage
    );
    const cart = useSelector((state) => state.cartCardsReducer.cartCards);
    const anyCardInCart = cart[0];
    // const viewMode = useSelector((state) => state.viewModeReducer.viewMode);
    const { viewMode } = useContext(ViewModeContext);

    return (
        <>
            {succeessOrderMessage && (
                <div className={s.successMessageBlock}>
                    <h2 className={s.successMessage}>Заказ Успешно Сформирован</h2>
                    <Button
                        text={"OK"}
                        onClick={() => dispatch(messageOrderSuccessAction(false))}
                        bg={"rgb(5, 147, 5)"}
                        color={"burlywood"}
                    />
                </div>
            )}
            {cart.length ? (
                <>
                    <div className={s.optionsGroup}>
                        <Button
                            text={"Clear All"}
                            bg={"bisque"}
                            color={"brown"}
                            onClick={(e) => {
                                checkModalContent(e, anyCardInCart, dispatch);
                            }}
                            assignment={"clearAllCart"}
                        ></Button>
                        <CardsDisplayMode />
                    </div>
                    {viewMode === "Table" ? (
                        <CardsTable cards={cart} assignment={"removeFromCart"} />
                    ) : null}
                    {viewMode === "Gallery" ? (
                        <CardsGallery
                            cards={cart}
                            btnAssignment={"removeFromCart"}
                            btnText={"remove from Cart"}
                        />
                    ) : null}
                    <FormOrder />
                </>
            ) : (
                <h2 className="h2Title" style={{ textAlign: "center", fontStyle: "italic" }}>
                    В корзине пока что ничего нет
                </h2>
            )}
        </>
    );
};

export default Cart;
