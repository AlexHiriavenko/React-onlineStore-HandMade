import { modalVisibleAction } from "../../../redux/actions/modalVisibleAction";
import { favoritCardsMiddleware } from "../../../redux/middlewares/favoritCardsMiddlware";
import { cartCardsMiddleware } from "../../../redux/middlewares/cartCardsMiddleware";

export function addToCart(selectedCard, cart, dispatch) {
    const isCardInCart = cart.some((card) => card.articul === selectedCard.articul);
    const newCartArr = isCardInCart
        ? cart.map((card) =>
              card.articul === selectedCard.articul
                  ? {
                        ...card,
                        quantity: card.quantity + 1,
                        sum: (card.quantity + 1) * card.price,
                    }
                  : card
          )
        : [...cart, { ...selectedCard, quantity: 1, sum: selectedCard.price }];

    dispatch(cartCardsMiddleware(newCartArr));
    dispatch(modalVisibleAction());
}

export function removeFromCart(card, cart, dispatch) {
    const newCart = cart.filter((el) => el.articul !== card.articul);
    dispatch(cartCardsMiddleware(newCart));
    dispatch(modalVisibleAction());
}

export function clearAllCart(card, cart, dispatch) {
    dispatch(cartCardsMiddleware([]));
    dispatch(modalVisibleAction());
}

export function clearAllFavorits(card, cart, dispatch) {
    dispatch(favoritCardsMiddleware([]));
    dispatch(modalVisibleAction());
}
