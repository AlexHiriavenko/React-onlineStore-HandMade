const initialState = {
    cartCards: JSON.parse(localStorage.getItem("cartList")) || [],
};

export function cartCardsReducer(state = initialState, action) {
    switch (action.type) {
        case "CART_CARDS":
            return {
                ...state,
                cartCards: action.payload,
            };
        default:
            return state;
    }
}
